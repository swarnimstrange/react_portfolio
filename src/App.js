import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Hobby from './Hobby';
import Project from './Project';
import Contact from './Contact';
import MobNav from './SideDrawer/MobNav';

class App extends Component {
  render(){
    return(
      <Router>

        <Route
        exact={true}
        path="/"
        component={Home}
        />

        <Route
        path="/about"
        component={About}
        />

        <Route
        path="/resume"
        component={Resume}
        />

        <Route
        path="/hobbies"
        component={Hobby}
        />

        <Route
        path="/portfolio"
        component={Project}
        />

        <Route
        path="/contact"
        component={Contact}
        />

        <Route
        path="/mobnav"
        component={MobNav}
        />

      </Router>
      
  );
  }
}

export default App;
