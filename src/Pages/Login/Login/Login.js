
/* eslint-disable no-unused-expressions */
import React, { useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from '../../../images/login.png'


const Login = () => {

    const { signInWithEmail, error,signInWithGoogle, getUserPassword, getUserEmail, user } = useAuth();

    const histoty = useHistory();
    const location = useLocation();
    const rediract = location.state?.from || "/";



    useEffect(() => {
        user?.email ? histoty.push(rediract) : "";
    }, [user, histoty, rediract]);

    return (
       <div className="container">
            <div className="row px-3"> 
        <h1 className="text-center fw-bold py-5">PLEASE SIGN IN FROM HERE</h1>
           <div className="col-lg-6 col-md-4 col-12">
               <img src={img} alt="" />
           </div>
           <div className="col-lg-6 col-md-8 col-12 border rounded p-4">
           
            <form className=" col-lg-12 col-md-6 p-3 m-auto border rounded">
                
                {error && <span className="text-danger">{error}</span>}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={getUserEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={getUserPassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button onClick={signInWithEmail} type="submit" className="btn mt-3 btn-primary">Sign in</button>
                <p>Dont Have an account? <Link to="/signup"> Sign Up </Link> </p>
                
            </form>
            <button onClick={signInWithGoogle} className="btn btn-warning mt-3">Google Sign In</button>
           </div>
        </div>
       </div>
    );
};

export default Login;