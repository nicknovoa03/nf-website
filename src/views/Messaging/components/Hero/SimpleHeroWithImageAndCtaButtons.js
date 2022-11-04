import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const SimpleHeroWithImageAndCtaButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems={'center'}
        data-aos={isMd ? 'fade-right' : 'flip-up'}
      >
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              One Place For
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                Every Message
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Connect with leads and customers through texting, live chat, bulk
              messaging, Google My Business and Facebook messages.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
      >
        <Box
          component={'img'}
          height={1}
          width={1}
          src={'https://assets.maccarianagency.com/backgrounds/img8.jpg'}
          alt="..."
          borderRadius={2}
          maxWidth={600}
          maxHeight={500}
          sx={{
            objectFit: 'cover',
            boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
