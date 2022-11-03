import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/Container';
import { Divider, useTheme } from '@mui/material';

const CtaSimpleCentered = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box data-aos={isMd ? 'fade-up' : 'fade-up'}>
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Convert website visitors into leads with Webchat
        </Typography>
        <Box marginY={2}>
          <Divider />
        </Box>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
        >
          Every conversation starts with a name and a real phone number, so you
          can immediately focus on closing the deal instead of fishing for
          contact details.
        </Typography>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
