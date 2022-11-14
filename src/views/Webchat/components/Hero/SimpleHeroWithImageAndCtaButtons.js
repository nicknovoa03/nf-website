import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import illustration from '../../../../assets/template/Messaging.png';

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
              Get More Website Leads
            </Typography>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Grow Your Sales With
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
                Webchat
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Put webchat on your website and get fresh leads with your morning
              coffee.
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
              fullWidth={isMd ? false : true}
              href="pricing"
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
        sx={{
          '& .lazy-load-image-background.lazy-load-image-loaded': {
            width: '150%',
            height: '150%',
          },
        }}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
      >
        <Image alt="Natural Frameworks" src={illustration}></Image>
      </Grid>
    </Grid>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
