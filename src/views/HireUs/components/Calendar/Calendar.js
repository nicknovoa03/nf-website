/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material';
import Script from 'next/script';
import React from 'react';

const Calendar = () => {
  return (
    <Box paddingY={3}>
      <Typography
        color={'primary'}
        fontWeight={700}
        variant="h5"
        align="center"
        paddingBottom={5}
      >
        Schedule A Meeting
      </Typography>
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
  );
};

export default Calendar;
