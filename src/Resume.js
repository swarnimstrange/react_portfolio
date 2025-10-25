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
                        <h3 className="resume-title">Education</h3>
                        <p></p>
                        <div className="item">
                            <h4>Bachelor Of Engineering </h4>
                            <h5>2019 - 2023</h5>
                            <p><em style={{fontSize: "18px"}}>International Institute of Technology, Pune, INDIA</em></p>
                            <p>Grade -: 9.2 / 10</p>
                            <p>Demonstrated excellence in academics and overall performance. Actively engaged in college clubs and events while maintaining strong academic results.
                             Recognized as Student of the Year for holistic achievement and leadership, and awarded First Runner-Up in the Intercollege Badminton Tournament.</p>
                             <p>Relevant Coursework - Data Structures & Algorithms, Object Oriented Programming, Machine Learning, Computer Networks, Distributed Systems, Blockchain Fundamentals.</p>

                        </div>
                        <div className="item">
                            <h4>Secondary and Senior Secondary</h4>
                            <h5>2015 - 2018</h5>
                            <p><em style={{fontSize: "18px"}}>Devasthaly Vidyapeeth</em></p>
                            <p>Grade -: X - 10 Cgpa , XII - 88%</p>
                            <p>Completed secondary and senior secondary education under the CBSE curriculum, consistently ranking among the top students in my batch. Demonstrated all round performance throughout my schooling.</p>
                        </div>
                        </div>
                        <div className="col">
                        <h3 className="resume-title">Professional Experience</h3>
                        <p></p>
                        <div className="item">
                            <h4>Software Developer</h4>
                            <h5>2023 - Present</h5>
                            <p><em style={{fontSize: "18px"}}>Oracle Financial Services, Pune, Maharashtra </em></p>
                            <p>
                            <ul>
                            <li>Designed and optimized enhancements across core modules of ORMB product suite, used by 75+ enterprise clients.</li>
                            <li>Delivered full-stack solutions using Java, J2EE, OUAF, Groovy, Spring, JavaScript, HTML/OADF, SOAP & RESTful web services, Hibernate, JDBC and PL/SQL.</li>
                            <li>Collaborated in Agile sprints using JIRA and ensured smooth CI/CD deployment using Jenkins.</li>
                            <li>Collaborated with QA and DevOps to achieve 100% test pass rate pre-deployment and ensure smooth production rollout.</li>
                            <li>Mentored 3+ junior developers and contributed to design reviews, maintaining Oracle’s standards for scalable and secure codebases.</li>
                            </ul>
                            </p>
                        </div>
                        <div className="item">
                            <h4>Software Development Intern</h4>
                            <h5>Dec,2021 - May,2022</h5>
                            <p><em style={{fontSize: "18px"}}>MOHAN Foundation, Chennai, Tamil Nadu</em></p>
                            <p>
                            <ul>
                            <li>Designed and implemented a chatbot on the MOHAN Foundation website using Dialogflow by creating and training custom intents and entities to handle diverse user queries.</li>
                            <li>Developed a custom UI for the chatbot using Dialogflow Messenger, ensuring seamless integration with the company website and an intuitive user experience.</li>
                            <li>Configured conversation flows and response handling to improve accuracy and provide dynamic interactions</li>
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