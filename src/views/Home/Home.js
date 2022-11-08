import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Main } from 'layouts';
import Container from 'components/Container';
import { OnlineReviews, Messaging, Payment, Hero, Contact } from './components';

import Feature from '../AboutUs/components/Feature';

const Home = () => {
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
          <Feature />
        </Container>
      </Box>
      <Container>
        <a id="OnlineReviews" />
        <OnlineReviews />
      </Container>
      <Container paddingY={'0 !important'}>
        <Messaging />
      </Container>
      <Container>
        <Payment />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <a id="LearnMore" />
          <Contact />
        </Container>
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
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default Home;
