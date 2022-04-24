import * as React from 'react';
  import PostFile from './PostFile'
  import CustomizedMenus from "./CustomizedMenus";
  import TitleLogo from './TitleLogo';
  import Button from "./Button";
  import PostAddIcon from '@mui/icons-material/PostAdd';
  import Menubar from "./Menubar";
  import FiberNewIcon from '@mui/icons-material/FiberNew';
  import FoodBankIcon from '@mui/icons-material/FoodBank';
  import ImageSearchIcon from '@mui/icons-material/ImageSearch';
  import PersonIcon from '@mui/icons-material/Person';

  function PostDisplay() {
    return (
      <div style={{justifyContent:'center' ,alignItems:'center'}}>
        <Header/>
        <PostFile/>
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

  function Footer(){
    return(
      <footer>
        <div style={{position:'fixed',bottom:0,alignItems:'center',marginLeft:'20%',marginRight:'20%'}}>
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

  export default PostDisplay;