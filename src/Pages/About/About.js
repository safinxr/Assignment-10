import React from 'react';
import img from '../../images/me.jpg'

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-primary fw-bold text-center my-4'>About me</h1>
            <div className='bg-color rounded '>
                <div className='row'>
                    <div className='col-12 col-md-4 '>
                        <img className='w-100 ' src={img} alt="" />
                    </div>
                    <div className='col-12 col-md-8 p-4'>
                        <h1 className='fw-bold text-white text-center pt-4'>SaFin Khan</h1>
                        <h3 className='fw-bold  text-center'>Web developer</h3>
                        <h3 className='text-white mt-5'>
                            hi, my name is Safin Khan , im from Manikganj. I am an
                            frontend web developer. I am currently learning react js , after that im gona learn node js and mongo db for backend . My goal is to become a full stack web developer within two month.
                            
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;