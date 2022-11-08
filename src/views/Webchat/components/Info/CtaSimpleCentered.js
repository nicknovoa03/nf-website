import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import { Divider } from '@mui/material';

const CtaSimpleCentered = () => {
  return (
    <Container>
      <Box
        data-aos={'flip-down'}
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={600}
      >
        <Typography
          variant="h4"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
          data-aos={'fade-left'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          Convert website visitors into leads with Webchat
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
