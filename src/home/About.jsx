import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="zoom-in-down" className='row mx-auto w-100 my-5' id='about'>
            <h3 className='text-center my-5'>About us</h3>
            <div className='col-md-6'>
                <img className='img-fluid rounded-5' src="https://img.freepik.com/premium-photo/side-view-diverse-group-business-people-working-with-computers-modern-office-focus-senior-man-it-studio_236854-29762.jpg" alt="" />

            </div>
            <div className='col-md-6'>
                <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto perspiciatis neque molestiae accusamus nihil minima consequuntur aliquid debitis. Veniam soluta laboriosam est nobis facere ipsam qui possimus? Sit, laborum.  <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto perspiciatis neque molestiae accusamus nihil minima consequuntur aliquid debitis. Veniam soluta laboriosam est nobis facere ipsam qui possimus? Sit, laborum.  <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto perspiciatis neque molestiae accusamus nihil minima consequuntur aliquid debitis. Veniam soluta laboriosam est nobis facere ipsam qui possimus? Sit, laborum.  <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum architecto perspiciatis neque molestiae accusamus nihil minima consequuntur aliquid debitis. Veniam soluta laboriosam est nobis facere</p>

                <Button
                    style={{ backgroundColor: '#08118E' }}
                    className='fw-bold float-end  p-2 px-4 rounded-2 text-white'
                >Learn More</Button>
            </div>
        </div>
    );
};

export default About;