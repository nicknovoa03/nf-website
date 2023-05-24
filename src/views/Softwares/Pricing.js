import { useTheme } from '@mui/material';
import Container from 'components/Container';
import { Main } from 'layouts';
import React from 'react';
import Cost from './components/Cost';
import Hero from './components/Hero';
import { Box } from '@mui/material';

const Pricing = () => {
  const theme = useTheme();

  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <a id="costs"></a>
        <Container>
          <Cost />
        </Container>
      </Box>
    </Main>
  );
};
export default Pricing;
