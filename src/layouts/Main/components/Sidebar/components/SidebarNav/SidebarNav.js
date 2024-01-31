import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import NavItem from './components/NavItem';

import logo from '../../../../../../assets/logos/NF-logo.png';
import Image from 'next/image';
import { Typography } from '@mui/material';

const SidebarNav = ({ pages }) => {
  const { services: servicePages } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Natural Frameworks"
          width={{ xs: 50, md: 50 }}
        >
          <Image alt="Natural Frameoworks Logo" src={logo}></Image>
        </Box>
      </Box>

      <Box paddingX={2} paddingY={2}>
        <Box>
          <Button href="/" variant="text">
            <Typography
              fontWeight={400}
              marginLeft={-2.4}
              color={'text.primary'}
              align="left"
            >
              Home
            </Typography>
          </Button>
        </Box>

        <Box>
          <NavItem
            title={'Services'}
            id={'service-pages'}
            items={servicePages}
          />
        </Box>

        <Box>
          <Button href="/about-us" variant="text">
            <Typography fontWeight={400} color="text.primary" marginLeft={-1}>
              About Us
            </Typography>
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button href="/contact" variant="contained">
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
