import React from 'react';
import Hero from './Hero';
import Partner from './Partner';
import MySlider from '../utilities/MySlider';
import Others from './Others';
import About from './About';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Partner />
            <Others />
            <About />
        </div>
    );
};

export default HomePage;