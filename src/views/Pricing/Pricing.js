import { Box, useTheme } from '@mui/material';
import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import Compare from './components/Compare';
import Info from './components/Info';

const Pricing = () => {
  const theme = useTheme();

  return (
    <Main>
      <Container>
        <Info />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Container>
          <Compare />
        </Container>
      </Box>
    </Main>
  );
};
export default Pricing;
