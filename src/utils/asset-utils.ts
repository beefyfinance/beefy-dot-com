const singleAssetRequire = require.context('../images/assets', true, /\.(svg|webp|png)$/);
const singleAssets = Object.fromEntries(
  singleAssetRequire.keys().map(path => [path.substring(2, path.lastIndexOf('.')), path])
);

export function getSingleAssetSrc(assetId: string, chainId?: string) {
  const ids = chainId ? [`${chainId}/${assetId}`, assetId] : [assetId];

  for (const id of ids) {
    if (id in singleAssets) {
      return singleAssetRequire(singleAssets[id]).default;
    }
  }
}
