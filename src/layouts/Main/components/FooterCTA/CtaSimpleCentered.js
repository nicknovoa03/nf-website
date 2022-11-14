import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const CtaSimpleCentered = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Let us{' '}
          <Typography color={'primary'} component={'span'} variant={'inherit'}>
            grow{' '}
          </Typography>
          your business.
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
        >
          Capture and convert more leads with Natural Frameworks.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={4}
        >
          <Button
            component={'a'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={'/pricing'}
          >
            View Pricing
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Button
              component={'a'}
              href={'/contact'}
              variant="outlined"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Schedule Call
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaSimpleCentered;
