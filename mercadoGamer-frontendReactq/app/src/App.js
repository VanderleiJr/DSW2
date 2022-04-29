import {Fragment} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Header, UserArea, CompArea} from './modules/public/index';
import SignInUser from './modules/user/signin';
import SignUpUser from './modules/user/signup';
import SignInCompany from './modules/company/signin';
import SignUpCompany from './modules/company/signup';

import HomeUser from './modules/user/home';
import HomeCompany from './modules/company/home';

import Market from './modules/market/market'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
            <Header />
            <UserArea />
            <CompArea />
            </>} />
        

        <Route path="/user/signin" element={<SignInUser />} />
        <Route path="/user/signup" element={<SignUpUser />} />
        <Route path="/user/home" element={<HomeUser />} />

        <Route path="/company/signin" element={<SignInCompany />} />
        <Route path="/company/signup" element={<SignUpCompany />} />
        <Route path="/company/home" element={<HomeCompany />} />

        <Route path="/market/market" element={<Market />} />

      </Routes>
    </BrowserRouter>
  );
}

