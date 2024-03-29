/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import OnlineReview from '../../../../assets/template/OnlineReviews.png';

import Image from 'next/image';

const OnlineReviews = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.blue[50] : colors.blue[900]
      }
      data-aos={isMd ? 'fade-left' : 'fade-up'}
      data-aos-delay={100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column', md: 'row' }}
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
              align="center"
            >
              <Image alt="Natural Frameworks" src={OnlineReview} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Single Inbox
              </Typography>
              <Typography component={'p'}>
                Automate your online reviews with a few simple clicks & respond
                to reviews in 1 place
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Connect Many Platforms
              </Typography>
              <Typography component={'p'}>
                We integrate with the popular review services such as Facebook &
                Google
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
            marginTop={isMd ? 2 : 0}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                Automate Your Online Reviews
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                Improve your ratings, build your reputation, and get found
                online by sending review requests via text to recent customers,
                responding to and interacting with reviewers, and managing it
                all from a single inbox.
              </Typography>
            </Box>
            <Box marginY={{ xs: 4 }}>
              <Button
                variant="contained"
                size="large"
                fullWidth={true}
                href="/reviews"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                }}
              >
                Learn More
              </Button>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 2 }}
              boxShadow={0}
              borderRadius={2}
              marginBottom={{ md: 5 }}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  Automatically share your reviews.
                </Typography>
                <Typography component={'p'}>
                  Our review management system makes it easy to set custom rules
                  and logic to share your reviews from 150+ sites to Facebook,
                  Twitter and LinkedIn. Gather and share reviews without lifting
                  a finger.
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OnlineReviews;
