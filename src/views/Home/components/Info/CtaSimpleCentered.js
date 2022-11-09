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
          What We Specialize In
        </Typography>
        <Box marginY={2}>
          <Divider sx={{ marginLeft: '30%', marginRight: '30%' }} />
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
          Explore integrations you can leverage to help run your business more
          effectively
        </Typography>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
