import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import img from '../assets/images/news.jpg'
const data = [1, 2, 3, 4, 5, 7, 8, 9, 10];

const Others = () => {
    var settings = {
        // variableWidth :true,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" className='my-5 w-100 mx-auto'>
            <h1 className='text-center pb-3'> সাম্প্রতিক <span className='text-blood '>ব্লগ </span> </h1>

            <div className='mx-auto' style={{ width: '85%' }}>
                <Slider {...settings}>
                    {data?.map((index) => (
                        <div key={index} className="px-4" >
                            <Link className="card text-decoration-none" style={{ height: '320px' }}>
                                <img src={img} alt="" width={'100%'}
                                    height={'150px'} className="img-bordered-sm  mx-auto mb-3" />
                                <h6 className='px-2 mb-0 text-danger'>মনোহরদীর রক্তে প্রাণ বাঁচল বাংলার শিশুর!</h6>
                                <p className='px-2 mb-0'>লিখেছেনঃ সাকিব হাসান</p>

                                <p className='px-2 mb-0 text-secondary'>একেই বোধহয় বলে অসাধ্য সাধন। চন্দ্রকোনার ছোট শিশু সুপ্রীতি পালের ক্ষেত্রে তাই ঘটল। মুম্বাই থেকে নিয়ে আসা রক্তে . . .</p>

                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>


        </div>
    );
};

export default Others;