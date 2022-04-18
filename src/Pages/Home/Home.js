import React from 'react';
import Banner from '../../Banner/Banner';
import Footer from '../Footer/Footer';
import Review from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;