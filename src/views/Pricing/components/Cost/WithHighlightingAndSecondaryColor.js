import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const mock = [
  {
    title: 'Startup',
    price: '$147',
    features: ['1 Business Automation'],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/28o2axgMY6Iw9wcaEG',
  },
  {
    title: 'Essential',
    price: '$297',
    features: ['Reviews', 'Messaging', 'Webchat', 'Textable Business Number'],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/eVa2ax7coc2Q7o4289',
  },
  {
    title: 'Professional',
    price: '$497',
    features: [
      'All features',
      'CRM',
      'Payment Integration',
      'Appointment Calendar',
      'Auto Missed Call Text Back',
      'Full Customer Support Access',
    ],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/dR68yV40cgj6cIofZ1',
  },
];

const WithHighlightingAndSecondaryColor = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid
          item
          md={12}
          data-aos={'zoom-in-down'}
          data-aos-offset={150}
          data-aos-duration={1000}
        >
          <Typography align="center" fontWeight={700} variant="h3">
            Plans & Pricing
          </Typography>
        </Grid>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={Card}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={item.isHighlighted ? 4 : 0}
              data-aos={'flip-left'}
              data-aos-delay={i * 100}
              data-aos-offset={200}
              data-aos-duration={1000}
            >
              <CardContent
                sx={{
                  padding: 4,
                }}
              >
                <Box
                  marginBottom={4}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Typography variant={'h4'}>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant={'subtitle2'} color={'text.secondary'}>
                      /mo
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                        data-aos={'fade-right'}
                        data-aos-delay={i * 100}
                        data-aos-offset={200}
                        data-aos-duration={1000}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
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
                        </Box>
                        <ListItemText primary={feature} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button
                  size={'large'}
                  variant={'contained'}
                  href={item.paymentLink}
                  target="blank"
                >
                  Learn More
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WithHighlightingAndSecondaryColor;
