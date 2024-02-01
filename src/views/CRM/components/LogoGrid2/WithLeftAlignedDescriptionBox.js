/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

import CollaborationImage from '../../../../assets/Heros/softwares-hero.png';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';

const mock = [CollaborationImage];

const WithLeftAlignedDescriptionBox = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container maxWidth={1300}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            data-aos={isMd ? 'fade-down-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
          >
            <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
              {mock.map((item, i) => (
                <Box maxWidth={450} marginTop={0} marginRight={0} key={i}>
                  <Image alt="Natural Frameworks Reviews" src={item} />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            data-aos={isMd ? 'fade-up-left' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={1000}
            marginTop={{ md: 15 }}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Seamless Team Communication
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Enhance Team Collaboration
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Seamless Team Communication. Experience enhanced collaboration
              through a CRM hub, fostering efficient data sharing and
              operational efficiency.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithLeftAlignedDescriptionBox;
