import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './Components/Header';

const firebaseConfig = {
  apiKey: "AIzaSyDSPDmP77lcjdJk8vRGTCPgG84xkEfNUFU",
  authDomain: "hackher-9865b.firebaseapp.com",
  databaseURL: "https://hackher-9865b.firebaseio.com",
  projectId: "hackher-9865b",
  storageBucket: "hackher-9865b.appspot.com",
  messagingSenderId: "1042539511484",
  appId: "1:1042539511484:web:429950a550dbebdf335ab9"
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=> {
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function (error) {
        console.log('error', error);
    });
  }, [firebaseConfig]);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        setLoggedIn(true);
      }else{
        setLoggedIn(false);
      }
    });
  }, [])

  function signUpFunction(e){
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  function logInFunction(e){
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }
  function logoutFunction(){
    firebase
      .auth()
      .signOut()
      .then(function(response){
        setLoggedIn(false);
      })
      .catch(function(error) {
        console.log('error',error);
    });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <BrowserRouter>
        <Route exact path="/">
        { loggedIn ? <Profile/> : <Home/> }
        </Route>
        <Route exact path="/sign-up">
        {loggedIn ?  <Redirect to='/' /> : <Signup signupFunction={signUpFunction}/> }
        </Route>
        <Route exact path="/login">
        {loggedIn ? <Redirect to='/' /> : <Login loginFunction={logInFunction}/> }
        </Route>
        <Route exact path="/profile">
        { loggedIn ?  <Profile/> : <Login loginFunction={logInFunction}/> }
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
