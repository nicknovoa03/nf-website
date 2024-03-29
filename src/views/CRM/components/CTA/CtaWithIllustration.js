import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

import GoogleReviews from '../../../../assets/OnlineReviews.svg';
import Image from 'next/image';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container marginY={{ md: -10 }} marginBottom={{ sm: -10 }}>
      <Grid container spacing={1} paddingLeft={{ md: 15 }}>
        <Grid item xs={12} md={6}>
          <Box
            data-aos={isMd ? 'fade-up-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
          >
            <Box marginBottom={2} marginTop={{ md: 20 }}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
              >
                Comprehensive CRM Platform
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                Revolutionize Customer Relationships
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Explore innovative CRM solutions centralizing customer data for
                tailored products/services and improved satisfaction.
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
            display={'flex'}
            justifyContent={'center'}
            data-aos={isMd ? 'fade-down-left' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
          >
            <Box
              maxWidth={750}
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
