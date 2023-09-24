import React, { useEffect, useState } from 'react';
import SimpleSlider from '../../components/SimpleSlider';
import orgDemo from '../../assets/images/orgs/org-demo.jpg'
import { useLocation } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
const Team = () => {
    const location = useLocation();
    const [allOrgs, setAllOrgs] = useState([]);

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1
            const data = await callApi("get", `/api/organizations/lists?page=${page}`);
            setAllOrgs(data.organizations.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div data-aos="zoom-in-down" className=' mx-auto' style={{ width: '85%' }}>
            <SimpleSlider

                data={allOrgs}

            />
        </div>
    );
};

export default Team;