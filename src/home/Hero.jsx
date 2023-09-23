import React, { useEffect, useState } from 'react';
import './home.css';
import bloodorg from '../assets/images/blood-org.jpg'
import blood from '../assets/images/blood.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { callApi, getName } from '../utilities/functions';
import Loader from '../utilities/Loader';
import SearchBlood from '../pages/Bloods/SearchBlood';
import { toast } from 'react-toastify';

const socialOrganizations = [
    "বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি",
    "বাংলাদেশ  চিকিৎসক সমিতি",
    "name"
];


const Hero = () => {
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [org, setOrg] = useState('');

    const [selecteddivisions, setSelectedDivisions] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [unions, setUnions] = useState([]);

    const location = useLocation();
    const navigate = useNavigate()
    const [selectedUnion, setSelectedUnion] = useState('');
    const [donarDiv, setDonarDiv] = useState('')
    const [donarDist, setDonarDist] = useState('')
    const [donarUpazila, setDonarUpazila] = useState('')

    const [donarUnions, setDonarUnions] = useState('')
    const [group, setGroup] = useState('A,p')
    const [donors, setDonors] = useState([]);
    const [hide, setHide] = useState(true);

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
        // setSelectedUnion(event.target.value);
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

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleOrgChange = (event) => {
        const selectedOption = event.target.value;
        setOrg(selectedOption);
    };

    /*     const [donarDiv, setDonarDiv] = useState('')
        const [donarDist, setDonarDist] = useState('')
        const [donarUpazila, setDonarUpazila] = useState('') */

    const handleSearch = async (event) => {
        event.preventDefault();
        
        if (!donarDiv) {
            toast.error('বিভাগ সিলেক্ট করুন!', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        } else if (!donarDist) {
            toast.error('জেলা সিলেক্ট করুন!', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        } else if (!donarUpazila) {
            toast.error('উপজেলা সিলেক্ট করুন!', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        } else if (!donarUnions) {
            toast.error('ইউনিয়ন সিলেক্ট করুন!', {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }

        const blood_group = group;
        let filter_by = 'union';
        let search = donarUnions;
        if (isChecked) {
            filter_by = 'org';
            search = org;
        }

        // navigate(`?blood_group=${blood_group}&filter_by=${filter_by}&search=${search}`)

        setLoading(true);
        try {
            const result = await getDonorsData(`blood_group=${blood_group}&filter_by=${filter_by}&search=${search}`);
            setHide(false)
            setDonors(result.doners.data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const getDonorsData = async (param) => {

        // const searchParams = new URLSearchParams(location.search);
        // const bloodGroup = searchParams.get('blood_group');
        // const filter_by = searchParams.get('filter_by');
        // const search = searchParams.get('search');

        // console.log(bloodGroup, filter_by, search);

        const response = await callApi("get", `/api/filter-doners?${param}`);
        return response;
    }


    return (
        <div className=' parallax-image  align-items-center w-100 ' id='top'>
            <div className='container row mx-auto mt-5 pt-5'>
                <div className="col-md-8 mx-auto">
                    <h3 className='bg-cyan bg-warning py-1 text-center text-danger'>
                        <img src={blood} alt="" width={'30px'} /> <span className="mx-2">রক্তদাতা খুঁজুন</span>
                        <img src={bloodorg} alt="" width={'30px'} />
                    </h3>
                    <form>

                        <div className="form-group">
                            <div className="select-grouph-area">
                                <select
                                    required
                                    name="group"
                                    className="form-select fw-bold text-danger"
                                    value={group}
                                    onChange={e => setGroup(e.target.value)}
                                >
                                    <option value="A,p">A+</option>
                                    <option value="A,n">A-</option>
                                    <option value="B,p">B+</option>
                                    <option value="B,n">B-</option>
                                    <option value="O,p">O+</option>
                                    <option value="O,n">O-</option>
                                    <option value="AB,p">AB+</option>
                                    <option value="AB,n">AB-</option>
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
                                isChecked ? <select name="organization" onChange={handleOrgChange} className="form-select">
                                    <option defaultValue >সংগঠন সিলেক্ট করুন</option>
                                    {socialOrganizations.map((organization, index) => (
                                        <option key={index} value={index}>
                                            {organization}
                                        </option>
                                    ))}
                                </select> : ''
                            }

                        </div>


                        <div className="align-items-center d-flex form-group justify-content-between">

                            <div >
                                {/* <Link
                                    to=
                                    {`/search/filter-doners/${group}/${isChecked ? 'org' : 'union'}&search=${isChecked ? org : donarUnions}`}

                                    className={`myButton ${isFieldsSelected ? '' : 'disabled-myButton'}`}
                                >
                                    <i className="fa fa-search" /> <span>খুঁজুন</span>
                                </Link> */}

                                <button onClick={handleSearch} className='myButton'>
                                    search
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

            {
                donors ? <SearchBlood donors={donors} group={group} loading={loading} hide={hide} /> : ''
            }


        </div>
    );
};

export default Hero;
