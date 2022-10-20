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

import Message from '../../../../assets/unDraw/Messaging.svg';
import Image from 'next/image';

const Messaging = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.red[50] : colors.red[900]
      }
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                Every Conversation In One Place
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                Reach your customers wherever they are with text messaging.
                Request reviews, connect with website visitors, collect
                payments, respond to Facebook & Google Messages, and market to
                customers and leads all from one application.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              marginBottom={{ md: 9 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  Messaging
                </Typography>
                <Typography component={'p'}>
                  Manage your messages with a single inbox for text, Facebook
                  messages, Google messages, and more.
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
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
              <Image src={Message} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Email or Text Message
              </Typography>
              <Typography component={'p'}>
                Some customers don't use email and others may be reluctant to
                provide their personal cell phone number. No problem! View and
                send messsages back to your clients or customers with ease!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Messaging;
