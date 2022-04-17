import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='top-banner'>
            <div className=' banner-text'>
                <h1 className='text-white display-4 fw-bold'>KEEP YOUR BODY</h1>
                <h1 className='text-info display-4 fw-bold '>FIT & STRONG</h1>
                <p className='text-info h3'>With FIT BOSS</p>
                <Link className='btn px-5 text-white bg-color' to='/'><span className='join'>Join Now</span> <i class="fa-solid fa-angles-right"></i></Link>
            </div>


        </div>
    );
};

export default Banner;