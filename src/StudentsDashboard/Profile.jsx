import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './StudentsDashboard.css'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';
const Profile = () => {
    const [value, onChange] = useState(new Date());
    const { studentLogOut } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(value);
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
                                        <h4> নামঃ Sakib Hasan</h4>
                                        <h5>রক্তের গ্রুপঃ <span className='fw-bold ms-1 text-danger'> B+</span> </h5>

                                        <div>
                                            <h6 className='fs-5'> সর্বশেষ রক্তদানের তারিখ: <span className='fw-bold ms-1 text-danger'>2-April-2023</span></h6>

                                            <p className="text-muted font-size-sm mb-0">ঠিকানাঃ দেবীগঞ্জ পঞ্চগড়</p>
                                            <h5>স্থানীয় সংগঠনঃ <Link className='text-decoration-none text-purple'>   সুরাহা ব্লাড ফাউন্ডেশন</Link> </h5>
                                        </div>

                                        <div>
                                            <button onClick={handleShow} className='date-update mb-2 py-1'><i className="fa-regular fa-clock"></i> রক্তদানের তারিখ আপডেট করুনঃ</button>
                                        </div>


                                        <div className="text-center my-2">
                                            <button onClick={studentLogOut} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
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

                                        01722597565

                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Note :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">

                                        01722597565

                                    </div>
                                </div>
                                <hr />


                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info " target="__blank" href="">Edit info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>

            <div className='w-100 mx-auto'>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> সর্বশেষ <span className='text-danger'>রক্তদানের</span> তারিখ আপডেট করুনঃ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='align-items-center d-flex justify-content-around '>

                        <div className='border border-danger'> <DatePicker onChange={onChange} value={value} /></div>
                        <div className='border border-dark px-1 text-danger'>
                            <span className='text-danger'>রক্তদানের</span> জন্যে লাল শুভেচ্ছা
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>

    );
};

export default Profile;