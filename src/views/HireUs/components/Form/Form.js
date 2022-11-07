/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material';
import Script from 'next/script';
import React from 'react';

const Form = () => {
  return (
    <Box alignContent={'center'}>
      <Typography
        color={'primary'}
        fontWeight={700}
        variant="h5"
        align="center"
        paddingBottom={5}
      >
        Leave Us A Message!
      </Typography>
      <Box>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/Nx9xe5xjVA4xeniZJApT"
          style={{ border: 'none', width: '100%' }}
          scrolling="no"
          id="Nx9xe5xjVA4xeniZJApT"
        ></iframe>
        <Script src="https://api.leadconnectorhq.com/js/form_embed.js"></Script>
      </Box>
    </Box>
  );
};

export default Form;
