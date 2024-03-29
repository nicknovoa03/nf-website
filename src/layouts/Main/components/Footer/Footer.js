import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Button, Link } from '@mui/material';
import logo from '../../../../assets/logos/NF-logo.png';
import Container from 'components/Container';

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} align="center">
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Natural Frameworks"
            width={50}
          >
            <Image alt="Natural Frameoworks Logo" src={logo}></Image>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Box>
              <Typography fontWeight={700} variant="h6">
                Contacts
              </Typography>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                href="mailto:contact@naturalframeworks.com"
                color="inherit"
                underline="hover"
              >
                <Typography variant={'subtitle2'}>
                  Email: contact@naturalframeworks.com
                </Typography>
              </Link>
            </Box>
            <Box marginTop={2} marginRight={2}>
              <Typography variant={'subtitle2'}>
                Phone: (210) 796-2820
              </Typography>
            </Box>
            <Box marginTop={2} marginRight={2}>
              <Typography variant={'subtitle2'}>
                Locally based out of <br />
                San Antonio, Texas.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box alignItems={'center'}>
            <Typography fontWeight={700} variant="h6">
              Our Services
            </Typography>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/webchat"
                color="text.primary"
                variant={'subtitle2'}
              >
                Webchat
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/allInOneInbox"
                color="text.primary"
                variant={'subtitle2'}
              >
                All In One Inbox
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/payments"
                color="text.primary"
                variant={'subtitle2'}
              >
                Payments
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/crm"
                color="text.primary"
                variant={'subtitle2'}
              >
                CRM
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box>
            <Box alignItems={'center'}>
              <Box>
                <Typography fontWeight={700} variant="h6">
                  Navigate
                </Typography>
              </Box>
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
              <Box marginTop={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  component="a"
                  href="/contact"
                  size="small"
                >
                  Schedule Call
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
            &copy; Natural Frameworks. 2024, Natural Frameworks. All rights
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
        <Grid container item xs={12} align="center">
          <Grid item md={6} xs={6}>
            <Link
              href="/privacy-policy"
              variant={'caption'}
              color="text.secondary"
            >
              Privacy Policy
            </Link>
          </Grid>
          <Grid item md={6} xs={6}>
            <Link
              href="/terms-conditions"
              variant={'caption'}
              color="text.secondary"
            >
              Terms & Conditions
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
