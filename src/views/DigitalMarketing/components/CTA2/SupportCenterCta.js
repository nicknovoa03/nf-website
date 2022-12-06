import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import illustration from '../../../../assets/template/webchatIllustration2.png';

const SupportCenterCta = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Box
          height={1}
          width={1}
          data-aos={isMd ? 'fade-up-right' : 'fade-up'}
          data-aos-delay={100}
          data-aos-offset={400}
          data-aos-duration={600}
        >
          <Image alt="Natural Frameworks Messaging" src={illustration} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        data-aos={isMd ? 'fade-up-left' : 'fade-up'}
        data-aos-delay={100}
        data-aos-offset={700}
        data-aos-duration={600}
      >
        <Box marginTop={{ md: 40 }} marginBottom={3}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            We make it easy
          </Typography>
          <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
            Connect with users on every platform
          </Typography>
          <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
            There will come a time in your business or personal promotion when
            you need some additional help with marketing. In addition to
            long-term marketing support, we can be available for extra hours
            during new releases and other important events.
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        >
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={!isMd}
            href="pricing"
          >
            Get Started
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SupportCenterCta;
