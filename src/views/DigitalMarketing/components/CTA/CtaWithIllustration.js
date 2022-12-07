import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import illustration from '../../../../assets/template/digitalmarketing2.svg';
import Image from 'next/image';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid
        item
        xs={12}
        md={6}
        data-aos={isMd ? 'fade-down-right' : 'fade-up'}
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={600}
      >
        <Box marginTop={{ md: 20 }}>
          <Box marginBottom={2}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Start today
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Get Started For Free
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Let us sit down with you and look over your marketing plan. Do you
              have questions about your current plan? Do you have an upcoming
              project that needs a marketing push? With a consultation, we can
              get you on the right track!
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
      <Grid
        item
        xs={12}
        md={6}
        data-aos={isMd ? 'fade-down-left' : 'fade-up'}
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={600}
      >
        <Box height={1} width={1} align="center" minWidth={{ md: 800 }}>
          <Image
            alt="Natural Frameworks Digital Marketing"
            src={illustration}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CtaWithIllustration;
