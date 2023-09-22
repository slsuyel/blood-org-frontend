import React, { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';
/* /api/organizations/1 */
const useDonor = (id,api='/api/doner') => {
    const [donorData, setDonorData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await callApi("GET", `${api}/${id}`);
                setDonorData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchStudentData();
    }, [id]);

    return {  donorData, isLoading };
};

export default useDonor;
