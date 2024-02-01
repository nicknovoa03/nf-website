import React from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'components/Container';
import Image from 'next/image';

import oneInbox from '../../../../assets/template/oneInbox.png';

const SupportCenterCta = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container maxWidth={{ md: 1450 }}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
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
          <Box
            maxWidth={600}
            height={1}
            width={1}
            data-aos={isMd ? 'fade-down-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Image alt="Natural Frameworks All In One Inbox" src={oneInbox} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-down-left' : 'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Box marginBottom={4} marginTop={{ md: 7 }}>
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
      </Grid>
    </Container>
  );
};

export default SupportCenterCta;
