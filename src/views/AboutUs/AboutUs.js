import React from 'react';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from 'views/Home/components';
import Info from './components/Info';
import { Box } from '@mui/system';
import Features from './components/Features';

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Info />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
    </Main>
  );
};

export default AboutUs;
