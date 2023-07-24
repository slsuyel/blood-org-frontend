import React from 'react';
import { useParams } from 'react-router-dom';
import useTeacher from '../../hooks/useTeacher';
import Loader from '../../utilities/Loader';

const TeacherShow = () => {
    const { id } = useParams();
    const { teacherData, isLoading } = useTeacher(id)
   
if (isLoading) {
    return <Loader/>
}


    return (
        <div className='content-wrapper'>
            <div className="content-header card">
                <h3>Id : {teacherData.id}</h3>
                <h3>Name : {teacherData.name}</h3>
                <h3>Email : {teacherData.email}</h3>
            </div>
        </div>
    );
};

export default TeacherShow;