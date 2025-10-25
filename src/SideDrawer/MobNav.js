import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css';
class MobNav extends Component {
    render(){
      return(
        <div>
        <div className="heaader-top">
         <div className="a"><h1><Link to="/">Swarnim Rai</Link></h1></div>
         <div className="b">
             </div>
         </div>
         <div className="bg-mob">
             <ul>
             <li><h2><Link to="/">Home</Link></h2></li>
             <li><h2><Link to="/about">About</Link></h2></li>
             <li><h2><Link to="/resume">Resume</Link></h2></li>
             <li><h2><Link to="/portfolio">Projects</Link></h2></li>
             <li><h2><Link to="/contact">Contact</Link></h2></li>
             </ul>
             </div>
         </div>
    );
    }
  }
  
  export default MobNav;