import { Link } from "react-router-dom";
import React, {Component} from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import { Formik, Form } from 'formik';
import {TextField, EField, MField} from "./SideDrawer/Field";
import * as Yup from 'yup';

class Contact extends Component {
    render(){
        const validate = Yup.object({
            firstName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            message: Yup.string()
              .min(10, 'Must be 10 characters or more')
              .required('Required'),
          })
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
                        <p>I2IT, Pune, Maharastra, India</p>
                    </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                    <div className="info-box">
                        <i className="bx bx-share-alt"></i>
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                        <a href="https://twitter.com/Swarnim02673274" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="https://www.facebook.com/swarnim.rai.3760/" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="https://www.instagram.com/swarnimstrange/" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="https://github.com/swarnimstrange/" className="google-plus"><i className="icofont-github"></i></a>
                        <a href="https://www.linkedin.com/in/swarnim-rai-1013a11a4/" className="linkedin"><i className="icofont-linkedin"></i></a>
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
                        <h3>Dm me on Insta</h3>
                        <p>swarnimstrange</p>
                    </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    >
                {formik => (
                    <div>
                    <Form className="php-email-form mt-4">
                    <div className="form-row">
                    <TextField placeholder="First Name" name="firstName" type="text" />
                    <TextField placeholder="Last Name" name="lastName" type="text" />
                    </div>
                    <div className="form-group">
                    <EField placeholder="Your Email" name="email" type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                    <MField placeholder="Message" name="message" rows="5" />
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </Form>
                    </div>
                )}
                </Formik>

                </div>
            </div>
            </div>
            </div>

        </div>
        );
    }
}

export default Contact;