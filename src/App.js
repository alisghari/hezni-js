import React from "react";
import { Container } from 'react-bootstrap';
import Signup from './components/Signup'
import  AuthProvider from "./contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import LogIn from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"

function App() {
  return ( 
   
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
         <AuthProvider>
           <Switch>
             <PrivateRoute exact path="/" component={Dashboard}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/login" component={LogIn}/>
             <Route path ="/forgot-password" component={ForgotPassword}/>
           </Switch>
         </AuthProvider>
   
      </Router>

    
  </div>
  </Container> 
 
    )
}

export default App;
