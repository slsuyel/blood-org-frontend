import React from 'react';

const DonarProfile = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                    <div className="mt-3">
                                        <h4>ডোনার নামঃ Sakib Hasan</h4>
                                        <h5>রক্তের গ্রুপঃ <span className='fw-bold ms-1 text-danger'> B+</span> </h5>
                                        <div>
                                            <h6 className='fs-5'> সর্বশেষ রক্তদানের তারিখ: <span className='fw-bold ms-1 text-danger'>2-April-2023</span></h6>


                                        </div>

                                        <p className="text-muted font-size-sm mb-0">ঠিকানাঃ দেবীগঞ্জ পঞ্চগড়</p>

                                        <p className="fs-4 my-2 text-gray text-muted">সুরাহা ব্লাড ফাউন্ডেশন</p>

                                        <div>
                                            <a href="tel:01751331330" className='bg-danger me-2 px-2 text-decoration-none'>
                                                <i className="fa fa-phone me-2" />
                                                কল করুন
                                            </a>
                                            <a href="tel:01751331330" className='bg-danger me-2 px-2 text-decoration-none'>
                                                <i className="fa-message fa-solid me-1"></i>
                                                মেসেজ করুন
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Name :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Sakib Hasan
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Gender :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Sakib Hasan
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Sakib Hasan
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Sakib Hasan
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Whatsapp :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <a className='fs-5 text-decoration-none' href='https://wa.me/01722597565'>  <i className="fa-brands fa-whatsapp"></i> এখানে ক্লিক করুন</a>


                                    </div>
                                </div>
                                <hr />






                            </div>
                        </div>
                    </div></div></div></div>

    );
};

export default DonarProfile;