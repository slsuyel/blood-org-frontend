import React, { useEffect, useState } from 'react';
import { callApi, getName } from '../../utilities/functions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import PassChange from './PassChange';

const OrgSetting = () => {
    const [selecteddivisions, setSelectedDivisions] = useState([]);
    const [divisions, setDivisions] = useState([]);

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const [unions, setUnions] = useState([]);
    const [selectedUnion, setSelectedUnion] = useState('');

    const [whatsappNumber, setWhatsappNumber] = useState('');

    const [donarDiv, setDonarDiv] = useState('')
    const [donarDist, setDonarDist] = useState('')

    const [donarUpazila, setDonarUpazila] = useState('')
    const [donarUnions, setDonarUnions] = useState('')

    const [error, setError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const id = localStorage.getItem('orgId')

    useEffect(() => {
        fetch('/divisions.json')
            .then(res => res.json())
            .then(data => setDivisions(data))
            .catch(error => console.error('Error fetching districts data:', error));
    }, []);

    useEffect(() => {
        if (selecteddivisions) {
            fetch('/districts.json')
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    const filteredDistricts = data.filter(d => d.division_id === selecteddivisions);
                    setDistricts(filteredDistricts);
                })
                .catch(error => console.error('Error fetching upazilas data:', error));
        }
    }, [selecteddivisions]);

    // Function to handle WhatsApp number input
    const handleWhatsappNumberChange = (e) => {
        setWhatsappNumber(e.target.value);
    };

    const handleDivChange = event => {
        setSelectedDivisions(event.target.value);

        setDonarDiv(getName(divisions, event.target.value))

        setSelectedDistrict('');

    };

    const handleDistrictChange = event => {
        setSelectedDistrict(event.target.value);
        setDonarDist(getName(districts, event.target.value))
        setSelectedUpazila('');
    };

    const handleUpazilaChange = event => {
        setSelectedUpazila(event.target.value);
        setDonarUpazila(getName(upazilas, event.target.value))
    };

    const handleUnionChange = event => {
        setSelectedUnion(event.target.value);
        setDonarUnions(getName(unions, event.target.value))
    };

    useEffect(() => {
        if (selectedDistrict) {
            fetch('/upazilas.json')
                .then(response => response.json())
                .then(data => {
                    const filteredUpazilas = data.filter(upazila => upazila.district_id === selectedDistrict);
                    setUpazilas(filteredUpazilas);
                })
                .catch(error => console.error('Error fetching upazilas data:', error));
        }
    }, [selectedDistrict]);

    useEffect(() => {
        if (selectedUpazila) {
            fetch('/unions.json')
                .then(response => response.json())
                .then(data => {
                    const filteredUnions = data.filter(union => union.upazilla_id === selectedUpazila);
                    setUnions(filteredUnions);
                })
                .catch(error => console.error('Error fetching unions data:', error));
        }
    }, [selectedUpazila]);



    const handleFormSubmit = async (event) => {
        setIsSubmitting(true)
        event.preventDefault();
        setError('');

        if (event.target.password.value !== event.target.confirm_password.value) {
            setError('Password Not Matched');
            setIsSubmitting(false)
            return;
        }

        if (!termsAccepted) {
            setError('Please accept the terms and conditions.');
            setIsSubmitting(false)
            return;
        }

        const formData = {
            name: event.target.donar_name.value,
            mobile: event.target.donar_phone.value,
            whatsapp_number: whatsappNumber,
            division: donarDiv,
            district: donarDist,
            thana: donarUpazila,
            union: donarUnions,
        };

        try {
            const response = await callApi("PUT", `/api/organizations/${id}`, formData, { 'Content-Type': 'application/json' });

            console.log(response);

            // setIsSubmitting(false);
            // toast.success('Info Update successfully!', {
            //     position: toast.POSITION.TOP_RIGHT
            // });
            // navigate('/')
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error fetching data:', error);
        }

        console.log(formData);
    };



    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <div className='container'>
                    <div>
                        <h2 className='bg-dark-subtle mb-4 my-2 py-1 text-center'> <span className='text-danger'>ব্লাড ব্যাংক </span> তথ্য আপডেট</h2>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className='row my-3'>
                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='donar_name'>নাম<span className='text-danger'> *</span></label>
                                <input

                                    type='text'
                                    className='form-control'
                                    id='donar_name'
                                    name='donar_name'
                                    placeholder=' Name'

                                />
                            </div>

                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='donar_phone'>মোবাইল নাম্বার ( ইংরেজি )  <span className='text-danger'> *</span></label>
                                <input

                                    type='number'
                                    className='form-control'
                                    id='donar_phone'
                                    name='donar_phone'
                                    placeholder='Ex: 017********'

                                />
                            </div>


                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='whatsapp_number'>
                                    Whatsapp Number
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='whatsapp_number'
                                    name='whatsapp_number'
                                    placeholder='eg:01722597565'
                                    value={whatsappNumber}
                                    onChange={handleWhatsappNumberChange}
                                />
                            </div>


                            <div className="form-group col-md-6">
                                <div className="">
                                    <label className='fw-medium' htmlFor='facebook_link'>বিভাগ</label>
                                    <select name="district" onChange={handleDivChange} className="form-select ">
                                        <option defaultValue>বিভাগ সিলেক্ট করুন</option>
                                        {divisions?.map(d => <option key={d.id} value={d.id} > {d.bn_name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group col-md-6">
                                <div className="">
                                    <label className='fw-medium' htmlFor='facebook_link'>জেলা</label>
                                    <select name="district" onChange={handleDistrictChange} className="form-select ">
                                        <option defaultValue>জেলা সিলেক্ট করুন</option>
                                        {districts?.map(d => <option key={d.id} value={d.id}>{d.bn_name}</option>)}
                                    </select>
                                </div>
                            </div>


                            <div className="form-group col-md-6">
                                <div className="">
                                    <label className='fw-medium' htmlFor='upazila'>উপজেলা</label>
                                    <select name="upazila" onChange={handleUpazilaChange} className="form-select">
                                        <option defaultValue>উপজেলা সিলেক্ট করুন</option>
                                        {upazilas.map(u => (
                                            <option key={u.id} value={u.id}>
                                                {u.bn_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group col-md-6">
                                <div className="">
                                    <label className='fw-medium' htmlFor='union'>ইউনিয়ন</label>
                                    <select name="union" onChange={handleUnionChange} className="form-select">
                                        <option defaultValue>ইউনিয়ন সিলেক্ট করুন</option>
                                        {unions.map(union => (
                                            <option key={union.id} value={union.id}>
                                                {union.bn_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </div>

                        <p className='text-danger mb-0'>{error}</p>
                        <div className='text-center'>
                            <button
                                type='submit'
                                className='border-0 btn fw-medium mb-3 px-5 py-2 rounded-0 rounded-2 text-white'
                                style={{ backgroundColor: '#08118E' }}>
                                {isSubmitting ? 'Loading...' : 'Update করুন'}
                            </button>
                        </div>
                    </form >

                    <hr />
                  
                    <PassChange />
                </div >
            </div>

        </div>
    );
};

export default OrgSetting;