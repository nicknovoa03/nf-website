import React from 'react';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from 'views/Home/components';
import Info from './components/Info';
import { Box } from '@mui/system';
import Feature from './components/Feature';

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
        <Feature />
      </Container>
    </Main>
  );
};

export default AboutUs;
