import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes(props) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button size="large">{props.prefecture}</Button>
      </div>
    </Box>
  );
}