// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import gallery from '../../assets/images/gallery.jpg'
// const OrgRegi = () => {
//     const [districts, setDistricts] = useState([]);
//     const [upazilas, setUpazilas] = useState([]);
//     const [selectedDistrict, setSelectedDistrict] = useState('');
//     const [selectedUpazila, setSelectedUpazila] = useState('');
//     const [termsAccepted, setTermsAccepted] = useState(false);

//     const [formData, setFormData] = useState({
//         orgName: '',
//         orgLogo: null,
//         orgDirector: '',
//         phoneNumber: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });
//     useEffect(() => {
//         fetch('districts.json')
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return res.json();
//             })
//             .then(data => setDistricts(data.districts))
//             .catch(error => console.error('Error fetching districts data:', error));
//     }, []);

//     useEffect(() => {
//         if (selectedDistrict) {
//             fetch('upazilas.json')
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     const filteredUpazilas = data.upazilas.filter(upazila => upazila.district_id === selectedDistrict);
//                     setUpazilas(filteredUpazilas);
//                 })
//                 .catch(error => console.error('Error fetching upazilas data:', error));
//         }
//     }, [selectedDistrict]);


//     const handleDistrictChange = event => {
//         setSelectedDistrict(event.target.value);
//         setSelectedUpazila('');
//     };

//     const handleUpazilaChange = event => {
//         setSelectedUpazila(event.target.value);
//     };
//     const handleChange = (e) => {
//         const { name, value, type } = e.target;
//         // If the input is a file input, update orgLogo with the selected file
//         const newValue = type === 'file' ? e.target.files[0] : value;
//         setFormData({ ...formData, [name]: newValue });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(selectedDistrict, selectedUpazila)
//         console.log(formData);
//     };

//     return (
//         <div className="container mt-5 row w-100 mx-auto pt-4">
//             <h2 className='my-3 text-center'>Registration Form</h2>
//             <form onSubmit={handleSubmit} className='col-md-6 mx-auto'>
//                 <div className="form-group">
//                     <label htmlFor="orgName">Organization Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="orgName"
//                         name="orgName"
//                         value={formData.orgName}
//                         onChange={handleChange}

//                         placeholder="Enter organization name"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="orgName">Organization District</label>
//                     <div className="">
//                         <select name="district" onChange={handleDistrictChange} className="form-select ">
//                             <option defaultValue>জেলা সিলেক্ট করুন</option>
//                             {districts?.map(d => <option key={d.id} value={d.id}>{d.bn_name}</option>)}
//                         </select>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="orgName">Organization Upazila</label>
//                     <div className="">
//                         <select name="upazila" onChange={handleUpazilaChange} className="form-select ">
//                             <option defaultValue>উপজেলা সিলেক্ট করুন</option>
//                             {upazilas?.map(u => <option key={u.id} value={u.id}>{u.bn_name}</option>)}
//                         </select>
//                     </div>
//                 </div>



//                 <div className="align-items-center d-flex flex-wrap form-group gap-1 justify-content-between">
//                     <div>
//                         <label htmlFor="orgLogo"> Logo</label>
//                         <input
//                             type="file"
//                             className="bg-white border form-control-file p-1 rounded-1"
//                             id="orgLogo"
//                             name="orgLogo"
//                             onChange={handleChange}
//                             accept="image/*"
//                         />
//                     </div>
//                     {formData.orgLogo ? (
//                         <img width={'120px'}
//                             height={'120px'}
//                             src={URL.createObjectURL(formData.orgLogo)}
//                             alt="Logo Preview"
//                             className="border-2 border-primary-subtle img-bordered rounded-circle"
//                         />
//                     ) : <> <img width={'120px'}
//                         height={'120px'}
//                         src={gallery}
//                         alt="Logo Preview"
//                         className="border-2 border-primary-subtle img-bordered rounded-circle"
//                     />  </>}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="orgDirector">Organization Director</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="orgDirector"
//                         name="orgDirector"
//                         value={formData.orgDirector}
//                         onChange={handleChange}

//                         placeholder="Enter organization director"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phoneNumber">Phone Number</label>
//                     <input
//                         type="tel"
//                         className="form-control"
//                         id="phoneNumber"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}

//                         placeholder="Enter phone number"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}

//                         placeholder="Enter email"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}

//                         placeholder="Enter password"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="confirmPassword"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}

//                         placeholder="Confirm password"
//                     />
//                 </div>
//                 <div className='form-check'>
//                     <input

//                         type='checkbox'
//                         className='form-check-input border-danger'
//                         id='acceptTerms'
//                         checked={termsAccepted}
//                         onChange={() => setTermsAccepted(!termsAccepted)}
//                     />
//                     <label className='form-check-label' htmlFor='acceptTerms'>
//                         I accept the terms and conditions <span className='text-danger'> *</span>
//                     </label>
//                 </div>

//                 <div className='d-flex justify-content-between my-2'>
//                     <button type="submit"
//                         disabled={!termsAccepted}
//                         className="btn btn-primary">
//                         Submit
//                     </button>
//                     <Link to={'/org-login'} className="register-button">
//                         সংগঠন লগিন করুন
//                     </Link>
//                 </div>
//             </form>


//         </div>
//     );
// };

// export default OrgRegi;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../utilities/Loader';
import { callApi, getName } from '../../utilities/functions';
import { toast } from 'react-toastify';
import useTitle from './../../hooks/useTitle';

const OrgRegi = () => {

    useTitle('ব্লাড ব্যাংক রেজিস্ট্রেশন')

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
    const [termsAccepted, setTermsAccepted] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        fetch('divisions.json')
            .then(res => res.json())
            .then(data => setDivisions(data))
            .catch(error => console.error('Error fetching districts data:', error));
    }, []);

    useEffect(() => {
        if (selecteddivisions) {
            fetch('districts.json')
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
            fetch('upazilas.json')
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
            fetch('unions.json')
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
            email: event.target.donar_email.value,
            whatsapp_number: whatsappNumber,
            division: donarDiv,
            district: donarDist,
            thana: donarUpazila,
            union: donarUnions,
            password: event.target.password.value,
        };

        try {
            const response = await callApi("POST", "/api/organizations/register", formData, { 'Content-Type': 'application/json' });

            if (response.token) {
                localStorage.setItem("token", response.token);
                setIsSubmitting(false);
                toast.success('Registration successfully!', {
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

    };


    if (!districts) {
        return <Loader />
    }
    return (
        <>
            <div className='container mt-5 pt-4'>
                <div>
                    <h2 className='bg-dark-subtle mb-4 my-2 py-1 text-center'> <span className='text-danger'>ব্লাড ব্যাংক </span> রেজিস্ট্রেশন</h2>
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
                            I accept the <Link className='text-decoration-none' to={'/terms&condition'}>terms & conditions</Link>  <span className='text-danger'> *</span>
                        </label>
                    </div>
                    <p className='text-danger mb-0'>{error}</p>
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
                <div className='mb-4 text-end'>
                    <span>  ইতিমধ্যে একাউন্ট আছে?</span>
                    <Link to={'/org-login'} className="text-center text-decoration-none"> লগিন করুন
                    </Link>
                </div>
            </div >
        </>
    );
};

export default OrgRegi;