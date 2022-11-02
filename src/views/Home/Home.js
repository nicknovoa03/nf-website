import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Fluid } from 'layouts';
import Container from 'components/Container';
import { OnlineReviews, Messaging, Payment, Hero, Contact } from './components';
import Script from 'next/script';

import FeatureCardsWithColorfullIconsAndLearnMoreLink from 'blocks/FeatureCardsWithColorfullIconsAndLearnMoreLink';

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <div
        data-chat-widget
        data-style="--chat-widget-primary-color: #188bf6; --chat-widget-active-color:#188bf6 ;--chat-widget-bubble-color: #188bf6"
        data-location-id="d9EJPvHmPoXnwbaq1mCE"
        data-prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
        data-use-email-field="true"
        data-agency-name="Natural Frameworks"
        data-agency-website="www.naturalframeworks.com"
      ></div>
      <Script
        id="Chat Widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      ></Script>
      <Fluid>
        <Container>
          <Hero />
        </Container>
        <Container>
          <FeatureCardsWithColorfullIconsAndLearnMoreLink />
        </Container>
        <Container>
          <a id="OnlineReviews" />
          <OnlineReviews />
        </Container>
        <Container paddingY={'0 !important'}>
          <Messaging />
        </Container>
        <Container>
          <Payment />
        </Container>
        <Box
          position={'relative'}
          sx={{
            backgroundColor: theme.palette.alternate.main,
          }}
        >
          <Container>
            <a id="LearnMore" />
            <Contact />
          </Container>
          <Box
            component={'svg'}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1920 100.1"
            sx={{
              width: '100%',
              marginBottom: theme.spacing(-1),
            }}
          >
            <path
              fill={theme.palette.background.paper}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
      </Fluid>
    </>
  );
};

export default Home;
