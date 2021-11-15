import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import logo from '../../../images/logo.png'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div className="container">
            <h1 className="pt-5 fw-bold text-primary">WELCOME TO HEALTH CHECK</h1>
           <div className="bg-light pt-3 pb-5">
               <h2>Lets check your health</h2>
           <div className="row mt-5 p-3">
                <div className="col-lg-7 col-md-6 col-12">
                    <img Style="width:50%" src={logo} alt="" />
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                    <h3 className="fw-bold">OUR VISION</h3>
                    <h4> To be the emerging markets largest integrated healthcare network.
                        Mission: To build a legacy of accessible, high quality, safe private healthcare for low and middle-income patients in emerging markets.</h4>
                    
                </div>
               
            </div>
            <button className="btn-primary rounded"><Nav.Link as={Link} to="/about"> More About us</Nav.Link></button>
           </div>

            <h2 className="mt-5 fw-bold">OUR SOME SERVICES</h2>
            <div className="row">
                {
                    services.map(service => <Service key={service.id} service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;