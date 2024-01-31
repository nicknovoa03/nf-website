import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import PhoneWithData from '../../../../assets/PhoneWithData.svg';
import Image from 'next/image';

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4} marginLeft={{ md: 4 }}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Serving Small Businesses
            </Typography>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Natural{' '}
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
                Frameworks
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Our software company helps businesses automate their operations
              and streamline their processes. We offer a range of tools and
              solutions that enable business owners to save time and reduce the
              amount of manual work required to run their businesses.
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
              href="#features"
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
        <Image alt="Natural Frameworks" src={PhoneWithData}></Image>
      </Grid>
    </Grid>
  );
};

export default Hero;
