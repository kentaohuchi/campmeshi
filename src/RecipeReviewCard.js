import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PanoramaIcon from '@mui/icons-material/Panorama';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MultilineTextFields from './MultilineTextFields';
import Button from "./Button";
import SendIcon from '@mui/icons-material/Send';
import { valueToPercent } from '@mui/base';
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import app from './firebase';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [post, setPost] = React.useState({});
  const sample={
    '何人前':2,
    '材料':'白米',
    '作り方':'握る'
  }
  const db = getFirestore(app);
  const creatPost  = async () => {
    console.log('完了');
    await setDoc(doc(db, "posts","test"), {
      '何人前':2,
      '材料':'白米',
      '作り方':'握る'
    });
  }

// async function test(){
//   const docRef = doc(db, "posts", "gbnZB4Joraukm2Szs8Iz");
//   const docSnap = await getDoc(docRef);
  
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }  

// }

  

  return (
    <Card sx={{ width: '100%',height:'100%', }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon  style={{height:'100%'}}/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      
      <MultilineTextFields
      multi={'何人前?'}
      multi1={'材料'}
      multi2={'作り方'}
      />
      
      <IconButton aria-label="add to favorites">
          <PhotoCameraIcon />
      </IconButton>
      <IconButton aria-label="share">
          <PanoramaIcon />
      </IconButton>
      <Button
      style={{ float: 'right'}}
      Buttonname={<SendIcon
        onClick={creatPost}/>}
      />

    </Card>
  );
}