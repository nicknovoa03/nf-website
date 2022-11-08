import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Button, Link } from '@mui/material';
import logo from '../../../../assets/logos/NF-logo.png';

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box>
          <Link
            href="mailto:contact@naturalframeworks.com"
            color="inherit"
            underline="hover"
          >
            <Typography align={'center'}>
              Email: contact@naturalframeworks.com
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography align={'center'}>Phone: (210) 791-8336</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Natural Frameworks"
            width={50}
          >
            <Image alt="Natural Frameoworks Logo" src={logo}></Image>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/docs/introduction"
                color="text.primary"
                variant={'subtitle2'}
              >
                Schedule Call
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="https://mui.com/store/items/the-front-landing-page/"
                size="small"
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Natural Frameworks. 2022, Natural Frameworks. All rights
          reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
