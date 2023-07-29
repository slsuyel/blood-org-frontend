import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
const Hero = () => {

    useEffect(() => {
        AOS.init(); 
    }, []);


    return (
        <div data-aos="fade-down" className='row mx-auto align-items-center  w-100 mt-5 pt-5 ' id='top'>
            <div className='col-sm-12 col-md-5 '>
                <h1>Title About Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Convallis in odio eget
                    purus eget eu mauris leo cursus. Lorem ipsum dolor sit amet
                    consectetur. Convallis in odio eget purus eget eu mauris leo
                    cursus.</p>

                <div className='d-flex justify-content-center'>
                    <Link to="/student/signin"
                        style={{ backgroundColor: '#08118E' }}
                        className='fw-bold ms-3 nav-link p-3 px-4 rounded-2 text-white'
                    >Login/Register</Link>
                    <Link href="/student/signin"
                        style={{ color: '#08118E' }}
                        className='fw-bold ms-3 nav-link p-3 px-4 rounded-2 border border-secondary'
                    >Explore</Link>

                </div>
            </div>
            <div className='col-sm-12 col-md-7'>
                <div style={{ height: '500px', marginLeft: '202px', backgroundColor: '#08118E' }} className='d-none-in-sm'>
                    <div className='position-relative'>
                        <img src="https://img.freepik.com/premium-photo/side-view-diverse-group-business-people-working-with-computers-modern-office-focus-senior-man-it-studio_236854-29762.jpg" alt=""
                            style={{ position: 'absolute', top: '60px', left: '-151px' }}
                            width={"550px"}
                            height={"380px"}
                            className="rounded-4 img-fluid"
                        />
                    </div>
                </div>

                <div className='d-none-in-lg my-3'>
                    <img src="https://img.freepik.com/premium-photo/side-view-diverse-group-business-people-working-with-computers-modern-office-focus-senior-man-it-studio_236854-29762.jpg" alt=""
                        className="rounded-4 img-fluid"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;

