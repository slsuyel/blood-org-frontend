import React from 'react';
import Hero from './Hero';
import Partner from './Partner';
import MySlider from '../utilities/MySlider';
import Others from './Others';
import About from './About';
import Team from '../pages/carousel/Team';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Partner />
            <Others />
            <Team />
            <About />
        </div>
    );
};

export default HomePage;