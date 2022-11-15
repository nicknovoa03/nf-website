import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        align={'center'}
        sx={{
          fontWeight: 700,
        }}
      >
        Terms & Conditions
      </Typography>
    </Box>
  );
};

export default Headline;
