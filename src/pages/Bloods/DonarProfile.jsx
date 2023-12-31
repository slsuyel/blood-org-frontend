import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
import useDonor from '../../hooks/useDonor';
import Loader from '../../utilities/Loader';
import useTitle from '../../hooks/useTitle';

const DonarProfile = () => {
    useTitle('রক্তদাতার প্রোফাইল')


    const { id } = useParams()
    const { donorData, isLoading } = useDonor(id)

    if (isLoading) {
        return <Loader />
    }


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
                                        <h4>ডোনার নামঃ {donorData.name}</h4>
                                        <h5>রক্তের গ্রুপঃ <span className='fw-bold ms-1 text-danger'>{donorData.blood_group}</span> </h5>



                                        <div>
                                            <h6 className='fs-5'> সর্বশেষ রক্তদানের তারিখ: <span className='fw-bold ms-1 text-danger'>{donorData.last_donate_date}</span></h6>

                                            <p className="text-muted font-size-sm mb-0">ঠিকানাঃ {donorData.union}, {donorData.thana}, {donorData.district}</p>

                                            {/* <h5>স্থানীয় সংগঠনঃ <Link className='text-decoration-none text-purple'> {donorData?.organization?.name} </Link> </h5> */}


                                            {
                                                donorData?.organization?.name ? <>  <h5>স্থানীয় সংগঠনঃ <Link to={`/org/details/${donorData?.organization?.id}`} className='text-decoration-none text-purple'> {donorData?.organization?.name} </Link> </h5> </> : ''
                                            }

                                        </div>


                                        <div>
                                            <a href={`tel:${donorData.mobile}`} className='bg-danger me-2 px-2 text-decoration-none'>
                                                <i className="fa fa-phone me-2" />
                                                কল করুন
                                            </a>


                                            <a href={`sms:${donorData.mobile}`} className='bg-danger me-2 px-2 text-decoration-none'>
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
                                        {donorData.name}
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Gender :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {donorData.gander}
                                    </div>
                                </div>
                                <hr />
                               {/*  <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {donorData.email}
                                    </div>
                                </div>
                                <hr /> */}
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {donorData.mobile}
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Whatsapp :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <a className='fs-5 text-decoration-none' href={`https://wa.me/+88${donorData?.whatsapp_number}`}>  <i className="fa-brands fa-whatsapp"></i> এখানে ক্লিক করুন</a>


                                    </div>
                                </div>
                                <hr />






                            </div>
                        </div>

                        <div>
                            <h5>রক্তদানের হিস্টোরি</h5>

                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th className='text-nowrap text-center' scope="col">#</th>
                                            <th className='text-nowrap text-center' scope="col">তারিখঃ</th>
                                            <th className='text-nowrap text-center' scope="col"> গ্রহীতার নামঃ</th>
                                            <th className='text-nowrap text-center' scope="col">ঠিকানাঃ</th>
                                            <th className='text-nowrap text-center' scope="col">হাসপাতাল</th>
                                            <th className='text-nowrap text-center' scope="col">মোবাইলঃ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {donorData.donation_logs.map((h, index) => (
                                            <tr key={index}>
                                                <th className='text-nowrap text-center' scope="row">{index + 1}</th>
                                                <td className='text-nowrap text-center'>{h.date}</td>
                                                <td className='text-nowrap text-center'>{h.blood_taker_name}</td>
                                                <td className='text-nowrap text-center'>{h.hospital}</td>
                                                <td className='text-nowrap text-center'>{h.address}</td>
                                                <td className='text-nowrap text-center'>{(() => {
                                                    const phoneNumber = h.blood_taker_phone;
                                                    const masked = phoneNumber.substring(0, 3) + '******' + phoneNumber.substring(9);
                                                    return masked;
                                                })()}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>


                        </div>




                    </div></div></div></div>

    );
};

export default DonarProfile;