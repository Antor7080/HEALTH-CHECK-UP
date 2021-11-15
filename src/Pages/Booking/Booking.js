import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Booking.css'


const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const [data, setData] = useState({});


  // get all service
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);


  // find a single service 
  useEffect(() => {
    const singleService = service.find((s) => s?.id === id);
    setData(singleService);

  }, [service]);

  return (

    <div className="container">
      <h2 className="pt-5">MORE ABOUT: {data?.serviceTitle}</h2>
      <img className="py-3 rounded" src={data?.img} alt="" />
      <p >{data?.details}</p>
    </div>

  );
};

export default Booking;