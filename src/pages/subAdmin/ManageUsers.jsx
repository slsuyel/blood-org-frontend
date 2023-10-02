import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Table } from 'reactstrap';
import { callApi } from '../../utilities/functions';
import Paginate from '../../components/Paginate';
import Loader from './../../utilities/Loader';
import { Modal, Button } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { toast } from 'react-toastify';

const ManageUsers = () => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState('');


    const [formData, setFormData] = useState({
        user_id: '',
        date: new Date().toISOString().substring(0, 10),
        blood_taker_name: '',
        blood_taker_phone: '',
        address: '',
        hospital: '',
    });

    useEffect(() => {
        if (userId) {
            setFormData({
                ...formData,
                user_id: userId,
            });
        }
    }, [userId]);


    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [per_page, setPer_page] = useState();
    const [totalitems, setTotalitems] = useState();
    const location = useLocation();
    const [teachers, setTeachers] = useState([]);

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

        const response = await callApi('POST', `/api/organization/update/donate/date`, formData, {
            'Content-Type': 'application/json',
        });

        if (response.message) {
            handleClose();
            toast.success('Donation successfully', {
                position: toast.POSITION.TOP_RIGHT
            });

        }
        else {
            alert("Something Wents wrong")

        }

    };

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1;
            const data = await callApi("post", `/api/organization/doners?perpage=10&page=${page}`);
            setTeachers(data.data);
            setTotalPages(data.links);
            setPer_page(data.per_page);
            setTotalitems(data.total);
            if (page == 1) {
                setPageNo(1);
                setLoading(false);
            } else {
                setPageNo((page - 1) * data.per_page + 1);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const donors = teachers;

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th className='text-center'>#</th>
                            <th className='text-center'>Name & Address </th>
                            <th className='text-center'>Group</th>
                            <th className='text-center'>Last Donate</th>
                            <th className='text-center'>Phone</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            donors.map((d, index) => <>  <tr key={d.id}>
                                <td className='text-center'>{index + pageNo}</td>
                                <td className='text-center'>
                                    <h6 className='mb-0 mb-1 text-nowrap text-success-emphasis'> {d.name}</h6>

                                    <span className='fst-italic small text-nowrap text-sm'><i className="fa-solid fa-location-dot"></i> {d.union},{d.thana},{d.district} </span>
                                </td>
                                <td className='fs-2 text-center text-danger'>{d.blood_group}</td>
                                <td className='text-center '>{d.last_donate_date}</td>

                                <td className='text-center'>
                                    <a href="tel:01751331330" className="text-decoration-none">{d.mobile}  </a>  </td>

                                <td >
                                    <div className='text-nowrap d-flex justify-content-around gap-2'>
                                        <Link className='btn btn-primary text-decoration-none' to={`/donar/${d.id}`}>View</Link>

                                        <button
                                            onClick={() => {
                                                handleShow();
                                                setUserId(d.id);
                                            }}
                                            className='btn btn-info'
                                        >
                                            Update Last Donate Date
                                        </button>



                                    </div>
                                </td>
                            </tr></>)
                        }
                    </tbody>


                </Table>
                <Paginate
                    Totalpageprops={totalPages}
                    per_page={per_page}
                    totalitems={totalitems}
                    route='/dashboard/manage'
                />
            </div>


            <div className='w-100 mx-auto'>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>সর্বশেষ <span className='text-danger'>রক্তদানের</span> তারিখ আপডেট করুনঃ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className=''>
                            <form className='mx-auto px-2'>
                                <div className=''>
                                    <label className='w-50' htmlFor='date'>রক্তদানের তারিখঃ</label>
                                    <ReactDatePicker
                                        selected={formData.date ? new Date(formData.date) : null}
                                        onChange={(date) => {
                                            const formattedDate = date ? date.toISOString().substring(0, 10) : '';
                                            setFormData({ ...formData, date: formattedDate });
                                        }}
                                        dateFormat="yyyy-MM-dd"
                                    />
                                </div>

                                <div className='my-1'>
                                    <label className='w-50' htmlFor='blood_taker_name'>রক্ত গ্রহীতার নামঃ</label>
                                    <input

                                        type='text'
                                        name='blood_taker_name'
                                        value={formData.blood_taker_name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='blood_taker_phone'>মোবাইলঃ</label>
                                    <input

                                        type='text'
                                        name='blood_taker_phone'
                                        value={formData.blood_taker_phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='address'>ঠিকানাঃ</label>
                                    <input

                                        type='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='my-1'>
                                    <label className='w-50' htmlFor='hospital'> হাসপাতাল-ক্লিনিক </label>
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
                        >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>

    );
};

export default ManageUsers;