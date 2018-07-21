import React, { Component } from 'react';
import logo from './logo.svg';
import ThemeRoot from './themes/neymar/ThemeRoot';
import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch } from "react-router-dom";
import Login from './themes/neymar/Login';


const LoginPage = () => (
  <Login/>
)

const Home = () => (
  <h1>Home</h1>
)

const AdminRoot = () => (
  <ThemeRoot/>
)

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loggedIn:false
    }

  }



  render() {

    var {loggedIn} = this.state;

    return (
      <Router>
        {
          loggedIn ? (
            <ThemeRoot/>
          ):(
            <LoginPage/>
          )
        }
      </Router>
    );
  }
}

export default App;
