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

const CRMCard = () => {
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
                Secret weapon for boosting sales
              </Typography>
              <Typography component={'p'}>
                It helps your business understand what your customers want
                before they even ask.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Streamlining tasks and providing insights
              </Typography>
              <Typography component={'p'}>
                a CRM supercharges your sales efforts, leading to more satisfied
                customers and a thriving business.
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
                Customer Relationship Management (CRM)
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                A CRM system is like having a personal assistant for your
                business. It helps keep track of all your customer interactions,
                making sure nothing falls through the cracks. With a CRM, you
                get a complete picture of your customers' preferences, allowing
                you to offer them personalized experiences and products they'll
                love.
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
                  Bring your team together
                </Typography>
                <Typography component={'p'}>
                  It's like having a shared calendar, ensuring everyone is on
                  the same page. This collaboration means smoother processes and
                  quicker responses to your needs. No more repeating information
                  or delays – your team can focus on providing you with the best
                  service possible.
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CRMCard;
