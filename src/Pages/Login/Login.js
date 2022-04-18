import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="col-10 col-md-4 p-4 mx-auto my-5 shadow-lg rounded">
        <h3 className="text-center text-info">LOGIN</h3>
        <form className="">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" className="btn text-white bg-color w-100 ">
            Login
          </button>
        </form>
        <p className="my-2">Don't have an account ? <Link className="
        text-danger text-decoration-none" to='/signup'>Signup</Link></p>
        <p className="text-center mt-4">Or Login using</p>
        <div className="d-flex justify-content-center pb-4">
           <img className="mx-3" width={30} src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png" alt="" />            
           <img className="mx-3" width={30} src="https://cdn.iconscout.com/icon/free/png-256/facebook-circle-1868984-1583148.png" alt="" />            
           <img className="mx-3" width={30} src="https://cdn.iconscout.com/icon/free/png-256/github-2296067-1912026.png" alt="" />            
        </div>
      </div>
    </div>
  );
};

export default Login;
