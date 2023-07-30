import './StudentsDashboard.css'
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";
import useStudent from '../hooks/useStudent';
import Loader from '../utilities/Loader';
import { AuthContext } from '../Providers/AuthProviders';


const StudentsDashboard = () => {
    const {studentLogOut} = useContext(AuthContext)
    const [meetLink, setMeetLink] = useState("https://meet.google.com/oms-mqwt-vzv");
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)


    if (isLoading) {
        return <Loader />
    }


    const copyLinkToClipboard = () => {
        const tempInput = document.createElement("input");
        tempInput.setAttribute("value", meetLink);
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("Link copied to clipboard!");
    };

    return (
        <div  className="student-profile py-4 my-5" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent text-center">
                                <img className="profile_img" src="https://divedigital.id/wp-content/uploads/2022/07/1-Blank-TikTok-Default-PFP.jpg" alt="" />
                                <h3>Name : {studentData.founder_name}</h3>
                            </div>
                            <div className="card-body text-center">
                                <p className="mb-0"><strong className="pr-1">Student ID:</strong>{studentData.id}</p>
                                <p className="mb-0"><strong className="pr-1">Batch:</strong>04</p>
                                <p className="mb-0">
                                    <strong className="pr-1">Join:</strong>
                                    <span id="meet-link" className="fst-italic">
                                        <a className="mx-2 text-decoration-none" href={meetLink}> Meeting</a>
                                    </span>
                                    <span id="copy-icon" className='' onClick={copyLinkToClipboard}>
                                        <i className="btn fa-copy fa-regular fs-5 text-secondary"></i>
                                    </span>
                                </p>

                            </div>

                        </div>

                        <div className='card'>
                            <div className='align-items-center d-flex fs-4 fw-bold justify-content-around my-3'>
                                <p className='mb-0 fs-6'>You get : </p>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={Number(studentData.rating)}
                                    isDisabled
                                // items={10}
                                /></div>

                            <div className='mb-3'>
                                {
                                    !Number(studentData.rating) > 0 ? <div className="text-center">
                                        <Link to='/profile/exam' className='btn btn-outline-primary text-dark text-decoration-none'><i className="fa-regular fa-file-lines"></i> Start Exam</Link>
                                    </div> : <div className="text-center">
                                        <Link to='/profile/exam' className='btn btn-outline-primary text-dark text-decoration-none'>

                                            <i className="fa-regular fa-circle-check"></i>   See Your Performance</Link>
                                    </div>
                                }
                            </div>

                            <div className="text-center my-2">
                                <button onClick={studentLogOut} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                            </div>

                        </div>
                    </div>



                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0"><i className="far fa-clone pr-1" />General Information</h3>
                            </div>
                            <div className="card-body pt-0">
                                <table className="table table-bordered">
                                    <tbody>

                                        <tr>
                                            <th>Founder Name</th>
                                            <td>:</td>
                                            <td>{studentData.founder_name}</td>
                                        </tr>
                                        <tr>
                                            <th>Founder Email</th>
                                            <td>:</td>
                                            <td>{studentData.founder_email}</td>
                                        </tr>
                                        <tr>
                                            <th>Founder Phone</th>
                                            <td>:</td>
                                            <td>{studentData.founder_phone}</td>
                                        </tr>
                                        <tr>
                                            <th>Founder Gender</th>
                                            <td>:</td>
                                            <td>{studentData.founder_gender}</td>
                                        </tr>
                                        <tr>
                                            <th>Company Name</th>
                                            <td>:</td>
                                            <td>{studentData.company_name}</td>
                                        </tr>
                                        <tr>
                                            <th>Location</th>
                                            <td>:</td>
                                            <td>{studentData.location}</td>
                                        </tr>
                                        <tr>
                                            <th>Business Category</th>
                                            <td>:</td>
                                            <td>{studentData.business_category}</td>
                                        </tr>
                                        <tr>
                                            <th>Short Note</th>
                                            <td>:</td>
                                            <td>{studentData.short_note}</td>
                                        </tr>
                                        <tr>
                                            <th>Website URL</th>
                                            <td>:</td>
                                            <td>{studentData.website_url}</td>
                                        </tr>
                                        <tr>
                                            <th>Employee Number</th>
                                            <td>:</td>
                                            <td>{studentData.employee_number}</td>
                                        </tr>
                                        <tr>
                                            <th>Formation of Company</th>
                                            <td>:</td>
                                            <td>{studentData.formation_of_company}</td>
                                        </tr>
                                        <tr>
                                            <th>Company Video Link</th>
                                            <td>:</td>
                                            <td>{studentData.company_video_link}</td>
                                        </tr>
                                        <tr>
                                            <th>Facebook Link</th>
                                            <td>:</td>
                                            <td>{studentData.facebook_link}</td>
                                        </tr>
                                        <tr>
                                            <th>YouTube Link</th>
                                            <td>:</td>
                                            <td>{studentData.youtube_link}</td>
                                        </tr>
                                        <tr>
                                            <th>LinkedIn Link</th>
                                            <td>:</td>
                                            <td>{studentData.linkedin_link}</td>
                                        </tr>
                                        <tr>
                                            <th>Attachment File</th>
                                            <td>:</td>
                                            <td>{studentData.attachment_file}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default StudentsDashboard;


/* 


*/