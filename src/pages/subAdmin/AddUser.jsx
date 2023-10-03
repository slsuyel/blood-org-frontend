import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { callApi, getName } from '../../utilities/functions';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';

const AddUser = () => {
    const orgId = localStorage.getItem('orgId')
    const [selecteddivisions, setSelectedDivisions] = useState([]);
    const [divisions, setDivisions] = useState([]);

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const [unions, setUnions] = useState([]);
    const [selectedUnion, setSelectedUnion] = useState('');

    const [donarOrganization, setDonarOrganization] = useState('');
    const [donarGender, setDonarGender] = useState('পুরুষ');
    const [whatsappNumber, setWhatsappNumber] = useState('');

    const [donarDiv, setDonarDiv] = useState('')
    const [donarDist, setDonarDist] = useState('')

    const [donarUpazila, setDonarUpazila] = useState('')
    const [donarUnions, setDonarUnions] = useState('')

    const [error, setError] = useState('');
    const [date, onChange] = useState(new Date());

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const navigate = useNavigate();


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


    const handleGenderChange = (e) => {
        setDonarGender(e.target.value);
        console.log(e.target.value);
    };

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
        event.preventDefault();
        setIsSubmitting(true)
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
            blood_group: event.target.group.value,
            email: event.target.donar_email.value,
            gender: donarGender,
            whatsapp_number: whatsappNumber,
            division: donarDiv,
            district: donarDist,
            thana: donarUpazila,
            union: donarUnions,
            password: event.target.password.value,
            org: orgId,
        };
        try {
            const response = await callApi("POST", "/api/register", formData, { 'Content-Type': 'application/json' });
            setIsSubmitting(false);
            if (response.token) {
                toast.success('Signup successfully!', {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate('/dashboard')
            }
            else {
                setIsSubmitting(false);
                console.error('Error fetching data:', error);
            }
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
                        <h2 className='bg-dark-subtle mb-4 my-2 py-1 text-center'> <span className='text-danger'>রক্তদাতা </span> রেজিস্ট্রেশন</h2>
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
                            <div className="form-group col-md-6">
                                <label className='fw-medium' htmlFor='donar_email'>রক্তের গ্রুপ <span className='text-danger'> *</span></label>
                                <select name="group" className="form-select">
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>

                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='donar_email'>ইমেইল <span className='text-danger'> *</span></label>
                                <input

                                    type='email'
                                    className='form-control'
                                    id='donar_email'
                                    name='donar_email'
                                    placeholder=' Email'

                                />
                            </div>



                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='donar_gender'>
                                    জেন্ডার <span className='text-danger'> *</span>{' '}

                                </label>
                                <select
                                    name='donar_gender'
                                    className='form-control'
                                    id='donar_gender'
                                    value={donarGender}
                                    onChange={handleGenderChange}
                                >
                                    <option disabled>-Select-</option>
                                    <option>পুরুষ</option>
                                    <option>নারী</option>
                                </select>
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
                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='password'>Password <span className='text-danger'> *</span></label>
                                <input

                                    type='password'
                                    className='form-control'
                                    id='password'
                                    name='password'
                                    placeholder=' Password'
                                />
                            </div>
                            <div className='form-group col-md-6'>
                                <label className='fw-medium' htmlFor='confirm_password'>Confirm Password <span className='text-danger'> *</span></label>
                                <input

                                    type='password'
                                    className='form-control'
                                    id='confirm_password'
                                    name='confirm_password'
                                    placeholder='Confirm password'
                                />
                            </div>
                        </div>
                        <div className='form-check'>
                            <input
                                type='checkbox'
                                className='form-check-input border-danger'
                                id='acceptTerms'
                                checked={termsAccepted}
                                onChange={() => setTermsAccepted(!termsAccepted)}
                            />
                            <label className='form-check-label' htmlFor='acceptTerms'>
                                Accept the <Link className='text-decoration-none' to={'/terms&condition'}>terms & conditions</Link> <span className='text-danger'> *</span>
                            </label>
                        </div>
                        <p className='text-danger'>{error}</p>
                        <div className='text-center'>
                            <button
                                type='submit'
                                disabled={isSubmitting || !termsAccepted}
                                className='border-0 btn fw-medium mb-3 px-5 py-2 rounded-0 rounded-2 text-white'
                                style={{ backgroundColor: '#08118E' }}>
                                {isSubmitting ? 'Loading...' : 'রেজিস্ট্রেশন করুন'}
                            </button>
                        </div>
                    </form >

                </div >
            </div>
        </div>
    );
};

export default AddUser;