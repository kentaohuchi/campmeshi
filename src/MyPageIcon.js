import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import MyPageButton from './MyPageButton';

function MyPageIcon(){
    return(
        <div>
        <div >
        <CardHeader style={{width:'435px'}}
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        title="ユーザー名"
        subheader="ユーザーID"
      />
      </div>
        </div>
    )
  }


  export default MyPageIcon;