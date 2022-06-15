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
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import app from './firebase';
import Input from '@mui/material/Input';
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

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
  const [FoodName, setFoodName] = React.useState({});
  const [Amount, setAmount] = React.useState({});
  const [Material, setMaterial] = React.useState({});
  const [Make, setMake] = React.useState({});
  const db = getFirestore(app);
  const auth = getAuth(app);
  const creatPost  = async () => {
    console.log('完了');
    uploadImage(value);
  }
  
   function uploadImage(file) {
        if (!file) return
        const storage = getStorage(app)
        const storageRef = sRef(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed',
    (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
        }
    },
    (error) => {
        console.log(error)
    },
    () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            const postRef = doc(db, 'posts', uuidv4());
            setDoc(postRef, {url:downloadURL, Name:FoodName, amount:Amount, material:Material, make:Make, user:auth.currentUser.uid});
        });
    }
);
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

const [value, setvalue] = React.useState('');
function handleChange(event) {
  setvalue(event.target.files[0]);
}

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
      setFoodName = {setFoodName}
      setAmount={setAmount}
      setMaterial={setMaterial}
      setMake={setMake}
      multi={'料理名'}
      multi1={'何人前?'}
      multi2={'材料'}
      multi3={'作り方'}
      />
      
      
      <Input type='file' 
      onChange={handleChange}/>
      
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