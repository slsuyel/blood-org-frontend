import React, { useEffect } from 'react';
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
const AboutUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="zoom-in-down" className="container my-5 py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src={img1} className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                                <div className="col-12">
                                
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src={img2} className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src={img3} className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                    <div className="section-title ml-lg-5">
                        <h5 className="text-custom font-weight-normal mb-0">আমাদের</h5>
                        <h4 className="mb-2 text-danger">
                            লক্ষ ও উদ্দেশ্য
                        </h4>
                        <p className="text-muted mb-0">♻ আমরা কোন একক সংগঠনের জন্য নয়, বরং সকল ব্যক্তির, সংগঠনের সুবিধার জন্যই। যাঁরা রক্তদেন তাঁদেরকে এবং রক্তদান সম্পর্কিত বিভিন্ন সংগঠনগুলোকে এক প্লাটফর্মে নিয়ে এসে রক্ত দেওয়া-পাওয়ার কাজটা সহজ করাই এর উদ্দেশ্য। আপনিও রক্তদাতা হলে website এ রেজিস্ট্রেশন করুন।
                            <br />
                            আপনার পরিচিত ব্লাড ডোনারদের এই ওয়েবসাইট সম্পর্কে জানান। মনে রাখবেন, সহজে রক্তদাতা পাওয়ার পূর্বশর্ত স্বেচ্ছায় রক্তদান। যতো বেশি জেনুইন রক্তদাতা রেজিস্ট্রেশন করবেন, রক্ত পাওয়া ততো সহজ হবে
                        </p>
                        <div className="row">

                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="fa fa-user h4 mb-0 text-danger" />
                                    <h6 className="ml-3 mb-0"><a href="signup" className="text-danger text-decoration-none">রেজিস্ট্রেশন করুন</a></h6>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="text-danger fs-4 fa-solid fa-users-rays"></i>
                                    <h6 className="ml-3 mb-0"><a href="#" className="text-danger text-decoration-none">সংগঠন যোগ করুন</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;