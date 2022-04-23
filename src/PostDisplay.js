import * as React from 'react';
  import PostFile from './PostFile'
  import CustomizedMenus from "./CustomizedMenus";
  import TitleLogo from './TitleLogo';
  import Button from "./Button";
  import PostAddIcon from '@mui/icons-material/PostAdd';

  function PostDisplay() {
    return (
      <div style={{justifyContent:'center' ,alignItems:'center'}}>
        <Header/>
        <PostFile/>
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

  export default PostDisplay;