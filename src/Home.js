import React, {Component} from 'react';
import Nav from "./PageWrapper";
import './SideDrawer/BackDrop.css'
import { Link } from "react-router-dom";
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

class Home extends Component {
    render(){
      return(
             <div>
               <div className="togle" style={{paddingTop: "20px", paddingLeft: "15px"}}>
               <Link to="/mobnav"><DrawerToggleButton /></Link>
               </div>
            <header id="header" className="header-tops">
          <div className="container">
      
            <h1><Link to="index.html">Swarnim Rai</Link></h1>
            <Link to="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link>
            <h2>I'm a passionate <span>Developer</span> from India</h2>
            <Nav />
            <div className="social-links">
              <a href="https://twitter.com/Swarnim02673274" className="twitter"><i className="icofont-twitter"></i></a>
              <a href="https://www.facebook.com/swarnim.rai.3760/" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="https://www.instagram.com/swarnimstrange/" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="https://github.com/swarnimstrange/" className="google-plus"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/swarnim-rai-1013a11a4/" className="linkedin"><i className="icofont-linkedin"></i></a>
            </div>
      
          </div>
        </header>
            </div>
    );
    }
  }
  
  export default Home;