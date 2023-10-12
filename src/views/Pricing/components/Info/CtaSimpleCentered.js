import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';

const CtaSimpleCentered = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
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
          Pricing
        </Typography>
        <Box marginY={2}></Box>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
          data-aos={'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          We&apos;re sorry to do this but two projects are never the same so we
          can&apos;t have standardized pricing.
        </Typography>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
