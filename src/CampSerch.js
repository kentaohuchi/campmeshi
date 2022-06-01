import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";
import Textfield from "./Textfield"
import SearchIcon from '@mui/icons-material/Search';
import Menubar from "./Menubar";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import PersonIcon from '@mui/icons-material/Person';
import TitleLogo from './TitleLogo';
import CampSerchMain from './CampSerchMain';

function CampSerch() {
    return (
      <div style={{justifyContent:'center' }}>
        <Header/>
        <h1>キャンプ場検索</h1>
        <CampSerchMain/>
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
          <Textfield
          text1={<SearchIcon/>}
          />     
      </div>
    );
  }

  function Footer(){
    return(
      <footer>
        <div style={{display: 'flex',justifyContent:'center'}}>
        <Menubar
        newfoods={"最新料理投稿"}
        url={"/Post/Display"}
        news={<FiberNewIcon/>}
        url1={"/Food/Serch"}
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

  export default CampSerch;