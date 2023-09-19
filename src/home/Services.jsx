import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const data = [1, 2, 3, 4, 5, 7, 8, 9, 10];

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="zoom-in-down" className="container-fluid my-5 py-2">
            <h2 className='mt-4 text-center'>সকল <span className='text-danger'>রক্তদাতার</span> তালিকাঃ</h2>
            <div className='row my-5'>

                {
                    data.map((index) => <div key={index} className="col-lg-4 col-md-6 mb-5 ">

                        <div className='mx-3 mb-5 llllllll'>
                            <div className="bg-danger-subtle shadow text-center">
                                <div className="group"> B+ </div>

                                <Link to={`/donar/${index}`} className=' text-decoration-none '>
                                    <div className="single-content-details">
                                        <ul className='list-unstyled'>
                                            <li className='bg-body mb-2'>
                                                <div className='fs-2 text-decoration-none text-warning-emphasis'><i className="fa-solid fa-user"></i> Ashikur Rahman</div>
                                            </li>
                                            <li><i className="fa-solid fa-location-dot me-2"></i>ঠিকানাঃ তেতুঁলিয়া, পঞ্চগড়</li>
                                            <li> জেলাঃ পঞ্চগড় </li>
                                            <li>
                                                <a className="text-decoration-none" href="tel:01751331330">যোগাযোগঃ 01751331330</a>
                                            </li>
                                            <li>&nbsp;</li>
                                            <li className="bg-white fs-4 mb-2 text-danger">সর্বশেষ রক্তদান</li>

                                            <div className='align-items-center d-flex gap-3 justify-content-center'>
                                                <i className="text-blood fa-regular fa-calendar-check fs-2"></i>

                                                <div>
                                                    <li>10-March-2018</li>
                                                    <li>2014 দিন আগে...</li>
                                                </div>
                                            </div>

                                        </ul>
                                    </div>
                                </Link>
                                <div className="bg-danger py-1">
                                    <a href="tel:01751331330" className='text-decoration-none'>
                                        <i className="fa fa-phone me-2" />
                                        কল করুন
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    )
                }


            </div>
        </div>

    );
};

export default Services;