//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Pages/Home';
import Info from './component/Pages/Info';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Info} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
