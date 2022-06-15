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
  import { collection, getDocs, getFirestore } from "firebase/firestore";
  import app from './firebase';
  import React, { useState, useEffect } from 'react';



  function PostDisplay() {
    useEffect(() => {
      getPosts();
    },[]);
    const [posts,setPosts] = useState([]);
    const listItems = posts.map((post) =>
  <PostFile post={post}/> 
   );
    async function getPosts () {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "posts"));
    let date=[]
    querySnapshot.forEach((doc) => {
      date.push(doc.data());
      console.log(doc.id, " => ", doc.data());
});setPosts([...posts, ...date]);
console.log(posts);
    }
    
    return (
      <div style={{justifyContent:'center' ,alignItems:'center'}}>
        <Header/>
        {lisutItems.length!==0 ? listItems:''}
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

  export default PostDisplay;