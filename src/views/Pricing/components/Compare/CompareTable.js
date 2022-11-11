import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Container from 'components/Container';

const features = [
  {
    title: 'Business Integration',
    id: 8,
  },
  {
    title: 'Reviews',
    id: 1,
  },
  {
    title: 'Messaging',
    id: 2,
  },
  {
    title: 'Webchat',
    id: 3,
  },
  {
    title: 'CRM',
    id: 4,
  },
  {
    title: 'Appointment Calendar',
    id: 5,
  },
  {
    title: 'Payments',
    id: 6,
  },
  {
    title: 'Auto Missed Call Text Back',
    id: 7,
  },
];

const pricing = [
  {
    title: 'Startup',
    price: {
      monthly: 147,
      annual: 147,
    },
    features: [8],
    isHighlighted: false,
    btnText: 'Get Startup',
    paymentLink: 'https://buy.stripe.com/28o2axgMY6Iw9wcaEG',
  },
  {
    title: 'Essentials',
    price: {
      annual: 297,
      monthly: 147 * 12,
    },
    features: [1, 2, 3, 8],
    isHighlighted: true,
    btnText: 'Get Essentials',
    paymentLink: 'https://buy.stripe.com/eVa2ax7coc2Q7o4289',
  },
  {
    title: 'Professional',
    price: {
      annual: 497,
      monthly: 497 * 12,
    },
    features: [1, 2, 3, 4, 5, 6, 7, 8],
    isHighlighted: false,
    btnText: 'Get Professional',
    paymentLink: 'https://buy.stripe.com/dR68yV40cgj6cIofZ1',
  },
];

const CompareTable = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        marginBottom={3}
        data-aos={'zoom-out-down'}
        data-aos-offset={150}
        data-aos-duration={1000}
      >
        <Typography align="center" fontWeight={700} variant="h4">
          Compare Plans
        </Typography>
      </Box>
      <TableContainer component={Paper} elevation={4}>
        <Table aria-label="caption table" sx={{ minWidth: 600 }}>
          <caption>
            Compare the plans and choose the one which works for you the best.
          </caption>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {pricing.map((item, i) => (
                <TableCell
                  align="center"
                  key={i}
                  data-aos={'flip-up'}
                  data-aos-delay={100}
                  data-aos-offset={200}
                  data-aos-duration={1000}
                >
                  <Typography
                    sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}
                  >
                    {item.title}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {features.map((feature, i) => (
              <TableRow key={feature.id}>
                <TableCell component="th" scope="row">
                  {feature.title}
                </TableCell>
                <TableCell align="center">
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    data-aos={'flip-down'}
                    data-aos-delay={i * 100}
                    data-aos-offset={100}
                    data-aos-duration={1000}
                  >
                    {pricing[0].features.indexOf(feature.id) !== -1 ? (
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box display={'flex'} justifyContent={'center'}>
                    {pricing[1].features.indexOf(feature.id) !== -1 ? (
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                        data-aos={'flip-down'}
                        data-aos-delay={i * 100}
                        data-aos-offset={100}
                        data-aos-duration={1000}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box display={'flex'} justifyContent={'center'}>
                    {pricing[2].features.indexOf(feature.id) !== -1 ? (
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                        data-aos={'flip-down'}
                        data-aos-delay={i * 100}
                        data-aos-offset={100}
                        data-aos-duration={1000}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell />
              {pricing.map((item, i) => (
                <TableCell align="center" key={i}>
                  <Button
                    size={'large'}
                    variant={item.isHighlighted ? 'contained' : 'outlined'}
                    href={item.paymentLink}
                  >
                    {item.btnText}
                  </Button>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CompareTable;
