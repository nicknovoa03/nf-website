import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map } from './components';
import Script from 'next/script';
import { Divider, Typography } from '@mui/material';
import Container from 'components/Container';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid
          item
          xs={12}
          md={6}
          data-aos={isMd ? 'zoom-out-right' : 'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={1000}
        >
          <Map />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
            }}
            paddingY={3}
            data-aos={isMd ? 'zoom-out-left' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
          >
            <Box marginBottom={2} align="center">
              <Typography
                marginBottom={1}
                align="center"
                variant="h4"
                color={theme.palette.primary.main}
                sx={{ fontWeight: 700 }}
              >
                Book A Demo
              </Typography>
              <Divider
                color={'black'}
                sx={{ marginLeft: '20%', marginRight: '20%' }}
              />
            </Box>
            <Box align="center" paddingX={{ xs: 2 }} marginBottom={{xs:-9}}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/Q3NcvtVUfeegM4VzJ6lT"
                style={{ border: 'none', width: '100%', overflow: 'hidden' }}
                scrolling="no"
                id="msgsndr-calendar"
              ></iframe>
              <Script
                src="https://api.leadconnectorhq.com/js/embed.js"
                type="text/javascript"
              ></Script>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
