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
          data-aos={'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          Turn customer reviews into your competitive edge
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
          data-aos={'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          Get new reviews, manage them and promote them across the web. All from
          one dashboard.
        </Typography>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
