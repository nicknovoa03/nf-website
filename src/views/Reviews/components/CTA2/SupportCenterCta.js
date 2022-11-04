import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'components/Container';

const SupportCenterCta = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              REVIEW MONITORING
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Monitor all your reviews in one place
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Access all your customer reviews, for every location, from every
              source, in one dashboard.
            </Typography>
          </Box>
          <Box>
            <Box marginY={1}>
              <Typography variant={'h6'}>Learn More Now</Typography>
              <Typography color={'text.secondary'}>
                Stay connected with all your customers all the time.
              </Typography>
            </Box>
            <Button variant={'contained'} size={'large'}>
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
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupportCenterCta;
