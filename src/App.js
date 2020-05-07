import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>     
      {this.props.children} 
      <Home title='This is a the main section' bodyText='Hello World!'>
      </Home>
       </div>
    );
  }
}

export default App;