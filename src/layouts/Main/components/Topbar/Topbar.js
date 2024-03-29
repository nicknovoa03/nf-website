import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

import logo from '../../../../assets/logos/NF-logo.png';
import Image from 'next/image';
import { Typography } from '@mui/material';

const Topbar = ({ onSidebarOpen, pages }) => {
  const theme = useTheme();
  const { services: servicePages } = pages;

  return (
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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Button href="/" variant="text">
            <Typography fontWeight={400} color="text.primary">
              Home
            </Typography>
          </Button>
        </Box>
        <Box marginLeft={2.5}>
          <NavItem
            title={'Services'}
            id={'service-pages'}
            items={servicePages}
          />
        </Box>
        <Box marginLeft={2}>
          <Button href="/about-us" variant="text">
            <Typography fontWeight={400} color="text.primary">
              About Us
            </Typography>
          </Button>
        </Box>
        <Box marginLeft={2}>
          <Button href="/contact" variant="contained">
            Contact
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorinvert: PropTypes.bool,
};

export default Topbar;
