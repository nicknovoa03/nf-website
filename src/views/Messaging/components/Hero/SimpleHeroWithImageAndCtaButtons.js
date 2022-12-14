import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import illustration from '../../../../assets/template/messagingHero.png';
import Image from 'next/image';

const SimpleHeroWithImageAndCtaButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
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
          marginLeft={{ md: 10 }}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Image alt="Natural Frameworks" src={illustration} />
        </Box>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems={'center'}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={600}
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
              Win More Business{' '}
            </Typography>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              One Place For
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
                Every Message
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Connect with leads and customers through texting, live chat, bulk
              messaging, Google My Business and Facebook messages.
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
    </Grid>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
