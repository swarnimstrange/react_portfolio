import { Link } from "react-router-dom";
import React, {Component} from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

class Resume extends Component {
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
                    <li className="active"><Link to="/resume">Resume</Link></li>
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
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                    <div className="bg-tex">
                    <div className="container">

                    <div className="title">
                        <h2>Resume</h2>
                        <p>This is My Resume</p>
                    </div>

                    <div className="row">
                        <div className="col">
                        <h3 className="resume-title">Summary</h3>
                        <div className="item">
                            <h4>Objective</h4>
                            <p><em style={{fontSize: "20px"}}>With a great enthusiasm in whatever I do, I am eager to grow and further improve my technical skills and put into practice my knowledge and experience to achieve my future goals.</em></p>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="item">
                            <h4>Bachelor Of Engineering </h4>
                            <h5>2019 - 2023</h5>
                            <p><em style={{fontSize: "18px"}}>International Institute of Technology, Pune, INDIA</em></p>
                            <p>Currently I am in my Third Year of college and my main stream of Engineering is "Information Technology"</p>
                        </div>
                        <div className="item">
                            <h4>Secondary and Senior Secondary</h4>
                            <h5>2015 - 2018</h5>
                            <p><em style={{fontSize: "18px"}}>Devasthaly Vidyapeeth</em></p>
                            <p>I have completed my Secondry and Senior Secondry Education from this school, that is situated in my Home District.</p>
                        </div>
                        </div>
                        <div className="col">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="item">
                            <h4>Developer Intern</h4>
                            <h5>2021 - Present</h5>
                            <p><em style={{fontSize: "18px"}}>Mohan Foundation, Chennai, INDIA </em></p>
                            <p>
                            <ul>
                            <li>Doing Ambassador work related to Organ Donation for Organisation</li>
                            <li>We'll be making an App using Flutter Framework for the organisation </li>
                            <li>We'll be making a ChatBot for the official website of Mohan Foundation</li>
                            </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h4>ML Intern</h4>
                            <h5>Aug,2021 - Sep,2021</h5>
                            <p><em style={{fontSize: "18px"}}>Elite Techno Groups, Banglore, INDIA</em></p>
                            <p>
                            <ul>
                            <li>Developed numerous Projects</li>
                            <li>Build Inventry Management,Brest Cancer Prediction and Cars Manufacturing Analysis</li>
                            <li>Attended Python Training Workshop</li>
                            <li>Increased my Knowledge for Resume Making,GitHub,Kaggle etc.</li>
                            </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h4>Data Science and Analytics Intern</h4>
                            <h5>July,2021 - Aug,2021</h5>
                            <p><em style={{fontSize: "18px"}}>Sparks Foundation, INDIA</em></p>
                            <p>
                            <ul>
                            <li>Learned how to grow my connections and improve my profile on LinkedIn</li>
                            <li>Covered all the basics of ML including Supervised,Unsupervised and Computer Vision Learning</li>
                            </ul>
                            </p>
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

export default Resume;