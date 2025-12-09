class Theme {
  public readonly primary = '#4DB258';
  public readonly footer = '#020203';
  public readonly cardBg = '#242842';
  public readonly cardLight = '#2D3153';
  public readonly cardHeader = '#1C1E32';
  public readonly cardBorder = '#363B63';
  public readonly button = '#363B63';
  public readonly buttonHover = '#495086';
  public readonly pageBg = '#121421';

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
    arbitrum: '#2d374b',
    aurora: '#70d44b',
    avax: '#e74142',
    base: '#ffffff',
    bsc: '#F0B90B',
    canto: '#06fc99',
    celo: '#35cf7f',
    cronos: '#121926',
    emerald: '#0192f6',
    ethereum: '#627ee9',
    fantom: '#1969FF',
    fuse: '#c0db64',
    gnosis: '#133629',
    harmony: '#01d8af',
    heco: '#02943f',
    kava: '#FF564F',
    linea: '#000000',
    mantle: '#000000',
    metis: '#00dacc',
    moonbeam: '#211438',
    moonriver: '#c3136f',
    optimism: '#ff0420',
    polygon: '#f5f0fd',
    zkevm: '#8247e4',
    zksync: '#fff',
  };

  public spacing(times: number = 1) {
    return `${times * 8}px`;
  }
}

export const theme = new Theme();
