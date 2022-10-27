/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import Payments from '../../../../assets/unDraw/Payment.svg';
import Image from 'next/image';

const Payment = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={theme.palette.mode === 'light' ? colors.amber[50] : '#DEB22F'}
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              xs={12}
              sx={{
                '& .lazy-load-image-background.lazy-load-image-loaded': {
                  width: '100%',
                  height: '100%',
                },
              }}
            >
              <Image alt="Natural Frameworks" src={Payments} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Stripe
              </Typography>
              <Typography component={'p'}>
                You can easily accept payments online. Stripe provides a simple
                and powerful way to accept payments over the internet.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                PayPal
              </Typography>
              <Typography component={'p'}>
                Online payment service that lets you send payments quickly and
                securely online using a credit card or bank account.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                Get Paid Faster Than Ever
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                Collecting payments isn’t anyone’s favorite job. Make paying as
                quick and convenient as possible for your customers with a
                secure payment link delivered right to their phone.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              marginBottom={{ md: 8 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  Text-To-Pay Links
                </Typography>
                <Typography component={'p'}>
                  With just a few simple steps, you're able to deliver an
                  invoice within a conversation
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payment;
