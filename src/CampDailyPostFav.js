import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: '良くなかった',
  1: '微妙',
  1.5: '微妙',
  2: '普通',
  2.5: 'まぁまぁ良かった',
  3: '良かった',
  3.5: '良かった',
  4: 'かなり良かった',
  4.5: 'かなり良かった',
  5: 'また行きたい',
};

export default function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        margin:'0 0 0 auto'
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}