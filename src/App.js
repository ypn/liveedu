import React, { Component } from 'react';
import logo from './logo.svg';
import ThemeRoot from './themes/neymar/ThemeRoot';
import './App.css';
import { BrowserRouter as Router,Route,Redirect,Switch } from "react-router-dom";
import Login from './themes/neymar/Login';
import FrontendMaster from './themes/neymar/frontend_pages/FrontendMaster';


const LoginPage = () => (
  <Login/>
)

const FrontendMasterPage = () => (
  <FrontendMaster/>
)


const AdminRoot = () => (
  <ThemeRoot/>
)

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loggedIn:true
    }

  }



  render() {

    var {loggedIn} = this.state;

    return (
      <Router>
        {
          loggedIn ? (
            <FrontendMasterPage/>
          ):(
            <LoginPage/>
          )
        }
      </Router>
    );
  }
}

export default App;
