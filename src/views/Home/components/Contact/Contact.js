import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map } from './components';
import Script from 'next/script';
import { Divider, Typography } from '@mui/material';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
            }}
            paddingY={3}
          >
            <Box marginBottom={2} alignItems={'center'}>
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
                variant={'inset'}
                sx={{ color: 'white' }}
              />
            </Box>
            <Box alignContent={'center'}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/2oKTgJquhvSYH3eQR0Ea"
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
    </Box>
  );
};

export default Contact;
