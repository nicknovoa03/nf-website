import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Image from 'next/image';

import fourOhFour from '../../assets/404.gif';

const NotFound = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        bgcolor={theme.palette.alternate.main}
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        marginTop={-12}
        paddingTop={12}
      >
        <Container>
          <Grid container>
            <Grid item container justifyContent={'center'} xs={12} md={6}>
              <Box height={1} width={1} maxWidth={500}>
                <Image alt="Natural Frameworks 404" src={fourOhFour}></Image>
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
              <Box>
                <Typography
                  variant="h1"
                  component={'h1'}
                  align={isMd ? 'left' : 'center'}
                  sx={{ fontWeight: 700 }}
                >
                  404
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.secondary"
                  align={isMd ? 'left' : 'center'}
                >
                  Error! I don&apos;t think you meant to end up here
                </Typography>
                <Box
                  marginTop={4}
                  display={'flex'}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    size="large"
                    href={'/'}
                  >
                    Back home
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFound;
