export type ApiPrices = Record<string, number>;

export type ApiApy = {
  vaultApr?: number;
  compoundingsPerYear?: number;
  beefyPerformanceFee?: number;
  vaultApy?: number;
  lpFee?: number;
  tradingApr?: number;
  totalApy: number;
};

export type ApiApys = Record<string, ApiApy>;

export function isApiApy(value: any): value is ApiApy {
  return value && typeof value.totalApy === 'number';
}

export type ApiVault = {
  vaultId: string;
  name: string;
  oracleId: string;
  assets: string[];
  chain: string;
  status: 'active' | 'eol' | 'paused';
};

export type ApiVaults = Record<string, ApiVault>;

export type ApiVaultWithApy = ApiVault & {
  totalApy: number;
  totalDaily: number;
};

export type ApiVaultsWithApys = Record<string, ApiVaultWithApy>;

export type ApiTvls = Record<string, number>;
