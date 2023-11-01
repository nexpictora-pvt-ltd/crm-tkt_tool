import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const Card1 = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.mode === 'dark' ? '#2b2b2b' : '#D36A2F';

  return (
    <Box sx={{ height: '32vh', backgroundColor, borderRadius: '15px' }}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        sx={{ height: '100%', width: '100%' }}
      />
    </Box>
  );
};

export default Card1;
