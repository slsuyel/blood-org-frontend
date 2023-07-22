import React, { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';

const useStudent = (id) => {
    const [studentData, setStudentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await callApi("GET", `/api/students/${id}`);
                setStudentData(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchStudentData();
    }, [id]);

    return { studentData, isLoading };
};

export default useStudent;
