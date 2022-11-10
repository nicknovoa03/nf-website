import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/Container';

import google from '../../../../assets/logos/googleLogo.svg';
import facebook from '../../../../assets/logos/facebookMessenger.svg';
import zapier from '../../../../assets/logos/zapier.svg';
import quickbooks from '../../../../assets/logos/quickbooks.svg';
import twilio from '../../../../assets/logos/twilio.svg';

import Image from 'next/image';

const mock = [google, facebook, quickbooks, zapier, twilio];

const LogoGridSimpleCentered = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <Container>
      <Box
        data-aos={isMd ? 'fade-down' : 'fade-up'}
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={1000}
      >
        <Box marginBottom={4}>
          <Typography
            gutterBottom
            align={'center'}
            variant={'h4'}
            fontWeight={700}
          >
            Easily Integrates With Leading Apps
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
          {mock.map((item, i) => (
            <Box marginRight={4} key={i}>
              <Box
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
                maxWidth={215}
              >
                <Image
                  alt="Natural Frameworks Integrated Apps"
                  src={item}
                ></Image>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default LogoGridSimpleCentered;
