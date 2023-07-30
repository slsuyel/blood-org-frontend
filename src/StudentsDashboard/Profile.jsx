import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useStudent from '../hooks/useStudent';
import Loader from '../utilities/Loader';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { studentLogOut } = useContext(AuthContext)
    const [meetLink, setMeetLink] = useState("https://meet.google.com/oms-mqwt-vzv");
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)


    if (isLoading) {
        return <Loader />
    }


    return (
        <div className="container mt-5 pt-5">
            <div className="main-body">
                {/* Breadcrumb */}

                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                    <div className="mt-3">
                                        <h4>{studentData.founder_name}</h4>
                                        <p className="text-secondary mb-1">Student ID: {studentData.id}</p>
                                        <p className="text-muted font-size-sm">Location : {studentData.location}</p>
                                        <span >
                                            <span id="meet-link" className="fst-italic">
                                                <a className="btn btn-primary mx-2 text-decoration-none" href={meetLink}> Meeting</a>
                                            </span>
                                        </span>
                                        <button className="btn btn-outline-primary">Message</button>
                                        <div className="text-center my-2">
                                            <button onClick={studentLogOut} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                                        </div>
                                    </div>
                                </div>
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

                            {/* <div className="text-center my-2">
                                <button onClick={studentLogOut} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                            </div> */}

                        </div>

                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
                                    <span className="text-secondary">{studentData.website_url}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>LinkedIn </h6>
                                    <span className="text-secondary">{studentData.linkedin_link}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>YouTube</h6>
                                    <span className="text-secondary">{studentData.youtube_link}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                                    <span className="text-secondary">{studentData.facebook_link}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Video Link</h6>
                                    <span className="text-secondary">{studentData.company_video_link}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Attachment </h6>

                                    <span className="text-secondary">
                                        <a href={studentData.attachment_file}>attachment_file</a>
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Name :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone :</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_phone}
                                    </div>
                                </div>
                                <hr />


                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0"> Gender :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.founder_gender}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Company Name :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.company_name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Employee Number :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.employee_number}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Business Category :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.business_category}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0 text-nowrap">Formation of Company :	</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {studentData.formation_of_company}
                                    </div>
                                </div>
                                <hr />


                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gutters-sm">
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <span className="fw-bold"> Short  Note :</span> <br />   {studentData.short_note ? studentData.short_note : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse odit quisquam inventore placeat provident voluptas voluptatum recusandae pariatur deserunt id impedit consequuntur nam numquam repellat enim a, blanditiis alias?'}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <span className="fw-bold"> Attachment:</span> <br />
                                        {studentData.attachment_file} <br />
                                        <img src="https://banner2.cleanpng.com/20180802/ais/kisspng-computer-icons-file-manager-clip-art-computer-file-files-svg-png-icon-free-download-509195-onlin-5b62ec8eacbea9.1368126415332097427076.jpg" className='img-fluid' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div></div></div>

    );
};

export default Profile;

{/* <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav> */}
{/* /Breadcrumb */ }