import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ header, details, data }) {
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
            <h2 className="my-1 text-center">{header}</h2>
            <p className="mb-5 my-2 text-center">{details}</p>
            <Slider {...settings}>
                {data?.map((d, index) => (
                    <div key={index} className="px-4 s text-center">
                        <img src={d.image} alt="" width={'120px'} height={'120px'} className="img-bordered-sm img-circle mx-auto mb-2" />
                        <h5 className="fs-6 mb-0 text-secondary">{d.name}</h5>
                        <h4>{d.role}</h4>
                        <p className="mb-0 text-secondary">{d.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
