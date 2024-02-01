import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

import illustration from '../../../../assets/template/illustration.png';
import Image from 'next/image';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container maxWidth={{ md: 1300 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            marginTop={{ md: 30 }}
            data-aos={isMd ? 'fade-up-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box marginBottom={2}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
              >
                Stay in the loop
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                Interact With Your Leads On The Go
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                With mobile and desktop apps, you can communicate with your
                leads, customers, and teams from anywhere.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Box
                component={Button}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={!isMd}
                href="pricing"
              >
                Get Started
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            height={1}
            width={1}
            maxWidth={550}
            align="center"
            data-aos={isMd ? 'fade-up-left' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Image
              alt="Natural Frameworks All In One Inbox"
              src={illustration}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaWithIllustration;
