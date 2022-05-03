import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';

import Login from './Pages/Login/Login';

import Routes from './Routes';

function App() {
  
  const [user, setUser] = useState(null);

 

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUser(newUser);
  }

  const actionLoginDataFacebook = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    setUser(newUser)
  }

  if(user === null){
    return(
      <Login onReceiveGoogle={actionLoginDataGoogle} onReceiveFacebook={actionLoginDataFacebook} />
    );
  }


  return (
    <BrowserRouter >
    <Header user={user} />
    
    <Routes />
    
    <Footer />
    </BrowserRouter>
  );
}

export default App;

//npm install styled-components --save

//componente -> styled-components

//npm install react-router-dom --save

// npm install @material-ui/core @material-ui/icons