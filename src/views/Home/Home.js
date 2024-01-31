import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Main } from 'layouts';
import Container from 'components/Container';
import { OnlineReviews, Messaging, Payment, Hero } from './components';

import Feature from '../AboutUs/components/Features';
import Info from './components/Info';
import { useMediaQuery } from '@mui/material';

const Home = () => {
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
          <Feature />
        </Container>
      </Box>
      <a id="features" />
      <Container>
        <Info />
        <Messaging />
      </Container>
      <Container paddingY={'0 !important'}>
        <Payment />
      </Container>
      <Container>
        <OnlineReviews />
      </Container>
    </Main>
  );
};

export default Home;
