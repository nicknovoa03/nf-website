import { Box, useMediaQuery, useTheme } from '@mui/material';
import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import CTA from './components/CTA';
import CTA2 from './components/CTA2';
import Features from './components/Features';
import Hero from './components/Hero';
import LogoGrid from './components/LogoGrid';
import Info2 from './components/Info2';
import CTA3 from './components/CTA3';
import Stats from './components/Stats';

const Messaging = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
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
        data-aos={isMd ? 'flip-down' : 'fade-up'}
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={1000}
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
      <CTA />
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <CTA2 />
          <CTA3 />
        </Container>
      </Box>
      <Container>
        <Info2 />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Stats />
        </Container>
      </Box>
      <Container>
        <LogoGrid />
      </Container>
    </Main>
  );
};
export default Messaging;
