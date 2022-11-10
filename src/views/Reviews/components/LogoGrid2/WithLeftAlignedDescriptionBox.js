/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

import GoogleYelpFacebook from '../../../../assets/logos/GoogleYelpFacebook.png';
import Image from 'next/image';

const mock = [GoogleYelpFacebook];

const WithLeftAlignedDescriptionBox = () => {
  return (
    <Container maxWidth={1300}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            data-aos={'flip-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
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
            data-aos={'fade-left'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Get Customer Reviews Automatically
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Collecting new reviews has never been easier. Natural Frameworks
              will send customers to the top review sites to share their
              feedback!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithLeftAlignedDescriptionBox;
