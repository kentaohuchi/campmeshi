import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import KeepPostCard from './KeepPostCard';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '30%',
          height: '30%',
        },
      }}
    >
      <KeepPostCard elevation={0} />
      <KeepPostCard />
      <KeepPostCard elevation={3} />
    </Box>
  );
}