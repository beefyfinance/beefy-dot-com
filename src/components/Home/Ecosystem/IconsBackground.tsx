import React, { memo, useMemo, useState } from 'react';
import { useStaticEcosystemIcons } from '../../../data/queries/ecosystem-icons';
import styled from '@emotion/styled';
import { shuffle } from 'lodash';
import { arrayRepeat } from '../../../utils/array-utils';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';

const size = 80;
const gap = 16;
const rotatedSize = Math.sqrt(size * size * 2);
const rotatedGap = Math.sqrt(gap * gap * 2);
const iconHolderSize = rotatedSize + rotatedGap / 2;
const largeColumnRows = 3;
const shortColumnRows = largeColumnRows - 1;
const iconsPerColumnSet = largeColumnRows + shortColumnRows;
const gridHeight = iconHolderSize * largeColumnRows;
const visualHeight = Math.ceil(gridHeight) - Math.floor(rotatedGap);

const IconCell = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${iconHolderSize}px;
  height: ${iconHolderSize}px;
  pointer-events: none;
`;

const IconImg = styled.img`
  width: ${size}px;
  height: ${size}px;
  display: block;
  transform: translate(${rotatedGap}px, ${rotatedGap}px) rotate(-45deg);
`;

const Grid = styled.div`
  position: relative;
  top: ${-rotatedGap / 2}px;
  left: 0;
  height: ${gridHeight}px;
`;

const Sizer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${visualHeight}px;
`;

type IconProps = {
  index: number;
  url: string;
  offsetsX: number[];
  offsetsY: number[];
};
const Icon = memo<IconProps>(function Icon({ index, url, offsetsX, offsetsY }) {
  const mod = index % iconsPerColumnSet;
  const div = Math.trunc(index / iconsPerColumnSet);
  const x = div * iconHolderSize + offsetsX[mod];
  const y = offsetsY[mod];

  return (
    <IconCell
      key={index}
      style={{
        top: y,
        left: x,
      }}
    >
      <IconImg src={url} width={size} height={size} alt="" role="presentation" />
    </IconCell>
  );
});

type IconsSetProps = {
  icons: string[];
};
const IconsSet = memo<IconsSetProps>(function IconsSet({ icons }) {
  const offsetsX = [0, 0, 0, iconHolderSize * 0.5, iconHolderSize * 0.5];
  const offsetsY = [
    0,
    iconHolderSize,
    iconHolderSize * 2,
    iconHolderSize * 0.5,
    iconHolderSize * 1.5,
  ];

  return (
    <Grid
      style={{
        width: `${(icons.length / 5) * iconHolderSize}px`,
      }}
    >
      {icons.map((url, index) => (
        <Icon
          key={`${url}-${index}`}
          index={index}
          url={url}
          offsetsX={offsetsX}
          offsetsY={offsetsY}
        />
      ))}
    </Grid>
  );
});

export const IconsBackground = memo(function IconsBackground() {
  const allPartnerIcons = useStaticEcosystemIcons();
  const iconsToUse = useMemo(() => {
    const end = allPartnerIcons.length - (allPartnerIcons.length % 5);
    return arrayRepeat(shuffle(allPartnerIcons.slice(0, end)), 2);
  }, [allPartnerIcons]);
  const [pageIsVisible, setPageIsVisible] = useState(true);

  return (
    <Sizer>
      <PageVisibility onChange={setPageIsVisible}>
        <Ticker height={visualHeight} move={pageIsVisible} mode="smooth" speed={5}>
          {({ index }) => <IconsSet icons={iconsToUse} />}
        </Ticker>
      </PageVisibility>
    </Sizer>
  );
});
