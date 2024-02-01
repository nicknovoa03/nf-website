import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import ReviewHero from '../../../../assets/template/OnlineReviews.png';

const SimpleHeroWithImageAndCtaButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems={'center'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        <Box>
          <Box marginBottom={2}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Organize Your Clients{' '}
            </Typography>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Discover Powerful CRM
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                Solutions
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Elevate Your Business Success to New Heights with Intuitive CRM
              Innovations: Unleashing Comprehensive
              Solutions Tailored for Seamless Customer Relationships, Enhanced
              Team Collaboration, and Accelerated Sales Growth.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="pricing"
              fullWidth={isMd ? false : true}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
      >
        <Box
          height={1}
          width={1}
          boxShadow={2}
          marginLeft={{ md: 10 }}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Image alt="Natural Frameworks" src={ReviewHero} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
