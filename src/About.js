import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './App.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

class About extends Component {
  render(){
    return(
        <div>
           <div className="heaader-top">
            <div className="a"><h1><Link to="/">Swarnim Rai</Link></h1></div>
            <div className="b">
            <nav className="nav-menu d-none d-lg-block" style={{paddingLeft: "400px"}}>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li className="active"><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/hobbies">Hobbies</Link></li>
                <li><Link to="/portfolio">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                </nav>
                </div>
                <div className="spacer"/>
                <div className="togle" style={{paddingRight: "30px"}}>
               <Link to="/mobnav"><DrawerToggleButton /></Link>
               </div>
            </div>



        <div className="bg-text">
            


                <div className="about-me container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Get to know about me</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                    <img src='https://i.ibb.co/LY0FZNX/hey3.jpg' className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>ML &amp; AI Enthusiast</h3>
                    <p className="font-italic">
                        Hey! I am Swarnim, Currently pursuing my Engineering from Pune,India. I am in my third year of Engg College "International Institue of Information Technology".
                        Basically I am ML-AI enthusiast who is also exploring different fields of Computer Science like Web and App Development,Data-Science and Problem Solving etc.  
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 26 January 2001</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Blogs:</strong> swarnimstrange.hashnode.dev</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Insta:</strong> swarnimstrange</li>
                            <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Pune, INDIA</li>
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 20</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Pursuing Graduation</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Email ID:</strong> swarnimstrange@gmail.com</li>
                            <li><i className="icofont-rounded-right"></i> <strong>GitHub:</strong> swarnimstrange</li>
                        </ul>
                        </div>
                    </div>
                    <p>
                        I have been in several groups and committies and been in leading position several time. Currently I am a member of ACM and PR Committie of my college. 
                        I am eager to grow and further improve my technical skills and put into practice my knowledge and experience to achieve my future goals.
                    </p>
                    </div>
                </div>

                </div>

                <div className="skills container" style={{paddingTop: "60px"}}>

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill"> Python <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> Data Science <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"  style={{width: "90%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> C++ and C <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"  style={{width: "75%"}}></div>
                            </div>
                        </div>

                        </div>

                        <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill"> SQL <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"  style={{width: "80%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> React <i className="val">50%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"  style={{width: "50%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> Flutter <i className="val">55%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"  style={{width: "55%"}}></div>
                            </div>
                        </div>

                        </div>

                    </div>
                 </div>
                 <div className="interests container" style={{paddingTop: "60px", paddingBottom: "60px"}}>

                    <div className="section-title">
                        <h2>Interests</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                            <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
                            <h3>Machine Learning</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
                            <h3>Data Science</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
                            <h3>Python Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
                            <h3>Website Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
                            <h3>Data Analysis</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
                            <h3>App Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
                            <h3>Comics</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
                            <h3>Graphic Designing</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
                            <h3> Writing </h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-disc-line" style={{color: "#b20969"}}></i>
                            <h3>Music</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
                            <h3>Social Media</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
                            <h3>Artificial Intelligence</h3>
                        </div>
                        </div>
                    </div>

                    </div>
            </div>

        </div>
        );
    }
}

export default About;