import React, { useEffect, useState } from 'react';
import blood from '../assets/images/blood-org.jpg'
import { Link } from 'react-router-dom';
const org = {
    "organization_1": "Sheikh Hasina Companion Social Welfare Organization",
    "organization_2": "Bangladesh Defense Service Organization",
    "organization_3": "People's Power Organization",
    "organization_4": "Women's Liberation Movement Organization",
    "organization_5": "Nature Conservation Organization"
};

const OrganizationFind = () => {
    const [selecteddivisions, setSelectedDivisions] = useState([]);
    const [divisions, setDivisions] = useState([]);

    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [upazilas, setUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const [unions, setUnions] = useState([]);
    const [selectedUnion, setSelectedUnion] = useState('');


    const [selectedOrganization, setSelectedOrganization] = useState('');

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
    const handleOrganizationChange = event => {
        setSelectedOrganization(event.target.value);
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
    /*  */
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
    return (
        <>
            <h3 className='bg-cyan bg-warning py-1 rounded-end-5 text-center text-danger'> <img src={blood} alt="" width={'30px'} /> রক্তদাতা সংগঠন খুঁজুন</h3>
            <form id="bangladesh">
                <div className="form-group">

                    {/* <label className='fw-medium' htmlFor='facebook_link'>বিভাগ</label> */}
                    <select name="district" onChange={handleDivChange} className="form-select ">
                        <option defaultValue>বিভাগ সিলেক্ট করুন</option>
                        {divisions?.map(d => <option key={d.id} value={d.id} > {d.bn_name}</option>)}
                    </select>

                </div>

                <div className="form-group">

                    {/* <label className='fw-medium' htmlFor='facebook_link'>জেলা</label> */}
                    <select name="district" onChange={handleDistrictChange} className="form-select ">
                        <option defaultValue>জেলা সিলেক্ট করুন</option>
                        {districts?.map(d => <option key={d.id} value={d.id}>{d.bn_name}</option>)}
                    </select>
                </div>



                <div className="form-group">

                    {/* <label className='fw-medium' htmlFor='upazila'>উপজেলা</label> */}
                    <select name="upazila" onChange={handleUpazilaChange} className="form-select">
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
                    <select name="union" onChange={handleUnionChange} className="form-select">
                        <option defaultValue>ইউনিয়ন সিলেক্ট করুন</option>
                        {unions.map(union => (
                            <option key={union.id} value={union.id}>
                                {union.bn_name}
                            </option>
                        ))}
                    </select>

                </div>
                <div className="form-group">
                    <div className="">
                        <select name="organization" onChange={handleOrganizationChange} className="form-select">
                            <option defaultValue>সংগঠন সিলেক্ট করুন</option>
                            {Object.keys(org).map(key => (
                                <option key={key} value={key}>{org[key]}</option>
                            ))}
                        </select>
                    </div>
                </div>
           

                <div className="align-items-center d-flex form-group justify-content-between">

                    <div >
                        <button type="submit" className="myButton">
                            <i className="fa fa-search" /> <span>খুঁজুন</span>
                        </button>
                    </div>

                    <div >
                        <Link to={'/add-org'} className="register-button">
                            সংগঠন যোগ করুন
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
};

export default OrganizationFind;
