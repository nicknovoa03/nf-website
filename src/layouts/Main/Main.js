import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Topbar, Sidebar, Footer } from './components';

import pages from '../navigation';
import Script from 'next/script';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <TopNav colorInvert={colorInvert} />
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
      <div
        data-chat-widget
        data-style="--chat-widget-primary-color: #377dff; --chat-widget-active-color:#377dff ;--chat-widget-bubble-color: #377dff"
        data-location-id="d9EJPvHmPoXnwbaq1mCE"
        data-prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
        heading="What can I help you with?"
        sub-heading="Hi, I'm Sam! Please let me know what I can help you with and the best way to reach out. "
        prompt-msg="Hi, I am available to answer and questions right now."
        data-use-email-field="true"
        data-agency-name="Natural Frameworks"
        data-agency-website="www.naturalframeworks.com"
      ></div>
      <Script
        id="Chat Widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      ></Script>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
