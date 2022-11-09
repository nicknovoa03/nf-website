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
              Every Message In One Place
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              All customer interactions in one Unified Inbox
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Never miss another chat, review, survey or referral. Now every
              customer interaction lives in a single place, right in your inbox
              — ready for you to respond to.
            </Typography>
          </Box>
          <Box>
            <Box marginY={1}>
              <Typography variant={'h6'}>Find Out How</Typography>
              <Typography color={'text.secondary'}>
                Stay connected to all customers across all platforms
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
