import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CreditCardsIllustration from 'svg/illustrations/CreditCards';

import Container from 'components/Container';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                Keep your leads engaged even when they leave your website{' '}
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Webchat allows you to text your leads even when they leave your
                website. Using business texting we route messages to their
                mobile phone so you don&apos;t lose them.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display={'flex'} justifyContent={'center'}>
            <Box height={1} width={1} maxWidth={450}>
              <CreditCardsIllustration width={'100%'} height={'100%'} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaWithIllustration;
