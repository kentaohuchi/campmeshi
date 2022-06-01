import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";
import Button from "./Button";
import TitleLogo from './TitleLogo';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MyPageTab from './MyPageTab';
import Menubar from "./Menubar";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import PersonIcon from '@mui/icons-material/Person';
import MyPageIcon from './MyPageIcon';
import Typography from '@mui/material/Typography';
import MyPageButton from './MyPageButton';

function MyPage() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
  
  function Header() {
    return (
      <div style={{display: 'flex'}}>
          <CustomizedMenus
          title1={'会員登録'}
          title2={'マイページ'}
          title3={'ログイン/ログアウト'}
          title4={'最新投稿'}
          title5={'料理検索'}
          title6={'キャンプ場検索'}
          title7={'退会'}
          homename={'CamP MeshI'}
          />
          <TitleLogo/>
          <Button
          Buttonname={<PostAddIcon/>}
          />          
      </div>
    );
  }

  function Main(){
    return(
      <main>
        <div style={{display: 'flex'}}>
        <MyPageIcon/>
        <MyPageButton/>
        </div>
        <Typography>
          紹介文
        </Typography>
        <MyPageTab/>
      </main>
    )
  }

  function Footer(){
    return(
      <footer>
        <div style={{position:'fixed',left:'50%', bottom:0,transform:'translate(-50%, -50%)'}}>
        <Menubar
        newfoods={"最新料理投稿"}
        news={<FiberNewIcon/>}
        cook={"キャンプ飯検索"}
        cooking={<FoodBankIcon/>}
        campserch={'キャンプ場検索'}
        mountain={<ImageSearchIcon/>}
        mypage={'マイページ'}
        person={<PersonIcon/>}
        />
        </div>
      </footer>
    );
  }
  
  export default MyPage;