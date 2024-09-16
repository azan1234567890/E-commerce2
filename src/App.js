
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Login from './pages/login/Login';
import { useState } from 'react';
import { memo } from 'react';

function App() {
  const token = sessionStorage.getItem('token');
  const [auth, setAuth] = useState(false);
  if(token){
    setAuth(true)
  }

  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={auth ? <Home  /> : <Navigate to={'/login'} />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default memo(App) ;
