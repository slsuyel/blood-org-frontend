import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import useTitle from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import Loader from '../utilities/Loader';
const AboutUs = () => {
    useTitle('About Us')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 150);
        return () => clearTimeout(timer);
    }, []);
    if (isLoading) {
        return <Loader />
    }

    return (
        <div  className="container my-5 py-5">
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
                        <p className="text-muted mb-0">♻

                            রক্ত কৃত্রিমভাবে তৈরী করা যায় না। মুমূর্ষু রোগীর রক্তের প্রয়োজনে অন্য একজন সুস্থ মানুষকেই এগিয়ে আসতে হয়। যথাসময়ে পর্যাপ্ত পরিমান রক্ত সংগৃহীত না হবার মুল কারন হল, মানুষের মাঝে রক্ত দানের সম্পর্কে এখনো রয়েছে অনেক ভুল ধারনা এবং ভয়। এই ভুল ধারনাগুলো দূর করে রক্তদানের সঠিক তথ্য, উপকারিতাগুলো তুলে ধরে তাদের সচেতন করতে হবে।
                            <br />
                            <br />


                            <i className="fa-solid fa-handshake-angle"></i> আমরা কোন একক সংগঠনের জন্য নয়, বরং সকল ব্যক্তির, সংগঠনের সুবিধার জন্যই। যাঁরা রক্তদেন তাঁদেরকে এবং রক্তদান সম্পর্কিত বিভিন্ন সংগঠনগুলোকে এক প্লাটফর্মে নিয়ে এসে রক্ত দেওয়া-পাওয়ার কাজটা সহজ করাই এর উদ্দেশ্য। আপনিও রক্তদাতা হলে website এ <Link to={'/signup'}>রেজিস্ট্রেশন</Link> করুন।
                            <br />
                            আপনার পরিচিত ব্লাড ডোনারদের এই ওয়েবসাইট সম্পর্কে জানান। মনে রাখবেন, সহজে রক্তদাতা পাওয়ার পূর্বশর্ত স্বেচ্ছায় রক্তদান। যতো বেশি জেনুইন রক্তদাতা <Link to={'/signup'}>রেজিস্ট্রেশন</Link> করবেন, রক্ত পাওয়া ততো সহজ হবে

                            <br />
                            <br />
                            <i className="fa-solid fa-hand-holding-medical"></i>  ১৬ কোটি মানুষের এই জনবহুল বাংলাদেশে প্রতি বছরে প্রয়োজনীয় ৯ লাখ ব্যাগ রক্ত সংগ্রহ করা কঠিন কিছু নয়, শুধু প্রয়োজন মানুষের মাঝে সচেতনতা তৈরি করা। রক্তদানের উপকারিতা, যোগ্যতা এবং ভুল ধারনাগুলো মানুষকে বুঝিয়ে সচেতন করতে হবে। শুধুমাত্র সচেতনতা সৃষ্টির মাধ্যমেই বাংলাদেশের রক্তের সমস্যার সমধান সম্ভব। যে যার অবস্থান থেকে এগিয়ে আসুন। নিজের পরিবার, আত্মীয়স্বজন, বন্ধুবান্ধব, প্রতিবেশী, পরিচিত মানুষের রক্তের গ্রুপ জেনে রাখুন, <Link to={'/signup'}>রেজিস্ট্রেশন</Link>  করে রাখুন। হয়তো একদিন আপনার প্রিয় মানুষের রক্তের প্রয়োজনে আপনিই হতে পারবেন সবচেয়ে বড় রিসোর্স।

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