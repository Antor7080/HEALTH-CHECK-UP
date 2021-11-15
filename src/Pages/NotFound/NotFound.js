import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../images/404.png'
import './notFound.css'

const NotFound = () => {
    return (
        <div className="error-page">
            <img src={NotFoundImage} alt="" />
            <button className="btn-warning"><Nav.Link as={Link} to="/home"> Back Home</Nav.Link></button>
        </div>
    );
};

export default NotFound;