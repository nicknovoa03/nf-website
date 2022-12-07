/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import { colors, Divider, useMediaQuery } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeIcon from '@mui/icons-material/Code';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { useTheme } from '@emotion/react';
import Container from 'components/Container';

const mock = [
  {
    color: colors.amber[700],
    title: 'Website Development',
    subtitle:
      'Build and upgrade websites with Automations, Personalized messages for clients, Reviews, Discounts, Etc.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <CodeIcon />
      </svg>
    ),
  },
  {
    color: colors.cyan[500],
    title: 'Email Marketing',
    subtitle:
      'Never miss or ghost any potential leads again. Assist in email marketing, including custom email templates and overall strategy.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <EmailOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.deepOrange[300],
    title: 'Social Media Management',
    subtitle:
      'Our Social Media Management team is ready 24/7 to post, engage, answer questions, etc. on your accounts',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <ManageAccountsOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.green[500],
    title: 'SEO',
    subtitle:
      'Optimize your website for search engine best practices to increase visibility to your organization.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <AutoGraphOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.amber[600],
    title: 'Reviews and Ratings',
    subtitle:
      'Keep track of what your customers are saying about you. Respond to reviews straight from the application.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <StarBorderOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.lightBlue[500],
    title: 'Team Training',
    subtitle:
      'Work with our team and train to understand the importance of keeping an online presence',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <GroupsIcon />
      </svg>
    ),
  },
  {
    color: colors.deepOrange[500],
    title: 'Audience Analytics',
    subtitle:
      'Track all performance on posts, interactions on ad spend, and conversion all from the palm of your hand',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AnalyticsOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.green[500],
    title: 'CRM',
    subtitle:
      'Keep track of all your leads and customers. Grow your audience & know where new leads are coming from',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AddTaskOutlinedIcon />
      </svg>
    ),
  },
];

const FeatureCardsWithColorfullIconsAndLearnMoreLink = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box marginBottom={5}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ fontWeight: 600 }}
          marginBottom={5}
        >
          We've Got You Covered
        </Typography>
        <Divider variant="middle" />
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .1s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-20px)',
                },
              }}
            >
              <Box
                component={Card}
                padding={4}
                width={1}
                height={1}
                data-aos={isMd ? 'fade-up' : 'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box display={'flex'} flexDirection={'column'}>
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(item.color, 0.1)}
                    color={item.color}
                    variant={'rounded'}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureCardsWithColorfullIconsAndLearnMoreLink;
