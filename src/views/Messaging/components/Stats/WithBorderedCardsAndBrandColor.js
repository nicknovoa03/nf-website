/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from 'components/Container';

const mock = [
  {
    number: '3x',
    title: 'Higher Conversion',
    subtitle:
      'Reviews requested via text message vs reviews requested via email.',
  },
  {
    number: '95%',
    title: 'Of Messages are Read',
    subtitle:
      'Texts have a 99% open rate. 95% of those texts are read within 5 minutes.',
  },
  {
    number: '10X',
    title: 'Faster Than Calling',
    subtitle:
      'Text messaging is the new standard for quick and easy communication.',
  },
];

const WithBorderedCardsAndBrandColor = () => {
  return (
    <Container>
      <Box>
        <Box
          marginBottom={4}
          data-aos={'zoom-in-up'}
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={1000}
        >
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}
          >
            Numbers
          </Typography>
          <Typography
            variant="h4"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Your business wins when you interact with customers
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={4}>
            {mock.map((item, i) => (
              <Grid item xs={12} sm={12} md={4} key={i}>
                <Box
                  component={Card}
                  padding={4}
                  width={1}
                  height={1}
                  variant={'outlined'}
                  data-aos={'flip-down'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={1000}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Typography
                      variant={'h4'}
                      color={'primary'}
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" align="center">
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default WithBorderedCardsAndBrandColor;
