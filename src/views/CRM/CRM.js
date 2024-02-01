import { Box, useTheme } from '@mui/material';
import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import CTA from './components/CTA';
import CTA2 from './components/CTA2';
import Hero from './components/Hero';
import Info from './components/Info';
import LogoGrid from './components/LogoGrid';
import CollaborationCTA from './components/LogoGrid2';

const CRM = () => {
  const theme = useTheme();

  return (
    <Main>
      <Container maxWidth={1500}>
        <Hero />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
        data-aos={'flip-down'}
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
          <Info />
        </Container>
      </Box>
      <Container>
        <CTA />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <CollaborationCTA />
        </Container>
      </Box>
      <Container>
        <CTA2 />
      </Container>
      <Container>
        <LogoGrid />
      </Container>
    </Main>
  );
};
export default CRM;
