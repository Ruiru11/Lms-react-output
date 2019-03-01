import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/common/navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import FlagExampleTable from "./components/Flags";




class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/flags' component={FlagExampleTable} />
          </div>
        </Router>
    )
  }
}

export default App;