class Theme {
  public readonly primary = '#59A662';
  public readonly footer = '#121212';
  public readonly cardBg = '#2D3153';
  public readonly cardBorder = '#363B63';

  public readonly text = {
    light: '#F5F5FF',
    middle: '#D0D0DA',
    dark: '#999CB3',
  };

  public readonly h1 = {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 500,
  };

  public readonly h2 = {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500,
  };

  public readonly h3 = {
    fontSize: '21px',
    lineHeight: '24px',
    fontWeight: 500,
  };

  public readonly bodyLg = {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
  };

  public readonly bodyLgMed = {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
  };

  public readonly bodySm = {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 400,
  };

  public readonly bodySmMed = {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 500,
  };

  public readonly sublineLg = {
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  public readonly sublineSm = {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  };

  public readonly breakpoints = {
    xs: 0,
    sm: 768,
    md: 960,
    lg: 1280,
  };

  public readonly containers = {
    xs: 440,
    sm: 768,
    md: 768,
    lg: 1280,
  };

  public readonly chains: Record<string, string> = {
    bsc: '#F0B90B',
    heco: '#02943f',
    avax: '#e74142',
    polygon: '#f5f0fd',
    fantom: '#1969FF',
    harmony: '#01d8af',
    arbitrum: '#2d374b',
    celo: '#FCFF52',
    moonriver: '#c3136f',
    cronos: '#121926',
    fuse: '#B4F9BA',
    metis: '#00dacc',
    aurora: '#70d44b',
    moonbeam: '#211438',
    emerald: '#0192f6',
    optimism: '#ff0420',
    kava: '#FF564F',
    ethereum: '#627ee9',
    canto: '#06fc99',
    zksync: '#fff',
    zkevm: '#8247e4',
    base: '#fff',
    gnosis: '#133629',
  };

  public spacing(times: number = 1) {
    return `${times * 8}px`;
  }
}

export const theme = new Theme();
