/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material';
import Script from 'next/script';
import React from 'react';

const Calendar = () => {
  return (
    <Box paddingTop={{ xs: 3, md: 5 }}>
      <Typography
        color={'primary'}
        fontWeight={700}
        variant="h3"
        align="center"
        marginBottom={{ xs: 3, md: 0 }}
      >
        Schedule A Meeting
      </Typography>
      <Box alignContent={'center'} marginBottom={{ xs: 2 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/Q3NcvtVUfeegM4VzJ6lT"
          style={{ border: 'none', width: '100%', overflow: 'hidden' }}
          scrolling="yes"
          id="4nSwRefaLQaa2TfGmUrU_1697139653994"
        ></iframe>
        <Script
          src="https://api.leadconnectorhq.com/js/form_embed.js"
          type="text/javascript"
        ></Script>
      </Box>
    </Box>
  );
};

export default Calendar;
