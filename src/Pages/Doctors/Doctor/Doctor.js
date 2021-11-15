import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const{name, img, degree, speciality }=doctor;
    console.log(name)
    return (
       <div className="col-lg-4 col-md-6 col-12    g-3">
            <div className="border p-3 rounded">
            <img className="w-100 rounded" src={img} alt="" />
            <h5 className="text-danger fw-bold py-3">{name}</h5>
            <p>{degree}</p>
            <h6 className="text-danger">{speciality}</h6>
          <Link to={`/details/${doctor.id}`}>
          <button className="btn-warning px-3 mb-3 py-2 mt-5">More Info</button>
          </Link>
            </div>
        </div>
    );
};

export default Doctor;