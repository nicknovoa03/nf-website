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
              Customization
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Make the Webchat widget yours
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Add a personal touch to your chat window by customizing chat
              icons, colors, and the greeting. Let visitors know who
              they&apos;ll be chatting with. Add names, photos, or even a pic of
              your business mascot.
            </Typography>
          </Box>
          <Box>
            <Box marginY={1}>
              <Typography variant={'h6'}>Create a request</Typography>
              <Typography color={'text.secondary'}>
                Never miss a beat again with your new webchat essentials.
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
