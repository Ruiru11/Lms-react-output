import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/common/navbar";
import About from "../components/common/about";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/about" component={About} /> 
        </div>
      </Router>
    );
  }
}

export default App;
