import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Cart from './components/CartScreen/Cart'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
      </Switch>    
      </Router>
  );
}

export default App;