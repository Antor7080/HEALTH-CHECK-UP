import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDoctors from '../../hooks/useDoctors';
import './DoctorDetails.css'

const DoctorDetails = () => {

    const { id } = useParams();
    const [doctors] = useDoctors();
    const [singleDoctor, setSingleDoctor] = useState();

    useEffect(() => {
        const singleDoctorDetails = doctors.find((s) => s?.id === id);
        setSingleDoctor(singleDoctorDetails);

    }, [doctors]);


    return (

        <div className="container">
            <h2 className="pt-5 pb-3">About {singleDoctor?.name}</h2>
            <div className="row border border-danger rounded">
                <div className="col-lg-6 col-md-6  pb-3 col-12">
                    <img className="w-50 py-3   rounded" src={singleDoctor?.img} alt="" />
                    <h4>{singleDoctor?.name}</h4>
                </div>

                <div className="col-lg-6 col-md-6 pt-5 col-12">
                    <h5>Address: {singleDoctor?.address}</h5>
                    <h6>Contact Number: {singleDoctor?.number}</h6>
                    <h6>Visiting Hour: {singleDoctor?.time}</h6>
                    <h6>{singleDoctor?.degree}</h6>
                    <h6>{singleDoctor?.speciality}</h6>
                </div>
            </div>
            <div className="w-50  pt-5 mx-auto">
                <p>{singleDoctor?.about}</p>

            </div>
        </div>
    );
};

export default DoctorDetails;