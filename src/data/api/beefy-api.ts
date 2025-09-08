import {
  ApiApys,
  ApiPrices,
  ApiTvls,
  ApiVaults,
  ApiVaultsWithApys,
  isApiApy,
} from './beefy-api-types';

const BASE_API = 'https://api.beefy.finance';

function getCacheBuster(): number {
  const d = new Date();
  d.setSeconds(0, 0);
  return d.getTime();
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

export async function getGovVaults(): Promise<ApiVaults> {
  const response = await fetch(getApiUrl('gov-vaults'));
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
  const [vaults, govVaults, apys] = await Promise.all([
    getVaults(),
    getGovVaults(),
    getApyBreakdown(),
  ]);

  const fullVaultList = { ...vaults, ...govVaults };

  return Object.entries(fullVaultList).reduce<ApiVaultsWithApys>((vaultsWithApy, [id, vault]) => {
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

export async function getTvls(): Promise<ApiTvls> {
  const response = await fetch(getApiUrl('tvl'));
  const data: Record<string, Record<string, number>> = await response.json();

  if (!data || !('56' in data)) {
    throw new Error(`Failed to fetch TVL`);
  }

  return Object.values(data).reduce((tvls, chainTvls) => {
    Object.entries(chainTvls).forEach(([vaultId, tvl]) => {
      tvls[vaultId] = tvl;
    });

    return tvls;
  }, {} as ApiTvls);
}

export async function getTotalTvl(): Promise<number> {
  const tvls = await getTvls();

  return Object.values(tvls).reduce((total, vaultTvl) => total + vaultTvl, 0);
}
