import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: '/static/images/buttons/breakfast.jpg',
    title: 'おつまみ',
    width: '25%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: 'ご飯もの',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '麺類',
    width: '25%',
  },
  {
    url: '/static/images/buttons/breakfast.jpg',
    title: 'パン類',
    width: '25%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: '朝食',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '肉料理',
    width: '25%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: '魚介料理',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '野菜料理',
    width: '25%',
  },
  {
    url: '/static/images/buttons/breakfast.jpg',
    title: 'サラダ',
    width: '25%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: '揚げ物',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '鍋もの',
    width: '25%',
  },
  {
    url: '/static/images/buttons/breakfast.jpg',
    title: '汁物/スープ',
    width: '25%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: '粉物',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '卵料理',
    width: '25%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: '和食',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '韓国料理',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '中華料理',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: '洋食',
    width: '25%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: 'デザート',
    width: '25%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <Box sx={{ justifyContent:'center', display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
