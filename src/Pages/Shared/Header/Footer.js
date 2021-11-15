import React from 'react';

import {NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Footer'

const Footer = () => {
    return (
        <footer className="container-fluid pt-5 footer-container bg-dark mt-5 text-light">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                
                    <h3>About Us</h3>
                    <p>Vision: To be the emerging markets largest integrated healthcare network.
                        <br />
                        Mission: To build a legacy of accessible, high quality, safe private healthcare for low and middle-income patients in emerging markets.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    
                    <img width="100"
                        height="80" src={logo} alt="" />
                        <p>
                        <small>© Copyright 2021 | All rights reserved. Health Care Hospital Dhaka.</small>
                        </p>
                   
                   
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                    <h3> Useful Link</h3>
                    <NavLink to="/home">Home</NavLink>
                    <br />
                    <NavLink to="/booking">Booking</NavLink>
                    <br />
                    <NavLink to="/#">Facebook</NavLink>
                    <br />
                    <NavLink to="/#">Youtube</NavLink>
                </div>
            </div>




        </footer>
    );
};

export default Footer;