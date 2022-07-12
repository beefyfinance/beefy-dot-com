import React, { memo, useMemo } from 'react';
import { useStaticEcosystemIcons } from '../../../data/queries/ecosystem-icons';
import styled from '@emotion/styled';
import { circularFill } from '../../../utils/array-utils';
import { useWindowSize } from '../../../utils/react-utils';
import { shuffle } from 'lodash';

const size = 80;
const gap = 16;
const rotatedSize = Math.sqrt(size * size * 2);
const rotatedGap = Math.sqrt(gap * gap * 2);
const iconHolderSize = rotatedSize + rotatedGap / 2;
const largeColumnRows = 3;
const shortColumnRows = largeColumnRows - 1;
const iconsPerColumnSet = largeColumnRows + shortColumnRows;
const gridHeight = largeColumnRows * iconHolderSize;
const holderHeight = Math.ceil(gridHeight) - Math.floor(rotatedGap);

const IconCell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${iconHolderSize}px;
  height: ${iconHolderSize}px;
  pointer-events: none;
`;

const Icon = styled.img`
  width: ${size}px;
  height: ${size}px;
  display: block;
  transform: translate(${rotatedGap}px, ${rotatedGap}px) rotate(-45deg);
`;

const Grid = styled.div`
  position: relative;
  left: 50%;
  top: ${-rotatedGap / 2}px;
  transform: translate(-50%, 0);
  height: ${gridHeight}px;
`;

const Sizer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${holderHeight}px;
`;

function useSizing() {
  const windowSize = useWindowSize();
  const gridColumns = useMemo(() => {
    const minGridColumns = Math.ceil(windowSize.width / (iconHolderSize / 2));
    return minGridColumns + (minGridColumns % 2 === 0 ? 1 : 0); // ensure odd
  }, [windowSize.width]);

  return useMemo(() => {
    const outsideLarge = (gridColumns + 1) % 4 === 0; // true: large = small + 1; false: large = small - 1
    const smallColumns = (gridColumns + (outsideLarge ? -1 : 1)) / 2;
    const largeColumns = gridColumns - smallColumns;
    const totalIcons = smallColumns * shortColumnRows + largeColumns * largeColumnRows;
    const totalWidth = iconHolderSize * Math.ceil(gridColumns / 2);
    const offsetsY = outsideLarge
      ? [0, iconHolderSize, iconHolderSize * 2, iconHolderSize * 0.5, iconHolderSize * 1.5]
      : [iconHolderSize * 0.5, iconHolderSize * 1.5, 0, iconHolderSize, iconHolderSize * 2];
    const offsetsX = outsideLarge
      ? [0, 0, 0, iconHolderSize * 0.5, iconHolderSize * 0.5]
      : [0, 0, iconHolderSize * 0.5, iconHolderSize * 0.5, iconHolderSize * 0.5];

    return {
      totalIcons,
      gridWidth: totalWidth,
      offsetsX,
      offsetsY,
    };
  }, [gridColumns]);
}

export const IconsBackground = memo(function IconsBackground() {
  const allPartnerIcons = useStaticEcosystemIcons();
  const { totalIcons, gridWidth, offsetsX, offsetsY } = useSizing();
  const filledIcons = useMemo(
    () => circularFill(shuffle(allPartnerIcons), totalIcons),
    [allPartnerIcons, totalIcons]
  );

  return (
    <Sizer>
      <Grid style={{ width: `${gridWidth}px` }}>
        {filledIcons.map((url, i) => {
          const mod = i % iconsPerColumnSet;
          const div = Math.trunc(i / iconsPerColumnSet);
          const x = div * iconHolderSize + offsetsX[mod];
          const y = offsetsY[mod];

          return (
            <IconCell
              key={i}
              style={{
                top: y,
                left: x,
              }}
            >
              <Icon src={url} width={size} height={size} alt="" role="presentation" />
            </IconCell>
          );
        })}
      </Grid>
    </Sizer>
  );
});
