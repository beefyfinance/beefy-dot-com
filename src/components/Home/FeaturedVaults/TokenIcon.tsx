import React, { memo, useMemo } from 'react';
import { getSingleAssetSrc } from '../../../utils/asset-utils';
import styled from '@emotion/styled';

const maxSupportedAssets = 8;
const defaultSize = 48;

function useAssetsImageUris(chainId: string, assetIds: string[]) {
  return useMemo(() => {
    return assetIds
      .slice(0, maxSupportedAssets)
      .map(assetId => getSingleAssetSrc(assetId, chainId));
  }, [assetIds, chainId]);
}

const Asset = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Image = styled(Asset)`
  object-fit: contain;
`.withComponent('img');

const Placeholder = styled(Asset)`
  background-color: magenta;
  border: solid 2px black;
  border-radius: 100%;
`;

const Icon = styled.div`
  position: relative;
  width: ${defaultSize}px;
  height: ${defaultSize}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;

  &[data-count='2'] {
    .asset {
      position: absolute;
      width: ${((32 / 48) * 100).toFixed(4)}%;
      height: ${((32 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        left: 0;
        z-index: 2;
      }

      &.asset-1 {
        right: 0;
        z-index: 1;
      }
    }
  }

  &[data-count='3'] {
    .asset {
      position: absolute;
      width: ${((28 / 48) * 100).toFixed(4)}%;
      height: ${((28 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        top: ${((2 / 48) * 100).toFixed(4)}%;
        left: 0;
        z-index: 3;
      }

      &.asset-1 {
        top: ${((2 / 48) * 100).toFixed(4)}%;
        right: 0;
        z-index: 1;
      }

      &.asset-2 {
        bottom: ${((2 / 48) * 100).toFixed(4)}%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 2;
      }
    }
  }

  &[data-count='4'] {
    .asset {
      position: absolute;
      width: ${((26 / 48) * 100).toFixed(4)}%;
      height: ${((26 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        top: 0;
        left: 0;
        z-index: 4;
      }

      &.asset-1 {
        top: 0;
        right: 0;
        z-index: 3;
      }

      &.asset-2 {
        bottom: 0;
        left: 0;
        z-index: 2;
      }

      &.asset-3 {
        bottom: 0;
        right: 0;
        z-index: 1;
      }
    }
  }

  &[data-count='5'] {
    .asset {
      position: absolute;
      width: ${((24 / 48) * 100).toFixed(4)}%;
      height: ${((24 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        top: 0;
        left: 0;
        z-index: 1;
      }

      &.asset-1 {
        top: 0;
        right: 0;
        z-index: 2;
      }

      &.asset-2 {
        bottom: 0;
        left: 0;
        z-index: 3;
      }

      &.asset-3 {
        bottom: 0;
        right: 0;
        z-index: 4;
      }

      &.asset-4 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
      }
    }
  }

  &[data-count='6'] {
    .asset {
      position: absolute;
      width: ${((24 / 48) * 100).toFixed(4)}%;
      height: ${((24 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        top: 0;
        left: 0;
        z-index: 6;
      }

      &.asset-1 {
        top: 0;
        left: ${((12 / 48) * 100).toFixed(4)}%;
        z-index: 5;
      }

      &.asset-2 {
        top: 0;
        left: ${((24 / 48) * 100).toFixed(4)}%;
        z-index: 4;
      }

      &.asset-3 {
        bottom: 0;
        left: 0;
        z-index: 3;
      }

      &.asset-4 {
        bottom: 0;
        left: ${((12 / 48) * 100).toFixed(4)}%;
        z-index: 2;
      }

      &.asset-5 {
        bottom: 0;
        left: ${((24 / 48) * 100).toFixed(4)}%;
        z-index: 1;
      }
    }
  }

  &[data-count='7'] {
    .asset {
      position: absolute;
      width: ${((24 / 48) * 100).toFixed(4)}%;
      height: ${((24 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        top: ${((4 / 48) * 100).toFixed(4)}%;
        left: 0;
        z-index: 6;
      }

      &.asset-1 {
        top: 0;
        left: ${((12 / 48) * 100).toFixed(4)}%;
        z-index: 5;
      }

      &.asset-2 {
        top: ${((4 / 48) * 100).toFixed(4)}%;
        right: 0;
        z-index: 4;
      }

      &.asset-3 {
        bottom: ${((4 / 48) * 100).toFixed(4)}%;
        right: 0;
        z-index: 3;
      }

      &.asset-4 {
        bottom: 0;
        left: ${((12 / 48) * 100).toFixed(4)}%;
        z-index: 1;
      }

      &.asset-5 {
        bottom: ${((4 / 48) * 100).toFixed(4)}%;
        left: 0;
        z-index: 2;
      }

      &.asset-6 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 7;
      }
    }
  }

  &[data-count='8'] {
    .asset {
      position: absolute;
      width: ${((19 / 48) * 100).toFixed(4)}%;
      height: ${((19 / 48) * 100).toFixed(4)}%;

      &.asset-0 {
        top: ${((8 / 48) * 100).toFixed(4)}%;
        left: 0;
        z-index: 8;
      }

      &.asset-1 {
        top: ${((8 / 48) * 100).toFixed(4)}%;
        left: ${((10 / 48) * 100).toFixed(4)}%;
        z-index: 7;
      }

      &.asset-2 {
        top: ${((8 / 48) * 100).toFixed(4)}%;
        left: ${((19 / 48) * 100).toFixed(4)}%;
        z-index: 6;
      }

      &.asset-3 {
        top: ${((8 / 48) * 100).toFixed(4)}%;
        left: ${((29 / 48) * 100).toFixed(4)}%;
        z-index: 5;
      }

      &.asset-4 {
        bottom: ${((9 / 48) * 100).toFixed(4)}%;
        left: 0;
        z-index: 4;
      }

      &.asset-5 {
        bottom: ${((9 / 48) * 100).toFixed(4)}%;
        left: ${((10 / 48) * 100).toFixed(4)}%;
        z-index: 3;
      }

      &.asset-6 {
        bottom: ${((9 / 48) * 100).toFixed(4)}%;
        left: ${((19 / 48) * 100).toFixed(4)}%;
        z-index: 2;
      }

      &.asset-7 {
        bottom: ${((9 / 48) * 100).toFixed(4)}%;
        left: ${((29 / 48) * 100).toFixed(4)}%;
        z-index: 1;
      }
    }
  }
`;

export type TokenIconProps = { assetIds: string[]; chainId: string; size?: number };
export const TokenIcon = memo<TokenIconProps>(function ({ assetIds, chainId, size }) {
  const uris = useAssetsImageUris(chainId, assetIds);

  return (
    <Icon
      data-count={uris.length}
      style={size !== defaultSize ? { width: size, height: size } : undefined}
    >
      {uris.map((uri, i) =>
        uri ? (
          <Image
            src={uri}
            key={`${uri}-${i}`}
            alt=""
            role="presentation"
            width={size}
            height={size}
            className={`asset asset-${i}`}
          />
        ) : (
          <Placeholder key={i} className={`asset asset-${i}`} />
        )
      )}
    </Icon>
  );
});
