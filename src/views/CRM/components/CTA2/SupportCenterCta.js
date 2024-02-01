import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'components/Container';
import Image from 'next/image';

import ReviewCTA2 from '../../../../assets/DrawKit/ReviewCTA2.svg';

const SupportCenterCta = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container
      maxWidth={1300}
      data-aos={isMd ? 'zoom-in-up' : 'fade-up'}
      data-aos-delay={100}
      data-aos-offset={100}
      data-aos-duration={1000}
    >
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4} marginTop={isMd ? 7 : 0}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Transformative Sales Processes
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Accelerate Sales Growth
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Drive growth with automated tasks, effective lead management, and
              analytics for elevated marketing strategies and increased
              conversions.
            </Typography>
          </Box>
          <Box>
            <Box marginY={1}>
              <Typography variant={'h6'}>Learn More Now</Typography>
              <Typography color={'text.secondary'}>
                Stay connected with all your customers all the time.
              </Typography>
            </Box>
            <Button variant={'contained'} size={'large'} href="pricing">
              Get started
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { md: 'flex' },
          }}
        >
          <Box>
            <Image alt="Natural Frameworks Reviews" src={ReviewCTA2} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupportCenterCta;
