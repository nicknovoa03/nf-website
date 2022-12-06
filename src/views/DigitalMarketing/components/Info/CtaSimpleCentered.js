import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { Divider, useMediaQuery, useTheme } from '@mui/material';

const CtaSimpleCentered = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box align="center">
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          We&apos;ll Show You How It&apos;s Done
        </Typography>
        <Box marginY={2}>
          <Divider sx={{ marginLeft: '20%', marginRight: '20%' }} />
        </Box>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
          data-aos={'fade-right'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
          maxWidth={1150}
        >
          Every business needs a sound marketing plan in order to survive.
          Starting from an understanding of your target market, we will develop
          a plan with easy to follow steps.
        </Typography>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
