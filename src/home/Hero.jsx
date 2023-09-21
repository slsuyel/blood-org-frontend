import React, { useEffect, useState } from 'react';
import './home.css';
import bloodorg from '../assets/images/blood-org.jpg'
import blood from '../assets/images/blood.png'
import { Link } from 'react-router-dom';
import { getName } from '../utilities/functions';


const socialOrganizations = [
    "বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি",
    "বাংলাদেশ  চিকিৎসক সমিতি",
    "বাংলাদেশ মহিলা সমাজ সংঘ",
    "বাংলাদেশ প্রাণি পরিসর সংরক্ষণ সমিতি",
    "বাংলাদেশ শিশু ও নারী বিষয়ক সমিতি",
    "বাংলাদেশ আমরা",
    "বাংলাদেশ গ্রামীণ উন্নয়ন সংস্থা",
    "বাংলাদেশ গণিত উন্নয়ন পরিষদ",
    "বাংলাদেশ বাণিজ্যিক গ্রন্থাগার",
    "বাংলাদেশ কারখানা শ্রমিক সমিতি",
];


const Hero = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [org, setOrg] = useState('');


    const [selecteddivisions, setSelectedDivisions] = useState([]);
    const [divisions, setDivisions] = useState([]);

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const [unions, setUnions] = useState([]);
    const [selectedUnion, setSelectedUnion] = useState('');

    const [donarDiv, setDonarDiv] = useState('')
    const [donarDist, setDonarDist] = useState('')

    const [donarUpazila, setDonarUpazila] = useState('')
    const [donarUnions, setDonarUnions] = useState('')


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

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleOrgChange = (event) => {
        const selectedOption = event.target.value;
        setOrg(selectedOption);
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const searchData = {
            blood_group: event.target.group.value,
            division: donarDiv,
            district: donarDist,
            thana: donarUpazila,
            union: donarUnions,
            org
        };

        console.log(searchData);
    }


    return (
        <div className=' parallax-image  align-items-center w-100 ' id='top'>
            <div className='container row mx-auto mt-5 pt-5'>

                <div className="col-md-8 mx-auto">
                    <h3 className='bg-cyan bg-warning py-1 text-center text-danger'>
                        <img src={blood} alt="" width={'30px'} /> <span className="mx-2">রক্তদাতা খুঁজুন</span>
                        <img src={bloodorg} alt="" width={'30px'} />
                    </h3>
                    <form onSubmit={handleFormSubmit}>

                        <div className="form-group">
                            <div className="select-grouph-area">
                                <select required name="group" className="form-select fw-bold text-danger">
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
                        </div>
                        <div className="form-group">

                            {/* <label className='fw-medium' htmlFor='facebook_link'>বিভাগ</label> */}
                            <select required name="district" onChange={handleDivChange} className="form-select ">
                                <option defaultValue>বিভাগ সিলেক্ট করুন</option>
                                {divisions?.map(d => <option key={d.id} value={d.id} > {d.bn_name}</option>)}
                            </select>

                        </div>

                        <div className="form-group">

                            {/* <label className='fw-medium' htmlFor='facebook_link'>জেলা</label> */}
                            <select required name="district" onChange={handleDistrictChange} className="form-select ">
                                <option defaultValue>জেলা সিলেক্ট করুন</option>
                                {districts?.map(d => <option key={d.id} value={d.id}>{d.bn_name}</option>)}
                            </select>
                        </div>



                        <div className="form-group">

                            {/* <label className='fw-medium' htmlFor='upazila'>উপজেলা</label> */}
                            <select required name="upazila" onChange={handleUpazilaChange} className="form-select">
                                <option defaultValue>উপজেলা সিলেক্ট করুন</option>
                                {upazilas.map(u => (
                                    <option key={u.id} value={u.id}>
                                        {u.bn_name}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="form-group">
                            {/*                             
                                <label className='fw-medium' htmlFor='union'>ইউনিয়ন</label> */}
                            <select required name="union" onChange={handleUnionChange} className="form-select">
                                <option defaultValue>ইউনিয়ন সিলেক্ট করুন</option>
                                {unions.map(union => (
                                    <option key={union.id} value={union.id}>
                                        {union.bn_name}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    className="me-2"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                সংগঠন থেকে খুঁজুন
                            </label>

                            {
                                isChecked ? <select name="union" onChange={handleOrgChange} className="form-select">
                                    <option defaultValue>সংগঠন সিলেক্ট করুন</option>
                                    {socialOrganizations.map((union, index) => (
                                        <option key={index} >
                                            {union}
                                        </option>
                                    ))}
                                </select> : ''
                            }

                        </div>


                        <div className="align-items-center d-flex form-group justify-content-between">

                            <div >
                                <button type="submit" className="myButton">
                                    <i className="fa fa-search" /> <span>খুঁজুন</span>
                                </button>
                            </div>

                            <div >
                                <Link to={'/signup'} className="register-button">
                                    রেজিস্ট্রেশন করুন
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
