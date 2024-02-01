import React from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'components/Container';
import Image from 'next/image';

import illustration from '../../../../assets/template/webchatIllustration2.png';

const SupportCenterCta = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container maxWidth={{ md: 1450 }} marginY={{ md: -5 }}>
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
            height={1}
            width={1}
            data-aos={isMd ? 'fade-up-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Image alt="Natural Frameworks All In One Inbox" src={illustration} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-up-left' : 'fade-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Box marginTop={{ md: 40 }}>
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
      </Grid>
    </Container>
  );
};

export default SupportCenterCta;
