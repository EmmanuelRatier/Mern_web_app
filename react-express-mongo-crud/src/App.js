import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import  Register  from './components/Register' 
import  Login  from './components/Login' 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar  from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
