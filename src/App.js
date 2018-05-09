import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import content from './components/content';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Router>
          <div>
            <NavBar></NavBar>
            <Route path="/test" component={content} />
            <h1><tt>Welcome!!</tt></h1>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
