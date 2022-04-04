import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";
import Button from "./Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function FoodSerch() {
    return (
      <div>
        <Header/>
      </div>
    );
  }

  function Header() {
    return (
      <div>
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
  
          <Button
          Buttonname={<AddCircleOutlineIcon/>}
          />          
      </div>
    );
  }

  export default FoodSerch;