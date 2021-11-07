import React, {   Component  } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


import Login from '././page/auth/login/Login';
import Page from '././page/page/Page';
import Entrie from '././page/entries/Entrie';
import SiderDemo from '././shared/sider/Sider';


class App extends React.Component {
  render() {
  return (
   <>
   <Router>
     <Routes>
       <Route  path="/login" element={<Login/>}/>
       <Route  path="/page" element={<Page/>}/>
       <Route  path="/entrie" element={<Entrie/>}/>
       <Route  path="/sider" element={<SiderDemo/>}/>
     </Routes>
   </Router>
   </>
  )
}}

export default App;
