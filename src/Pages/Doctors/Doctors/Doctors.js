import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors]= useDoctors();
    console.log(doctors)

    return (
         <div className="container">
            <h1 className="mt-5">SOME SPECIALIST DOCTORS</h1>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}>

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;