import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Headline } from './components';
import { useMediaQuery } from '@mui/material';
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
          paddingX={2}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
            }}
          >
            <Box minWidth={{ xs: 390, sm: 500, md: 775, lg: 1000 }}>
              <Calendar />
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default HireUs;
