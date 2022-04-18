import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";



const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitUoading, gitError] = useSignInWithGithub(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user || googleUser || gitUser || fbuser) {
    navigate(from, { replace: true });
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }

  const loginSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
  const googleSignup = () => {
    signInWithGoogle(email, password)
  }

  const gitSignup = () => {
    signInWithGithub();
  }

  const fbSignup = () => {
    signInWithFacebook()
  }

  return (
    <div>
      <div className="col-10 col-md-4 p-4 mx-auto my-5 shadow-lg rounded">
        <h3 className="text-center text-info">LOGIN</h3>
        <form onSubmit={loginSubmit} className="">
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
          <p><small className="text-danger">{error?.message || googleError?.message || gitError?.message || fberror?.message}</small></p>
          <button type="submit" className="btn text-white bg-color w-100 ">
            {
              loading ? <Loading></Loading> : 'Login'
            }
          </button>
        </form>
        <p className="my-2">Don't have an account ? <Link className="
        text-danger text-decoration-none" to='/signup'>Signup</Link></p>
        <p className="text-center mt-4">Or Login using</p>
        <div className="d-flex justify-content-center pb-4">
          <img onClick={googleSignup} className="mx-3" width={30} src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png" alt="" />
          <img onClick={fbSignup} className="mx-3" width={30} src="https://cdn.iconscout.com/icon/free/png-256/facebook-circle-1868984-1583148.png" alt="" />
          <img onClick={gitSignup} className="mx-3" width={30} src="https://cdn.iconscout.com/icon/free/png-256/github-2296067-1912026.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
