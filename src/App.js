import React, {useState} from 'react';

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

import './App.css';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(0);
  const [userInfo,setUserInfo] = useState(null);
  const [newSignIn,setNewSignIn] = useState(0);

  return (
    isLoggedIn ? <Home userInfo={userInfo} />
    :newSignIn ? <Signup setNewSignIn={setNewSignIn} />
    :<Login setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} setNewSignIn={setNewSignIn} />)
}

export default App;
