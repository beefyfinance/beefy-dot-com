const networkIconRequire = require.context('../images/networks', false, /\.svg$/);
const networkToFile = Object.fromEntries(
  networkIconRequire.keys().map(path => [path.substring(2, path.lastIndexOf('.')), path])
);

export function getNetworkIconSrc(chainId: string) {
  if (chainId in networkToFile) {
    return networkIconRequire(networkToFile[chainId]).default;
  }

  throw new Error(`No network icon found for ${chainId}`);
}
