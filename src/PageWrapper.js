import { Link } from "react-router-dom";
import React, {Component} from 'react';

class Nav extends Component {
  render(){
    return(
      <div>
        
          <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><Link to="#header">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/portfolio">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            
      </div>
  );
  }
}

export default Nav;