/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import { colors, Divider, useMediaQuery } from '@mui/material';

import AllInboxIcon from '@mui/icons-material/AllInbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { useTheme } from '@emotion/react';

const mock = [
  {
    color: colors.yellow[700],
    title: 'Online Reviews',
    subtitle:
      'Automate your online reviews with a few simple clicks & respond to reviews in 1 place',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <StarBorderIcon />
      </svg>
    ),
  },
  {
    color: colors.deepOrange[500],
    title: 'Messaging',
    subtitle:
      'Manage your messages with a single inbox for text, Facebook messages, Google messages, and more.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <AllInboxIcon />
      </svg>
    ),
  },
  {
    color: colors.cyan[500],
    title: 'Webchat',
    subtitle:
      'Convert more website visitors into leads & sales conversations with Webchat.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <MarkUnreadChatAltOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.green[500],
    title: 'Payments',
    subtitle:
      'Easy text 2 pay client invoicing. Simplify your client invoicing & get paid faster.',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <PaidOutlinedIcon />
      </svg>
    ),
  },
  {
    color: colors.red[500],
    title: 'Missed Call Text Back',
    subtitle:
      'When you\'re away, have Natural Frameworks follow up via text so you never lose another customer',
    icon: (
      <svg
        height={30}
        width={30}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <PhoneMissedIcon />
      </svg>
    ),
  },
  {
    color: colors.lightBlue[500],
    title: 'CRM',
    subtitle: 'Grow your audience & know where new leads are coming from',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
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
    <Box>
      <Box marginBottom={5}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ fontWeight: 500 }}
          marginBottom={5}
        >
          What We Do
        </Typography>
        <Divider variant="middle" />
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
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
                data-aos-duration={1000}
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
    </Box>
  );
};

export default FeatureCardsWithColorfullIconsAndLearnMoreLink;
