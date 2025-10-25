import React,{Component} from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import './Hed.css';

class Project extends Component{
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
                <li className="active"><Link to="/portfolio">Projects</Link></li>
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
                    <div id="portfolio" className="portfolio">
                    <div className="bg-tex">
                    <div className="container">

                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>My Projects</p>
                    </div>

                    <p></p>

                    <div className="row portfolio-container">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap" id="port">
                            <img src="../img/haha.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>NailThatInterview</h4>
                            <p>Interview Preparation Website with AI</p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/NailThatInterview" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/pet.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Pet Adoption App</h4>
                            <p> Made with Flutter</p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/pet" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/social.jpeg" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Social Media API</h4>
                            <p> Made with Node and Express </p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/nodeSocial" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="../img/demon.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info" >
                            <h4>Comics App</h4>
                            <p> Made with Flutter and Firebase</p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/Flutter_Apps/tree/master/Comics_App" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="../img/wikipedia.jpeg" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Encyclopedia </h4>
                            <p>Using Django and .md files</p>
                            <div className="portfolio-links">
                            <a href="https://github.com/swarnimstrange/encyclopedia-django" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/bid.jpeg" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Ecommerce Bidding Website</h4>
                            <p> Made with Django</p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/Ecommerce-Bidding" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="../img/Employee_Portal.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Spring Boot Employee Website</h4>
                            <p>CRUD Application using SQL, Hibernate and Spring Boot</p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/Farm-Cyield" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="../img/crop.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Farm-Cyield Website</h4>
                            <p>Crop Yield Prediction and Recommendation</p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/Farm-Cyield" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/profile.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>React & Flask Profile Cards</h4>
                            <p>Backend in Python & Frontend in React </p>
                            <div className="portfolio-links">
                            <a href="https://github.com/swarnimstrange/react-flask-profile" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/data_science.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Data Science and Macine Learning Projects</h4>
                            <p> Made for The Sparks Foundation</p>
                            <div className="portfolio-links">
                                <a href="hhttps://github.com/swarnimstrange/TSF" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/virat.png" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Virat Kohli T20 score Predictor</h4>
                            <p>ML and Flask </p>
                            <div className="portfolio-links">
                                <a href="https://github.com/swarnimstrange/virat20" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="../img/space.jpeg" className="img-fluid" alt="" width="345" height="210"/>
                            <div className="portfolio-info">
                            <h4>Space Exploration and Learning Website for Children</h4>
                            <p>Website making Blogger </p>
                            <div className="portfolio-links">
                                <a href="https://c4.wallpaperflare.com/wallpaper/407/412/20/beautiful-space-stars-planets-cosmos-wallpaper-preview.jpg" target="_blank" rel="noreferrer noopener"><i className="bx bx-plus"></i></a>
                                <a href="https://iris-space-team.blogspot.com/2020/09/blog-post.html" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
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

export default Project;
