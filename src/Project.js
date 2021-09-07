import React,{Component} from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

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
                <li><Link to="/hobbies">Hobbies</Link></li>
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

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*">All Projects</li>
                        </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="https://www.dccomics.com/sites/default/files/mustRead_DCC_5_v2_5f6b8b49bfd6a9.60761869.jpg" className="img-fluid" alt="" width="280" height="210"/>
                            <div className="portfolio-info">
                            <h4>Comics App</h4>
                            <p>Flutter and Firebase App Development</p>
                            <div className="portfolio-links">
                                <a href="https://www.dccomics.com/sites/default/files/mustRead_DCC_5_v2_5f6b8b49bfd6a9.60761869.jpg" target="_blank" rel="noreferrer noopener"><i className="bx bx-plus"></i></a>
                                <a href="https://github.com/swarnimstrange/Flutter_Apps/tree/master/Comics_App" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg" className="img-fluid" alt="" width="280" height="210"/>
                            <div className="portfolio-info">
                            <h4>ChatBot for petshop</h4>
                            <p>ML and AI </p>
                            <div className="portfolio-links">
                                <a href="https://miro.medium.com/max/800/0*oz2e-hQtsHOWzoB4." target="_blank" rel="noreferrer noopener"><i className="bx bx-plus"></i></a>
                                <a href="https://console.dialogflow.com/api-client/demo/embedded/a7cedbd3-2a25-4aeb-b90f-5e096392b176" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="https://dw9to29mmj727.cloudfront.net/properties/2016/1880-SeriesThumbnailsManga_DemonSlayer_400x320.jpg" className="img-fluid" alt="" width="280" height="210"/>
                            <div className="portfolio-info">
                            <h4>Recommendation Systems</h4>
                            <p>ML recommendation of Mangas and Movies</p>
                            <div className="portfolio-links">
                            <a href="https://dw9to29mmj727.cloudfront.net/properties/2016/1880-SeriesThumbnailsManga_DemonSlayer_400x320.jpg" target="_blank" rel="noreferrer noopener"><i className="bx bx-plus"></i></a>
                            <a href="https://github.com/swarnimstrange/Recommendation_Systems" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="https://5.imimg.com/data5/PI/FD/NK/SELLER-5866466/images-500x500.jpg" className="img-fluid" alt="" width="280" height="210"/>
                            <div className="portfolio-info">
                            <h4>Mask Detection</h4>
                            <p>Computer Vision </p>
                            <div className="portfolio-links">
                            <a href="https://5.imimg.com/data5/PI/FD/NK/SELLER-5866466/images-500x500.jpg" target="_blank" rel="noreferrer noopener"><i className="bx bx-plus"></i></a>
                                <a href="https://github.com/swarnimstrange/TSF/tree/main/Mask_Detection" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="https://english.cdn.zeenews.com/sites/default/files/2016/04/29/483345-virat-kohli-back-shot.jpg" className="img-fluid" alt="" width="280" height="210"/>
                            <div className="portfolio-info">
                            <h4>Virat Kohli T20 score Predictor</h4>
                            <p>ML and Flask </p>
                            <div className="portfolio-links">
                            <a href="https://english.cdn.zeenews.com/sites/default/files/2016/04/29/483345-virat-kohli-back-shot.jpg" target="_blank" rel="noreferrer noopener"><i className="bx bx-plus"></i></a>
                                <a href="https://github.com/swarnimstrange/virat20" target="_blank" rel="noreferrer noopener"><i className="bx bx-link"></i></a>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="https://asc-csa.gc.ca/images/a-propos/retombees-de-l-espace-au-quotidien/defaut-main-terre-id-16729-og.jpg" className="img-fluid" alt="" width="280" height="210"/>
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
