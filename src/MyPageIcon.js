import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { getAuth } from "firebase/auth";
import app from "./firebase";
import React, { useState } from 'react';

function MyPageIcon(){
const [date, setDate] = useState(getprofile());

function getprofile(){
const auth = getAuth(app);
const user = auth.currentUser;
if (user !== null) {
  return {displayName :  user.displayName,
   uid : user.uid}
}}
    return(
        <div>
        <div >
        <CardHeader style={{width:'435px'}}
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        title={date.displayname}
        subheader={date.uid}
      />
      </div>
        </div>
    )
  }


  export default MyPageIcon;