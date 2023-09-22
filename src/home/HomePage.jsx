import React from 'react';
import Hero from './Hero';
import Others from './Others';
import About from './About';
import Team from '../pages/carousel/Team';
import Location from '../pages/carousel/Location';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Team />
            <About />
            <Others />
            {/* <Location /> */}
        </div>
    );
};

export default HomePage;