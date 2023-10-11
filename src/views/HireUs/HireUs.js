import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Headline, Form } from './components';
import { Grid, useMediaQuery } from '@mui/material';
import Calendar from './components/Calendar';

const HireUs = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>

        <Container
          maxWidth={{ md: 1500 }}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
            }}
          >
            <Grid item xs={12} md={6}>
              <Container maxWidth={{ sm: 720, md: 775 }}>
                <Calendar />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default HireUs;
