import React from "react";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
import img from '../../../images/login.png'

const Signup = () => {
    const { userName, userEmail, signInWithGoogle, userPassword, createUserWithEmail, error } = useAuth();


    return (
       <div className="container ">
            <div className="row px-3">
             <h1 className="py-5 fw-bold">PLEASE SIGNUP FROM HERE</h1>
             <div className="col-lg-6 col-md-6 col-12">
               <img src={img} alt="" />
           </div>
           <div className="col-lg-6 col-md-6 col-12 border rounded p-4">
           <form className=" col-lg-12 col-md-6 p-3 m-auto border rounded">
               
                {error && <span className="text-danger">{error}</span>}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input onChange={userName} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={userEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={userPassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                
                <button onClick={createUserWithEmail} type="submit" className="btn btn-primary mt-3 mb-3">Sign Up</button>
                <p>Already Account? <Link to="/login">Login </Link> </p>
                
            </form>
            <button onClick={signInWithGoogle} className="btn btn-warning mt-3">Google Sign In</button>
           </div>
            
        </div>
       </div>
    );
};

export default Signup;