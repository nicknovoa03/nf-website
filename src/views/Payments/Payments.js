import { Box, useTheme } from '@mui/material';
import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import CTA from './components/CTA';
import CTA2 from './components/CTA2';
import CTA3 from './components/CTA3';
import Features from './components/Features';
import Features2 from './components/Features2';
import Hero from './components/Hero';

const Payments = () => {
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
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0z"
          ></path>
        </Box>
        <Container>
          <Features />
        </Container>
      </Box>
      <Container>
        <CTA />
        <Features2 />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <CTA2 />
        </Container>
      </Box>
      <Container>
        <CTA3 />
      </Container>
    </Main>
  );
};
export default Payments;
