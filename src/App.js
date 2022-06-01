import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";
import Button from "./Button";
import Menubar from "./Menubar";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import PostAddIcon from '@mui/icons-material/PostAdd';
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
import Signup from './Signup';
import Post from './Post';
import TitleLogo from './TitleLogo';
import PostDisplay from './PostDisplay'
import PostOtsumami from './PostOtsumami';
import PostGohan from './PostGohan';
import PostMen from './PostMen';
import PostPan from './PostPan';
import PostChousyoku from './PostChousyoku';
import PostNiku from './PostNiku';
import PostGyokai from './PostGyokai';
import PostYasai from './PostYasai';
import PostSalada from './PostSalada';
import PostAgemono from './PostAgemono';
import PostNabemono from './PostNabemono';
import PostShirumono from './PostShirumono';
import PostKonamono from './PostKonamono';
import PostEgg from './PostEgg';
import PostWasyoku from './PostWasyoku';
import PostKankoku from './PostKankoku';
import PostChina from './PostChina';
import PostYousyoku from './PostYousyoku';
import PostItaly from './PostItaly';
import Postdesirt from './Postdesirt';
import PostFile from './PostFile';
import SignIn from './SignIn';
import MyPage  from './MyPage';
import CampDailyPostDisplay  from './CampDailyPostDisplay';
import CampSerch from './CampSerch';
import CampList from './CampList';


function App() {
  return (
    <Router>
            <div>
                <nav>
                            <Link to="/Home"></Link>
                        </nav>

                <Routes>
                  <Route exect path="/Post/Display" element={<PostDisplay/>}  />
                  <Route exect path="/Post" element={<Post/>}/>
                  <Route exect path="/Home" element={<Home/>}/>
                  <Route exect path="/Home" element={<Home/>}/>
                  <Route exect path="/SignUp" element={<Signup/>}/>
                  <Route exect path="/Food/Serch" element={<FoodSerch/>}/>
                  <Route exect path="/PostOtsumami" element={<PostOtsumami/>}/>
                  <Route exect path="/PostGohan" element={<PostGohan/>}/>
                  <Route exect path="/PostMen" element={<PostMen/>}/>
                  <Route exect path="/PostPan" element={<PostPan/>}/>
                  <Route exect path="/PostChousyoku" element={<PostChousyoku/>}/>
                  <Route exect path="/PostNiku" element={<PostNiku/>}/>
                  <Route exect path="/PostGyokai" element={<PostGyokai/>}/>
                  <Route exect path="/PostYasai" element={<PostYasai/>}/>
                  <Route exect path="/PostSalada" element={<PostSalada/>}/>
                  <Route exect path="/PostAgemono" element={<PostAgemono/>}/>
                  <Route exect path="/PostNabemono" element={<PostNabemono/>}/>
                  <Route exect path="/PostShirumono" element={<PostShirumono/>}/>
                  <Route exect path="/PostKonamono" element={<PostKonamono/>}/>
                  <Route exect path="/PostEgg" element={<PostEgg/>}/>
                  <Route exect path="/PostWasyoku" element={<PostWasyoku/>}/>
                  <Route exect path="/PostKankoku" element={<PostKankoku/>}/>
                  <Route exect path="/PostChina" element={<PostChina/>}/>
                  <Route exect path="/PostYousyoku" element={<PostYousyoku/>}/>
                  <Route exect path="/PostItaly" element={<PostItaly/>}/>
                  <Route exect path="/Postdesirt" element={<Postdesirt/>}/>
                  <Route exect path="/SignIn" element={<SignIn/>}/>
                  <Route exect path="/MyPage" element={<MyPage/>}/>
                  <Route exect path="/MyPage/CampDailyPostDisplay" element={<CampDailyPostDisplay/>}/>
                  <Route exect path="/CampSerch" element={<CampSerch/>}/>
                  <Route exect path="/CampHokkaidou" element={<CampList/>}/>
                </Routes>
            </div>
        </Router>
  );
}

function Home() {
  return (
    <div style={{justifyContent:'center'}}>
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
      <div style={{justifyContent:'center'}}>
        <PostFile/>
      </div>
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

export default App;

