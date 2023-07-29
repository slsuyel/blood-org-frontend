import React from 'react';
import Hero from './Hero';
import Partner from './Partner';
import MySlider from '../utilities/MySlider';
import Others from './Others';
import About from './About';
import Team from '../pages/carousel/Team';
import Feedback from '../pages/carousel/Feedback';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Partner />
            <Others />
            <Team />
            <About />
            <Feedback />
        </div>
    );
};

export default HomePage;