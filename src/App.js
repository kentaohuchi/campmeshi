import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";
import Button from "./Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Menubar from "./Menubar";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import PersonIcon from '@mui/icons-material/Person';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FoodSerch from './FoodSerch';
import Singup from './Signup';

function App() {
  return (
    <Router>
            <div>
                <nav>
                            <Link to="/Home"></Link>
                        </nav>

                <Routes>
                    <Route exect path="/Home" element={<Home/>}  />
                    <Route exect path="/Singup" element={<Singup/>}  />
                    <Route exect path="/Food/Serch" element={<FoodSerch/>}  />
                </Routes>
            </div>
        </Router>
  );
}

function Home() {
  return (
    <div className="App" style={{justifyContent:'center'}}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

function Header() {
  return (
    <div style={{display: 'flex',justifyContent:'center'}}>
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

function Main(){
  return(
    <main>
      <div style={{justifyContent:'center'}}>
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
      <div style={{display: 'flex',justifyContent:'center'}}>
      <Menubar
      newfoods={"最新料理投稿"}
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





export default App;

