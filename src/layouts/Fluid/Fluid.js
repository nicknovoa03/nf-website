import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import NoSsr from '@mui/material/NoSsr';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Footer } from './components';
import Image from 'next/image';

import logo from '../../assets/logos/NF-logo.png';
import Script from 'next/script';

const Fluid = ({
  children,
  colorInvert = false,
  bgcolor = 'alternate.main',
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <Box id="js--fluid-top" marginBottom={5}>
      <AppBar
        position={'relative'}
        sx={{
          top: 0,
          backgroundColor: bgcolor,
        }}
        elevation={0}
      >
        <Container paddingY={1} maxWidth={1500}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={1}
          >
            <Box
              display={'flex'}
              component="a"
              href="/"
              title="Natural Frameworks"
              width={{ xs: 50, md: 50 }}
            >
              <Image alt="Natural Frameoworks Logo" src={logo}></Image>
            </Box>
            <TopNav colorInvert={colorInvert} />
          </Box>
        </Container>
      </AppBar>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
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
    </Box>
  );
};

Fluid.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Fluid;
