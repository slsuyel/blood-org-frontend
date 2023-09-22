import { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const useOrg = (id, api = '/api/organizations') => {
    const [org, setOrg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await callApi("GET", `${api}/${id}`);
                setOrg(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchStudentData();
    }, [id]);

    return { org, isLoading };
};

export default useOrg;

