import { Link } from "react-router-dom";
import React, {Component} from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

class Hobby extends Component {
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
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                </nav>
                </div>
                <div className="spacer"/>
                <div className="togle">
               <Link to="/mobnav"><DrawerToggleButton /></Link>
               </div>
            </div>
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                <div id="services" className="services">
                <div className="bg-tex">
                <div className="container">
                <div className="section-title">
                    <h2>Hobbies</h2>
                    <p>My Hobbies</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="icon-box">
                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                        <h4 style={{color: "#fff"}}>Sports</h4>
                        <p>I love to play Different Games like Table Tennis, Badminton, Volleyball, Cricket etc.</p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="icon-box">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4 style={{color: "#fff"}}>Writing</h4>
                        <p>I like to write Poems, Stories, articles, novels and draw comics in my free time</p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div className="icon-box">
                        <div className="icon"><i className="bx bx-book"></i></div>
                        <h4 style={{color: "#fff"}}>Webtoon</h4>
                        <p>I love to read Comics and Manhwas from a Digital comics App called "Webtoon"</p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4 style={{color: "#fff"}}>Social Media</h4>
                        <p>I am very Active on social media platforms like Instagram , Linkedin , Twitter , etc.</p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bx bx-slideshow"></i></div>
                        <h4 style={{color: "#fff"}}>Anime and Movies</h4>
                        <p>I am a huge Fan of Japanese Animatied Series basically called "Anime" and I like to see Sci-Fi - Action and Romance movies as well</p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div className="icon-box">
                        <div className="icon"><i className="bx bx-arch"></i></div>
                        <h4 style={{color: "#fff"}}>Blogging</h4>
                        <p>I like Blogging and I have account in Different Blogging websites like Blogger and Hashnode</p>
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

export default Hobby;