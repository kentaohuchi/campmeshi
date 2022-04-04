import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";
import Button from "./Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Menubar from "./Menubar";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import PersonIcon from '@mui/icons-material/Person';

function App() {
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
    <div className="App">
        <CustomizedMenus
        title1={'会員登録'}
        title2={'マイページ'}
        title3={'ログイン/ログアウト'}
        title4={'最新投稿'}
        title5={'料理検索'}
        title6={'キャンプ場検索'}
        title7={'退会'}
        />
        <h1>CamP MeshI</h1>
        <Button
        Buttonname={<AddCircleOutlineIcon/>}
        />
      
    </div>
  );
}

function Main(){
  return(
    <main>
      <div>
        <h1>====</h1>
        <p>フォロワーの投稿内容</p>
        <h1>====</h1>
      </div>
    </main>
  )
}

function Footer(){
  return(
    <footer>
      <div>
      <Menubar
      newfoods={"最新料理投稿"}
      news={<FiberNewIcon/>}
      label={"キャンプ飯検索"}
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

export default App;

