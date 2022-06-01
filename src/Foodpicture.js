import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import otsumami from './static/images/otsumami.jpeg'
import gohan from './static/images/gohan.jpeg'
import menrui from './static/images/menrui.jpeg'
import panrui from './static/images/panrui.jpeg'
import chousyoku from './static/images/chousyoku.jpeg'
import niku from './static/images/niku.jpeg'
import gyokai from './static/images/gyokai.jpeg'
import yasai from './static/images/yasai.jpeg'
import salada from './static/images/salada.jpeg'
import agemono from './static/images/agemono.jpeg'
import nabe from './static/images/nabe.jpeg'
import soupe from './static/images/soupe.jpeg'
import konamono from './static/images/konamono.png'
import egg from './static/images/egg.png'
import wasyoku from './static/images/wasyoku.jpeg'
import korean from './static/images/korean.jpeg'
import china from './static/images/china.jpeg'
import yousyoku from './static/images/yousyoku.jpeg'
import italy from './static/images/italy.jpeg'
import desart from './static/images/desart.jpeg'
import PostOtsumami from './PostOtsumami';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const images = [
  {
    url:otsumami,
    title: 'おつまみ',
    width: '25%',
    component:Link,
    to:'/PostOtsumami'
  },
  {
    url:gohan,
    title: 'ご飯もの',
    width: '25%',
    component:Link,
    to:'/PostGohan'
  },
  {
    url:menrui,
    title: '麺類',
    width: '25%',
    component:Link,
    to:'/PostMen'
  },
  {
    url:panrui,
    title: 'パン類',
    width: '25%',
    component:Link,
    to:'/PostPan'
  },
  {
    url:chousyoku,
    title: '朝食',
    width: '25%',
    component:Link,
    to:'/PostChousyoku'
  },
  {
    url:niku,
    title: '肉料理',
    width: '25%',
    component:Link,
    to:'/PostNiku'
  },
  {
    url:gyokai,
    title: '魚介料理',
    width: '25%',
    component:Link,
    to:'/PostGyokai'
  },
  {
    url:yasai,
    title: '野菜料理',
    width: '25%',
    component:Link,
    to:'/PostYasai'
  },
  {
    url:salada,
    title: 'サラダ',
    width: '25%',
    component:Link,
    to:'/PostSalada'
  },
  {
    url:agemono,
    title: '揚げ物',
    width: '25%',
    component:Link,
    to:'/PostAgemono'
  },
  {
    url:nabe,
    title: '鍋もの',
    width: '25%',
    component:Link,
    to:'/PostNabemono'
  },
  {
    url:soupe,
    title: '汁物/スープ',
    width: '25%',
    component:Link,
    to:'/PostShirumono'
  },
  {
    url:konamono,
    title: '粉物',
    width: '25%',
    component:Link,
    to:'/PostKonamono'
  },
  {
    url:egg,
    title: '卵料理',
    width: '25%',
    component:Link,
    to:'/PostEgg'
  },
  {
    url:wasyoku,
    title: '和食',
    width: '25%',
    component:Link,
    to:'/PostWasyoku'
  },
  {
    url:korean,
    title: '韓国料理',
    width: '25%',
    component:Link,
    to:'/PostKankoku'
  },
  {
    url:china,
    title: '中華料理',
    width: '25%',
    component:Link,
    to:'/PostChina'
  },
  {
    url:yousyoku,
    title: '洋食',
    width: '25%',
    component:Link,
    to:'/PostYousyoku'
  },
  {
    url:italy,
    title: 'イタリア料理',
    width: '25%',
    component:Link,
    to:'/PostItaly'
  },
  {
    url:desart,
    title: 'デザート',
    width: '25%',
    component:Link,
    to:'/Postdesirt'
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
          <Link to={{pathname:image.to}}
        key={image.title}>
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
          </Link>
        </ImageButton>
      ))}
    </Box>
  );
}
