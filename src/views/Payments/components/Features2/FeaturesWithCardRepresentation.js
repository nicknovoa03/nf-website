/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

import RotateRightIcon from '@mui/icons-material/RotateRight';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WalletIcon from '@mui/icons-material/Wallet';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';

const mock = [
  {
    title: 'Refunds',
    subtitle:
      'Quickly process refunds straight from your Hexona Systems dashboard.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <RotateRightIcon />
      </svg>
    ),
  },
  {
    title: 'Multiple Bank Accounts',
    subtitle:
      'Connect multiple bank accounts to make sure the correct departments are getting paid.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <AccountBalanceIcon />
      </svg>
    ),
  },
  {
    title: 'Line Items',
    subtitle:
      'Easily itemize your invoice to help customers see exactly what they are paying for.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <ReceiptIcon />
      </svg>
    ),
  },
  {
    title: 'Payment Methods',
    subtitle:
      'Give flexibility to pay with credit, debit, HSA, bank transfers, Google Pay or Apple Pay.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <WalletIcon />
      </svg>
    ),
  },
  {
    title: 'Advanced Fraud Protection',
    subtitle:
      'Our fraud model helps protect you from taking payments from stolen cards.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <SecurityIcon />
      </svg>
    ),
  },
  {
    title: 'Secure Payments',
    subtitle: 'Our PCI-compliant software protects you and your customers.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <LockIcon />
      </svg>
    ),
  },
];

const FeaturesWithCardRepresentation = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                component={Card}
                padding={4}
                width={1}
                height={1}
                data-aos={'flip-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesWithCardRepresentation;
