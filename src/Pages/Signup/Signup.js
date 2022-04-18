import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCpassword] = useState('')
  const [allError, setAllError] = useState('')


  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate('/login')
  }


  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }
  const getCpassword = (e) => {
    setCpassword(e.target.value)
  }


  const signinSubmit = e => {
    e.preventDefault();
    if (password !== cPassword) {
      setAllError('password did not match')
      return;
    }
    else {
      createUserWithEmailAndPassword(email, password)
    }
  }


  return (
    <div>
      <div className="col-10 col-md-4 p-4 mx-auto my-5 shadow-lg rounded">
        <h3 className="text-center text-info">SIGNUP</h3>
        <form onSubmit={signinSubmit} className="">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={getEmail}
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
              onChange={getPassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={getCpassword}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              required
            />
          </div>
          <p className="text-danger">{allError}</p>
          <p className="text-danger">{
            error ? error.message : ''
          }</p>
          <button type="submit" className="btn text-white bg-color w-100 ">
            {
              loading ? 'Loding...' : 'Signin'
         }
          </button>
        </form>
        <p className="my-2">
          Already have an account ? <Link
            className="
        text-danger text-decoration-none"
            to="/login"
          >
            Login
          </Link>
        </p>
        <p className="text-center mt-4">Or Signup using</p>
        <div className="d-flex justify-content-center pb-4">
          <img
            className="mx-3"
            width={30}
            src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png"
            alt=""
          />
          <img
            className="mx-3"
            width={30}
            src="https://cdn.iconscout.com/icon/free/png-256/facebook-circle-1868984-1583148.png"
            alt=""
          />
          <img
            className="mx-3"
            width={30}
            src="https://cdn.iconscout.com/icon/free/png-256/github-2296067-1912026.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
