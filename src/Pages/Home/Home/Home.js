import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='main'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;