import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Inner } from '../components/Common/Inner';
import notFound404 from '../images/404image.svg';
import { PrimaryLink } from '../components/Common/Buttons';
import { theme } from '../theme';
import { Meta } from '../components/Common/Meta';

const ErrorImage = styled.img`
  margin-bottom: ${theme.spacing(4)};
`;

const Container = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 120px 16px;
`;

const Text = styled.div`
  ${theme.bodyLgMed};
  margin-bottom: ${theme.spacing(3)};
`;

const NotFoundPage = memo(() => {
  return (
    <Container>
      <ErrorImage src={notFound404} alt="error" />
      <Text>We can’t find the page that you’re looking for</Text>
      <PrimaryLink to="/">Back Home</PrimaryLink>
    </Container>
  );
});

export const Head = () => (
  <Meta title={'Not Found'} description={"The page you're looking for doesn't exist."} />
);

export default NotFoundPage;
