import React from 'react';
import styled from "@emotion/styled";
import {theme} from "../../../theme";

const Container = styled.div`
  // height: 250px;
  // border: 2px solid ${theme.cardBorder};
  // background-color: ${theme.cardBg};
  // border-radius: 12px;
  // padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(4)};
`

const Heading = styled.h1``;

const Description = styled.p`
  ${theme.h3};
  color: ${theme.text.middle};
  max-width: 800px;
`;

export const HeaderBox = () => {
    return (
        <Container>
            <Heading>Beefy Partners</Heading>
            <Description>Below are Beefy's valued partners, the cornerstone of our collaborative ecosystem that fuels the functionality of our platform. All hand-picked and thoroughly vetted, our partners and projects work together to provide you with an unparalleled experience.</Description>
        </Container>
    );
}