class Theme {
  public readonly primary = '#59A662';
  public readonly footer = '#121212';
  public readonly cardBg = '#2D3153';
  public readonly cardBorder = '#363B63';

  public readonly text = {
    primary: '#F5F5FF',
    secondary: '#D0D0DA',
    label: '#999CB3',
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
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  public readonly sublineSm = {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  public readonly breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1296,
    xl: 1920,
  };

  public spacing(times: number = 1) {
    return `${times * 8}px`;
  }
}

export const theme = new Theme();
