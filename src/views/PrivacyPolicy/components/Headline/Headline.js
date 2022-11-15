import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
