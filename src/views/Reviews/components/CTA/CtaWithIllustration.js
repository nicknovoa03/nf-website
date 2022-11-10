import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

import GoogleReviews from '../../../../assets/logos/GoogleReviews.png';
import Image from 'next/image';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            data-aos={isMd ? 'fade-up-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
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
                Google Direct Review
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                The power of Google behind every review
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Get more customer reviews on Google by leveraging Renown&apos;s
                direct integration with Google&apos;s private API.
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
            display={'flex'}
            justifyContent={'center'}
            data-aos={isMd ? 'fade-down-left' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
          >
            <Box
              height={1}
              width={1}
              maxWidth={450}
              data-aos={isMd ? 'flip-up' : 'fade-up'}
              data-aos-delay={100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Image alt="Natural Frameworks" src={GoogleReviews} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaWithIllustration;
