import React from "react";
import Slider from "react-slick";
import img from '../assets/images/orgs/org-demo.jpg'
import { Link } from "react-router-dom";
export default function SimpleSlider({ data }) {

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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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

    return (
        <div>
            <h1 className='text-center my-5 py-3'> <span className='text-blood '>সহযোগী </span>
                সংগঠন</h1>
            <Slider {...settings}>
                {data?.map((d, index) => (
                    <Link to={`/org/details/${d.id}`} className="text-decoration-none">
                        <div key={index} className="px-2  text-center" >
                            <div className="card" style={{ height: '280px' }}>
                                <img src={img} alt="" width={'140px'}
                                    height={'150px'} className="  mx-auto my-2" />
                                <h5 className=""><i className="fa-regular fa-handshake"></i> {d.name.slice(0, 20)}...

                                </h5>

                                <h5 className="fs-6 mb-0 text-secondary"><i className="fa-solid fa-location-dot"></i> {d.union}, {d.thana}, {d.district} </h5>
                                <a className="my-1 text-decoration-none" href={`tel:${d.mobile}`}>
                                    <i className="fa-solid fa-phone-volume"></i>   {d.mobile}
                                </a>

                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}
