/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"; 
import { Form } from "react-bootstrap";

const MyAreaNews = () => {
    const [upazillas, setUpazillas] = useState([]);

    const [selectedupazilla, setselectedUpazilla] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const [districts, setDistricts] = useState('');
    const [division, setDivision] = useState([]);

    useEffect(() => {

        fetch('https://bdapis.com/api/v1.1/divisions')
            .then(res => res.json())
            .then(data => {
                setDivision(data.data);
            })
            .catch(error => {
                console.error('Error fetching division data:', error);

            });
    }, []);


    const getDistricts = async (divisionName) => {
        try {
            const res = await fetch(`https://bdapis.com/api/v1.1/division/${divisionName}`);
            const data = await res.json();
            setDistricts(data.data);
            return data.data;
        } catch (error) {
            console.error('Error fetching division data:', error);
            throw error;
        }
    };


    const handleDivisionChange = event => {
        const selectedValue = event.target.value;
        setSelectedDivision(selectedValue);
        setDistricts([]);
        getDistricts(selectedValue);
    };
    const handleDistrictChange = async (event) => {
        const selectedValue = event.target.value;
        setSelectedDistrict(selectedValue);

        try {
            const response = await fetch(`https://bdapis.com/api/v1.1/division/${selectedDivision}`);
            const data = await response.json();
            const selectedDistrictData = data.data.find(d => d.district === selectedValue);
            setUpazillas(selectedDistrictData.upazilla);
        } catch (error) {
            console.error('Error fetching upazilla data:', error);
        }
    };



    const handleAreaSearch = (selectedupazilla) => {
        // console.log(selectedupazilla);
        alert(selectedupazilla)
    }

    return (
        <div className="mt-1 pb-2 rounded-1" style={{ backgroundColor: '#E5E7EB' }}>
            <div className="row py-3">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="circle-with-text mt-3 " style={{ borderBottom: '2px solid red', marginBottom: '-18px', marginLeft: '-12px' }}>
                        <div className="red-circle " />
                        <span className=" fw-bold mb-0  opacity-75 pb-2 text-primary"> এলাকার খবর</span>
                    </div>
                </div>
            </div>


            <div className="mt-4 mx-2">
            <Form.Select
    className="my-2"
    aria-label="Select Division"
    value={selectedDivision}
    onChange={handleDivisionChange}
>
    <option disabled value="">বিভাগ</option>
    {division?.map(d => (
        <option key={d._id} value={d.division}>
            {d.division}
        </option>
    ))}
</Form.Select>

<Form.Select
    className="my-2"
    aria-label="Select Districts"
    value={selectedDistrict}
    onChange={handleDistrictChange}
>
    <option disabled value="">জেলা</option>
    {!districts ? null : districts.map(d => (
        <option key={d._id} value={d.district}>
            {d.district}
        </option>
    ))}
</Form.Select>

<Form.Select
    className="my-2"
    aria-label="Select upazilla"
    value={selectedupazilla}
    onChange={(event) => {
        setselectedUpazilla(event.target.value);
    }}
>
    <option disabled value="">উপজেলা</option>
    {upazillas.map((upazilla, index) => (
        <option key={index} value={upazilla}>
            {upazilla}
        </option>
    ))}
</Form.Select>


                <button onClick={() => { handleAreaSearch(selectedupazilla) }} className="border-0 my-1 py-2 rounded-1 text-white w-100" style={{ backgroundColor: 'rgb(12 122 190)' }}>Search</button>

                <div>



                </div>


            </div>


        </div>
    );
};

export default MyAreaNews;