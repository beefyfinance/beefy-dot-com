import fetch from 'node-fetch';
import { ApiApys, ApiPrices, ApiVaults, ApiVaultsWithApys, isApiApy } from './beefy-api-types';

const BASE_API = 'https://api.beefy.finance';

function getCacheBuster(): number {
  return Math.trunc(Date.now() / (1000 * 60));
}

function getApiUrl(path: string): string {
  return `${BASE_API}/${path}?_=${getCacheBuster()}`;
}

async function getPrices(which: 'prices' | 'lps'): Promise<ApiPrices> {
  const response = await fetch(getApiUrl(which));
  const data = await response.json();

  if (!data || typeof data !== 'object') {
    throw new Error(`Failed to fetch prices`);
  }

  return Object.entries(data).reduce<ApiPrices>((prices, [key, value]) => {
    prices[key] = typeof value === 'number' ? value : 0;
    return prices;
  }, {});
}

export async function getSinglePrices(): Promise<ApiPrices> {
  return getPrices('prices');
}

export async function getLPPrices(): Promise<ApiPrices> {
  return getPrices('lps');
}

export async function getAllPrices(): Promise<ApiPrices> {
  const prices = await Promise.all([getSinglePrices(), getLPPrices()]);
  return Object.assign({}, ...prices);
}

export async function getApyBreakdown(): Promise<ApiApys> {
  const response = await fetch(getApiUrl('apy/breakdown'));
  const data = await response.json();

  if (!data || typeof data !== 'object') {
    throw new Error(`Failed to fetch apy breakdown`);
  }

  return Object.entries(data).reduce<ApiApys>((apys, [vaultId, apyData]) => {
    if (isApiApy(apyData)) {
      apys[vaultId] = apyData;
    } else {
      apys[vaultId] = { totalApy: 0 };
    }

    return apys;
  }, {});
}

export async function getVaults(): Promise<ApiVaults> {
  const response = await fetch(getApiUrl('vaults'));
  const data = await response.json();

  if (!data || !Array.isArray(data)) {
    throw new Error(`Failed to fetch vaults`);
  }

  return data.reduce<ApiVaults>((vaults, vault) => {
    const vaultId = vault.id;

    delete vault.id;

    vaults[vaultId] = {
      vaultId,
      ...vault,
    };

    return vaults;
  }, {});
}

export async function getVaultsWithApy(): Promise<ApiVaultsWithApys> {
  const [vaults, apys] = await Promise.all([getVaults(), getApyBreakdown()]);

  return Object.entries(vaults).reduce<ApiVaultsWithApys>((vaultsWithApy, [id, vault]) => {
    const apy = apys[id] || { totalApy: 0 };
    const tradingApr = 'tradingApr' in apy ? apy.tradingApr || 0 : 0;
    const vaultApr =
      'vaultApr' in apy
        ? apy.vaultApr || 0
        : (Math.pow((apy.totalApy || 0) + 1, 1 / 365) - 1) * 365;

    vaultsWithApy[id] = {
      ...vault,
      ...apy,
      totalDaily: (tradingApr + vaultApr) / 365,
    };

    return vaultsWithApy;
  }, {});
}
