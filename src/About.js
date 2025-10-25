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
                    <img src='../img/met.jpg' className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Software Developer</h3>
                    <p className="font-italic">
                        Hey! I am Swarnim, Software Engineer with experience in developing and optimizing enterprise-scale systems at Oracle, used by 75+ global clients.
                        Specialized in building scalable, secure backend and full-stack applications that improve enterprise efficiency and performance.  
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 26 January 2001</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Gender:</strong> Male</li>
                            <li><i className="icofont-rounded-right"></i> <strong>LinkedIn:</strong> linkedin.com/in/swarnim-rai</li>
                            <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Pune, India</li>
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 24</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelors Of Engineering</li>
                            <li><i className="icofont-rounded-right"></i> <strong>Email ID:</strong> swarnimstrange@gmail.com</li>
                            <li><i className="icofont-rounded-right"></i> <strong>GitHub:</strong> github.com/swarnimstrange</li>
                        </ul>
                        </div>
                    </div>
                    <p></p>
                    <p>
                       Just a highly motivated and versatile individual who loves solving problems through code.
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
                            <span className="skill"> Java Development <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> J2EE <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> Sprint Boot <i className="val">98%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"  style={{width: "98%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> Microservices <i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"  style={{width: "70%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> SOAP & RESTful Web Services <i className="val">95%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"  style={{width: "95%"}}></div>
                            </div>
                        </div>

                        </div>

                        <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill"> Python <i className="val">95%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> Flask <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> PL-SQL <i className="val">95%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"  style={{width: "95%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> React <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"  style={{width: "80%"}}></div>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill"> JavaScript <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"  style={{width: "75%"}}></div>
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
                            <h3>Java Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
                            <h3>Enterprise Application</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <i className="ri-paint-brush-line" style={{color: "#e80368"}}></i>
                            <h3>Python Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box">
                            <i className="ri-calendar-todo-line" style={{color: "#e361ff"}}></i>
                            <h3>Data Structures & Algorithms</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
                            <h3>SQL Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
                            <h3>Solution Designs</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
                            <h3>Machine Learning</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
                            <h3>Financial Services</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
                            <h3> API Development </h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-disc-line" style={{color: "#b20969"}}></i>
                            <h3>UI Development</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box">
                            <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
                            <h3>Computer Networks</h3>
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