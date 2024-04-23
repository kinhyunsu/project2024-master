import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginContextProvider from "./context/LoginContextProvider";
import Home from './page/Home';
import Join from './page/Join';
import Login from './page/Login';
import Chat from './page/Chat';
import MyPage from './page/MyPage';

const App = () => {
  return (
      <BrowserRouter>                {/* URL 관리, 브라우저의 주소를 처리 */}
        <LoginContextProvider>       {/* 로그인 관리 */}
          <Routes>                   {/* 어떤 컴포넌트를 렌더링할지 결정하는 역할 */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
  );
};

export default App;
