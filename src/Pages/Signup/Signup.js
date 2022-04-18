import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../../Loading/Loading";



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCpassword] = useState('')
  const [allError, setAllError] = useState('')


  const navigate = useNavigate()

  // 🔐🔐🔐🔐🔐🔏 Signup method 🔐🔐🔐🔐🔐🔏
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitUoading, gitError] = useSignInWithGithub(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);


  if (user || googleUser || gitUser || fbuser) {
    navigate('/login')
  }


  // 📩📩📩📩📩📩 Email, Password 📩📩📩📩📩📩
  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }
  const getCpassword = (e) => {
    setCpassword(e.target.value)
  }

  // 🥂🥂🥂🥂🥂🥂🥂🥂 Signup 🥂🥂🥂🥂🥂🥂🥂🥂
  const signinSubmit = e => {
    e.preventDefault();
    if (password !== cPassword) {
      setAllError('password did not match')
      return;
    }
    else {
      setAllError('')
      createUserWithEmailAndPassword()
    }
  }

  const googleSignup = () => {
    signInWithGoogle(email, password)
  }

  const gitSignup = () => {
    signInWithGithub();
  }

  const fbSignup =() =>{
    signInWithFacebook()
  }

  // 🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟
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
          <p><small className="text-danger">{allError || error?.message || googleError?.message || gitError?.message || fberror?.message}</small></p>
          <button type="submit" className="btn text-white bg-color w-100 ">
            {
              loading ? <Loading></Loading> : 'Signin'
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

        {/* 🤖🤖🤖🤖🤖🤖🤖 Image Icon 🤖🤖🤖🤖🤖🤖🤖 */}
        <p className="text-center mt-4">Or Signup using</p>
        <div className="d-flex justify-content-center pb-4">
          <img
            onClick={googleSignup}
            className="mx-3"
            width={30}
            src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png"
            alt=""
          />
          <img
          onClick={fbSignup}
            className="mx-3"
            width={30}
            src="https://cdn.iconscout.com/icon/free/png-256/facebook-circle-1868984-1583148.png"
            alt=""
          />
          <img
            onClick={gitSignup}
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
