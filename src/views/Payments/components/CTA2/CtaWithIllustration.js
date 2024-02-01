import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import illustration from '../../../../assets/template/webchatIllustration2.png';
import Image from 'next/image';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box maxWidth={{ md: 1450 }} marginY={{ md: -10 }} marginLeft={{ md: 15 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            height={1}
            width={1}
            data-aos={isMd ? 'fade-up-right' : 'fade-up'}
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
        <Grid item xs={12} md={6}>
          <Box marginTop={{ md: 40 }}>
            <Box marginBottom={2}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                Customizable Invoices.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Brand your invoices with your company name and logo. Specify
                payment methods for certain types of customers or purchases
                (only allow e-check, disallow credit card, etc.).
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
      </Grid>
    </Box>
  );
};

export default CtaWithIllustration;
