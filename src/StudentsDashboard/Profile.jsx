// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
// import './StudentsDashboard.css';
// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-date-picker';
// import { Modal, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import useDonor from '../hooks/useDonor';
// import Loader from '../utilities/Loader';
// import { callApi } from '../utilities/functions';
// import avatar from '../assets/images/avatar.svg';

// const Profile = () => {
//     const navigate = useNavigate();

//     const id = localStorage.getItem('donorId');
//     const { donorData, isLoading } = useDonor(id);
//     const [show, setShow] = useState(false);
//     const [formData, setFormData] = useState({
//         user_id: '',
//         date: new Date().toISOString().substr(0, 10), // Initialize with current date in YYYY-MM-DD format
//         blood_taker_name: '',
//         blood_taker_phone: '',
//         address: '',
//         hospital: '',
//     });

//     useEffect(() => {
//         if (!isLoading && donorData) {
//             setFormData({
//                 ...formData,
//                 user_id: donorData.id,
//             });
//         }
//     }, [isLoading, donorData]);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async () => {
//         if (
//             !formData.date ||
//             !formData.blood_taker_name ||
//             !formData.blood_taker_phone ||
//             !formData.address ||
//             !formData.hospital
//         ) {
//             alert('Please fill in all the required fields.');
//             return;
//         }
//         const response = await callApi('POST', `/api/users/update/donate/date`, formData, {
//             'Content-Type': 'application/json',
//         });
//         console.log(response);
//         // handleClose();
//     };

//     if (isLoading) {
//         return <Loader />;
//     }

//     const studentLogOut = () => {
//         localStorage.removeItem('token');
//         navigate('/');
//         window.location.reload();
//     };


//     return (
//         <div className="container mt-5 pt-5">
//             <div className="main-body">
//                 <div className="row gutters-sm">
//                     <div className="col-md-4 mb-3">
//                         <div className="card">
//                             <div className="card-body">
//                                 <div className="d-flex flex-column align-items-center text-center">
//                                     <img src={avatar} alt="Admin" className="rounded-circle" width={150} loading="lazy" />

//                                     <div className="mt-3">
//                                         <h4>ডোনার নামঃ {donorData.name}</h4>
//                                         <h5>রক্তের গ্রুপঃ <span className='fw-bold ms-1 text-danger'>{donorData.blood_group}</span> </h5>

//                                         <div>
//                                             <h6 className='fs-5'> সর্বশেষ রক্তদানের তারিখ: <span className='fw-bold ms-1 text-danger'>{donorData.last_donate_date}</span></h6>

//                                             <p className="text-muted font-size-sm mb-0">ঠিকানাঃ {donorData.union}, {donorData.thana}, {donorData.district}</p>
//                                             <h5>স্থানীয় সংগঠনঃ <Link className='text-decoration-none text-purple'> {donorData?.organization?.name} </Link> </h5>
//                                         </div>

//                                         <div>
//                                             <button onClick={handleShow} className='date-update mb-2 py-1'><i className="fa-regular fa-clock"></i> রক্তদানের তারিখ আপডেট করুনঃ</button>
//                                         </div>


//                                         <div className="text-center my-2">
//                                             <button onClick={studentLogOut} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                     <div className="col-md-8">
//                         <div className="card mb-3">
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <h6 className="mb-0"> Name :</h6>
//                                     </div>
//                                     <div className="col-sm-9 text-secondary">
//                                         {donorData.name}
//                                     </div>
//                                 </div>
//                                 <hr />

//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <h6 className="mb-0"> Gender :	</h6>
//                                     </div>
//                                     <div className="col-sm-9 text-secondary">
//                                         {donorData.gander}
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <h6 className="mb-0">Email :</h6>
//                                     </div>
//                                     <div className="col-sm-9 text-secondary">
//                                         {donorData.email}
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <h6 className="mb-0">Phone :</h6>
//                                     </div>
//                                     <div className="col-sm-9 text-secondary">
//                                         {donorData.mobile}
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <h6 className="mb-0">Gardiant phone :</h6>
//                                     </div>
//                                     <div className="col-sm-9 text-secondary">
//                                         {donorData.gardiant_phone}
//                                     </div>
//                                 </div>

//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <h6 className="mb-0">Whatsapp :</h6>
//                                     </div>
//                                     <div className="col-sm-9 text-secondary">
//                                         <a className='fs-5 text-decoration-none' href={`https://wa.me/+88${donorData.whatsapp_number}`}>  <i className="fa-brands fa-whatsapp"></i> এখানে ক্লিক করুন</a>

//                                     </div>
//                                 </div>
//                                 <hr />


//                                 <div className="row">
//                                     <div className="col-sm-12">
//                                         <a className="btn btn-info " target="__blank" href="">Edit info</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div></div>

//             <div className='w-100 mx-auto'>
//                 <Modal show={show} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>সর্বশেষ <span className='text-danger'>রক্তদানের</span> তারিখ আপডেট করুনঃ</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <div className=''>
//                             <form className='mx-auto px-2'>
//                                 <div className='my-1'>
//                                     <label className='w-50' htmlFor='date'>
//                                         রক্তদানের তারিখঃ<span className='text-danger'>*</span>
//                                     </label>
//                                     <DatePicker
//                                         className='border'
//                                         name='date'
//                                         dateFormat='dd/MM/yyyy'
//                                         value={formData.date}
//                                         onChange={(date) => setFormData({ ...formData, date })}
//                                     />
//                                 </div>

//                                 <div className='my-1'>
//                                     <label className='w-50' htmlFor='blood_taker_name'>
//                                         রক্ত গ্রহীতার নামঃ<span className='text-danger'>*</span>
//                                     </label>
//                                     <input
//                                         type='text'
//                                         name='blood_taker_name'
//                                         value={formData.blood_taker_name}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className='my-1'>
//                                     <label className='w-50' htmlFor='blood_taker_phone'>
//                                         মোবাইলঃ<span className='text-danger'>*</span>
//                                     </label>
//                                     <input
//                                         type='text'
//                                         name='blood_taker_phone'
//                                         value={formData.blood_taker_phone}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className='my-1'>
//                                     <label className='w-50' htmlFor='address'>
//                                         ঠিকানাঃ<span className='text-danger'>*</span>
//                                     </label>
//                                     <input
//                                         type='text'
//                                         name='address'
//                                         value={formData.address}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                                 <div className='my-1'>
//                                     <label className='w-50' htmlFor='hospital'>
//                                         হাসপাতাল-ক্লিনিক<span className='text-danger'>*</span>
//                                     </label>
//                                     <input
//                                         type='text'
//                                         name='hospital'
//                                         value={formData.hospital}
//                                         onChange={handleInputChange}
//                                     />
//                                 </div>
//                             </form>
//                         </div>

//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant='secondary' onClick={handleClose}>
//                             Close
//                         </Button>
//                         <Button variant='primary' onClick={handleSubmit}>
//                             Save Changes
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         </div>

//     );
// };

// export default Profile;

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import './StudentsDashboard.css';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useDonor from '../hooks/useDonor';
import Loader from '../utilities/Loader';
import { callApi } from '../utilities/functions';
import avatar from '../assets/images/avatar.svg';
import { toast } from 'react-toastify';
import useTitle from '../hooks/useTitle';

const Profile = () => {
    useTitle('রক্তদাতার প্রোফাইল')



    const navigate = useNavigate();
    const id = localStorage.getItem('donorId');
    const { donorData, isLoading } = useDonor(id);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_id: '',
        date: new Date().toISOString().substr(0, 10),
        blood_taker_name: '',
        blood_taker_phone: '',
        address: '',
        hospital: '',
    });

    useEffect(() => {
        if (!isLoading && donorData) {
            setFormData({
                ...formData,
                user_id: donorData.id,
            });
        }
    }, [isLoading, donorData]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (
            !formData.date ||
            !formData.blood_taker_name ||
            !formData.blood_taker_phone ||
            !formData.address ||
            !formData.hospital
        ) {
            alert('Please fill in all the required fields.');
            return;
        }
        setLoading(true)
        const response = await callApi('POST', `/api/users/update/donate/date`, formData, {
            'Content-Type': 'application/json',
        });

        if (response.message) {
            toast.success('Donation successfully', {
                position: toast.POSITION.TOP_RIGHT
            });
            handleClose();
            window.location.reload();
        }
        else {
            alert("Something Wents wrong")
            setLoading(false)
        }
        setLoading(false)
    };

    if (isLoading) {
        return <Loader />;
    }

    const studentLogOut = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={avatar} alt="Admin" className="rounded-circle" width={150} loading="lazy" />

                                    <div className="mt-3">
                                        <h4>ডোনার নামঃ {donorData.name}</h4>
                                        <h5>রক্তের গ্রুপঃ <span className='fw-bold ms-1 text-danger'>{donorData.blood_group}</span> </h5>
                                        {
                                            console.log(donorData.blood_group)
                                        }
                                        <div>
                                            <h6 className='fs-5'> সর্বশেষ রক্তদানের তারিখ: <span className='fw-bold ms-1 text-danger'>{donorData.last_donate_date.substr(0, 10)}</span></h6>

                                            <p className="text-muted font-size-sm mb-0">ঠিকানাঃ {donorData.union}, {donorData.thana}, {donorData.district}</p>



                                            {
                                                donorData?.organization?.name ? <>  <h5>স্থানীয় সংগঠনঃ <Link className='text-decoration-none text-purple'> {donorData?.organization?.name} </Link> </h5> </> : ''
                                            }

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
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {donorData.email}
                                    </div>
                                </div>
                                <hr />
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
                                        <h6 className="mb-0">Gardiant phone :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {donorData.gardiant_phone}
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Whatsapp :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        <a className='fs-5 text-decoration-none' href={`https://wa.me/+88${donorData.whatsapp_number}`}>  <i className="fa-brands fa-whatsapp"></i> এখানে ক্লিক করুন</a>

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
                        <Modal.Title>সর্বশেষ <span className='text-danger'>রক্তদানের</span> তারিখ আপডেট করুনঃ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className=''>
                            <form className='mx-auto px-2'>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='date'>
                                        রক্তদানের তারিখঃ<span className='text-danger'>*</span>
                                    </label>
                                    <DatePicker
                                        className='border'
                                        name='date'
                                        dateFormat='yyyy-MM-dd'
                                        value={formData.date}
                                        onChange={(date) => setFormData({ ...formData, date: date.toISOString().substr(0, 10) })}
                                    />
                                </div>

                                <div className='my-1'>
                                    <label className='w-50' htmlFor='blood_taker_name'>
                                        রক্ত গ্রহীতার নামঃ<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='blood_taker_name'
                                        value={formData.blood_taker_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='blood_taker_phone'>
                                        মোবাইলঃ<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='blood_taker_phone'
                                        value={formData.blood_taker_phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='address'>
                                        ঠিকানাঃ<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='hospital'>
                                        হাসপাতাল-ক্লিনিক<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='hospital'
                                        value={formData.hospital}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </form>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant='primary' onClick={handleSubmit}
                            disabled={loading}

                        >
                            {` ${loading ? 'Loading' : 'Save Changes'} `}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Profile;
