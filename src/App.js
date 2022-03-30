import * as React from 'react';
import CustomizedMenus from "./CustomizedMenus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomizedMenus
        maintitle={'menu'}
        title1={'会員登録'}
        title2={'マイページ'}
        title3={'ログイン/ログアウト'}
        title4={'最新投稿'}
        title5={'料理検索'}
        title6={'キャンプ場検索'}
        title7={'退会'}
        />
       
      
      </header>
    </div>
  );
}

export default App;

