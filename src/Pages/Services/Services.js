import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        id: 1,
        img: 'https://img.freepik.com/free-photo/couple-gym_1303-5515.jpg?t=st=1650195226~exp=1650195826~hmac=4bee31a147ccedefa8bde0356b67dfaa707c0d1993b1fcbabaa5aa0e13d95758&w=740',
        title: 'WEIGHT LOSS PROGRAM',
        dc: "I don't just show you how to do an exercise; I educate you in the areas of strength training, cardiovascular endurance, and proper nutrition."
    },
    {
        id: 2,
        img: 'https://img.freepik.com/free-photo/woman-doing-workout-gym-with-trainer_1303-25221.jpg?t=st=1650195226~exp=1650195826~hmac=c754f917994bc2ff6a820aa3a2061a72bb7663c1f98d07fd7cf3cf81d61a52c9&w=740',
        title: 'HEAVY WORKOUT PROGRAM',
        dc: 'Understanding the way your body and its processes work and how to influence it is the most important step to your dream body'
    },
    {
        id: 3,
        img: 'https://img.freepik.com/free-photo/woman-gym-with-coach_1303-5545.jpg?w=740',
        title: 'PREMIUM WORKOUT PROGRAM',
        dc: 'A professionally developed personal training program that was created specifically for you will take you as far as you want to go.'
    }

]

const Services = () => {
    return (
        <div className='my-5 container'>
            <h1 className='text-center text-info fw-bold mb-4'>Services</h1>

            <div className="row row-cols-1 row-cols-md-3 g-5    ">
                {
                    servicesData.map(data => <Service key={data.id} cardInfo={data} ></Service>)
                }
            </div>
        </div>
    );
};
const Service = ({ cardInfo }) => {
    const { img, title, dc } = cardInfo
    return (
        <div className="col ">
            <div className="card h-100 shadow-lg">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body pb-0">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{dc}</p>
                </div>
                <div class="card-footer border-0 mx-auto pb-3">
                    <Link className='btn bg-color px-4 text-white' to='/checkout'>Check out </Link>
                </div>

            </div>
        </div>
    )
}


export default Services;