import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";
import useStudent from '../hooks/useStudent';
import Loader from '../utilities/Loader';

const StudentsDashboard = () => {
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)
    // console.log(studentData);
    const navigate = useNavigate()
    if (isLoading) {
        return <Loader />
    }
    const studentLogOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("studentId")
        navigate('/student/signin')
    }

    return (
        <div>
            <div className='container row mx-auto'>
                <div className='col-md-4 '>
                    <div>
                        <div className='text-center'>
                            <img
                                src="https://divedigital.id/wp-content/uploads/2022/07/1-Blank-TikTok-Default-PFP.jpg"
                                alt="Profile Picture"
                                width={"150px"}
                            />
                        </div>

                        <h4 className="py-2 rounded-1 text-center text-white" style={{ background: "linear-gradient(136.85deg, #ff37f2 -15.82%, #405aff 99.57%)" }}>
                            Student Profile
                        </h4>

                        <div className='align-items-center d-flex fs-4 fw-bold justify-content-around my-3'>
                            <span>You get : </span>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={Number(studentData.rating)}
                                isDisabled
                            // items={10}
                            />
                        </div>

                        <div className="text-center">
                            <Link to='/studentdashboard/exam' className='btn btn-secondary'>Start Exam</Link>
                        </div>
                        <div className="text-center my-2">
                            <button onClick={studentLogOut} className='btn btn-danger'>Log Out</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 '>
                    <div className='card my-3'>
                        <p className="fs-3 mt-2 text-center">Student Information</p>
                        <ul>
                            <li>Founder Name: {studentData.founder_name}</li>
                            <li>Founder Email: {studentData.founder_email}</li>
                            <li>Founder Phone: {studentData.founder_phone}</li>
                            <li>Founder Gender: {studentData.founder_gender}</li>
                            <li>Company Name: {studentData.company_name}</li>
                            <li>Location: {studentData.location}</li>
                            <li>Business Category: {studentData.business_category}</li>
                            <li>Short Note: {studentData.short_note}</li>
                            <li>Website URL: {studentData.website_url}</li>
                            <li>Employee Number: {studentData.employee_number}</li>
                            <li>Formation of Company: {studentData.formation_of_company}</li>
                            <li>Company Video Link: {studentData.company_video_link}</li>
                            <li>Facebook Link: {studentData.facebook_link}</li>
                            <li>YouTube Link: {studentData.youtube_link}</li>
                            <li>LinkedIn Link: {studentData.linkedin_link}</li>
                            <li>Attachment File: {studentData.attachment_file}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsDashboard;
