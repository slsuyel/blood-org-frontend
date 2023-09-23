import React from "react";
import Slider from "react-slick";
import img from '../assets/images/orgs/org-demo.jpg'
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
                    <div key={index} className="px-4  text-center" >
                        <div className="card" style={{ height: '250px' }}>
                            <img src={img} alt="" width={'150px%'}
                                height={'150px'} className="img-bordered-sm  mx-auto my-2" />
                            <h4>সুরাহা ব্লাড ফাউন্ডেশন</h4>
                            <h5 className="fs-6 mb-0 text-secondary">মনোহরদী, নরসিংদী</h5>
                            <a className="my-1 text-decoration-none" href="tel:01761698300">
                                01761698300
                            </a>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
