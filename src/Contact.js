import { Link } from "react-router-dom";
import {Component} from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

class Contact extends Component {
    render(){
      return(
        <div>
            <div className="heaader-top">
            <div className="a"><h1><Link to="/">Swarnim Rai</Link></h1></div>
            <div className="b">
            <nav className="nav-menu d-none d-lg-block" style={{paddingLeft: "400px"}}>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/portfolio">Projects</Link></li>
                <li className="active"><Link to="/contact">Contact</Link></li>
                </ul>
                </nav>
                </div>
                <div className="spacer"/>
                <div className="togle" style={{paddingRight: "30px"}}>
               <Link to="/mobnav"><DrawerToggleButton /></Link>
               </div>
            </div>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
            <div className="bg-tex">
            <div id="contact" className="contact">
                <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Contact Me</p>
                </div>

                <div className="row mt-2">

                    <div className="col-md-6 d-flex align-items-stretch">
                    <div className="info-box">
                        <i className="bx bx-map"></i>
                        <h3>My Location</h3>
                        <p>Pune, Maharastra</p>
                    </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                    <div className="info-box">
                        <i className="bx bx-share-alt"></i>
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                        <a href="https://twitter.com/Swarnim02673274" target="_blank" rel="noreferrer noopener" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="https://www.facebook.com/swarnim.rai.3760/" target="_blank" rel="noreferrer noopener" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="https://www.instagram.com/swarnimstrange/" target="_blank" rel="noreferrer noopener" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="https://github.com/swarnimstrange/" target="_blank" rel="noreferrer noopener" className="google-plus"><i className="icofont-github"></i></a>
                        <a href="https://www.linkedin.com/in/swarnim-rai-1013a11a4/" target="_blank" rel="noreferrer noopener" className="linkedin"><i className="icofont-linkedin"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                    <div className="info-box">
                        <i className="bx bx-envelope"></i>
                        <h3>Email Me</h3>
                        <p>swarnimstrange@gmail.com</p>
                    </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                    <div className="info-box">
                        <i className="bx bxl-instagram"></i>
                        <h3>Connect with me on LinkedIn</h3>
                        <p>linkedin.com/in/swarnim-rai</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </div>
            </div>

        </div>
        );
    }
}

export default Contact;
