import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container ">
      <Link className='d-flex align-items-center text-decoration-none text-info' to='/'>
        <img width={60} src={logo} alt="" />
        <span className='ms-2 fs-1 fw-bold '>FIT BOSS</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className='nave-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className='nave-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2"
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li className='nave-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className='nave-item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className='nave-item'>
            {
              user? <NavLink onClick={logout}
              className={({ isActive }) =>
                isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2"
              }
              to="/login"
            >
              Sign out
            </NavLink>:<NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-info fs-4 ms-2" : "nav-link fs-4 ms-2"
              }
              to="/login"
            >
              Login
            </NavLink>
            }
          </li>
        </ul>

      </div>
    </div>
  </nav>
    );
};

export default Navbar;