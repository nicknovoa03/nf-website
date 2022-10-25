import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import google from '../../../../assets/partners/google-my-business-logo.svg';
import facebook from '../../../../assets/partners/facebook.svg';
import meta from '../../../../assets/partners/meta.svg';
import stripe from '../../../../assets/partners/stripe.svg';
import Image from 'next/image';

const Partners = () => {
  const theme = useTheme();
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {[
        google,
        facebook,
        meta,
        stripe,
        'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
        'https://assets.maccarianagency.com/svg/logos/google-original.svg',
        'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
      ].map((item, i) => (
        <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
          <Box
            height={1}
            width={1}
            alt="..."
            sx={{
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(0.7)'
                  : 'brightness(0)',
            }}
          >
            <Image src={item} layout="fill"></Image>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Partners;
