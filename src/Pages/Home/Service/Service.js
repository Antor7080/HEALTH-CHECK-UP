import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const{serviceTitle, img }=service;
     return (

       <div className="col-lg-4 col-md-6  col-12 p-3  ">
            <div className="p-3 pb-5 border bg-light rounded ">
            <div>
            <img className="w-100 rounded" src={img} alt="" />
            </div>
            <h5 className="text-danger fw-bold py-3">{serviceTitle}</h5>
          <Link to={`/booking/${service.id}`}>
          <button className="btn-warning rounded py-2 px-3">Book Now</button>
          </Link>
            </div>
        </div> 


    
    );
};

export default Service;