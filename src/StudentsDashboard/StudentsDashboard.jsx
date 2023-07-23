import React from 'react';
import { Link } from 'react-router-dom';

const StudentsDashboard = () => {
    // Default student information
    const studentInfo = {
        founder_name: 'John Doe',
        founder_email: 'john.doe@example.com',
        founder_phone: '123-456-7890',
        founder_gender: 'Male',
        company_name: 'Sample Company Inc.',
        location: 'New York, USA',
        business_category: 'Technology',
        short_note: 'A brief description about the student and their company.',
        website_url: 'https://www.samplecompany.com',
        employee_number: 50,
        formation_of_company: '2022-01-01',
        company_video_link: 'https://www.youtube.com/watch?v=example',
        facebook_link: 'https://www.facebook.com/samplecompany',
        youtube_link: 'https://www.youtube.com/samplecompany',
        linkedin_link: 'https://www.linkedin.com/in/samplecompany',
        attachment_file: 'path/to/attachment_file.pdf',
    };

    return (
        <div>
            <div className='container row mx-auto'>
                <div className='col-md-4 col-sm-12'>
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

                        <h4 className="py-2 rounded-1 text-center">Total Marks: <span>00</span></h4>

                        <div className="text-center">
                            <Link to='/studentdashboard/exam' className='btn btn-secondary'>Start Exam</Link>
                        </div>
                        <div className="text-center my-2">
                            <button className='btn btn-danger'>Log Out</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 col-sm-12'>
                    <div className='card my-3'>
                        <p className="fs-3 mt-2 text-center">Student Information</p>
                        <ul>
                            <li>Founder Name: {studentInfo.founder_name}</li>
                            <li>Founder Email: {studentInfo.founder_email}</li>
                            <li>Founder Phone: {studentInfo.founder_phone}</li>
                            <li>Founder Gender: {studentInfo.founder_gender}</li>
                            <li>Company Name: {studentInfo.company_name}</li>
                            <li>Location: {studentInfo.location}</li>
                            <li>Business Category: {studentInfo.business_category}</li>
                            <li>Short Note: {studentInfo.short_note}</li>
                            <li>Website URL: {studentInfo.website_url}</li>
                            <li>Employee Number: {studentInfo.employee_number}</li>
                            <li>Formation of Company: {studentInfo.formation_of_company}</li>
                            <li>Company Video Link: {studentInfo.company_video_link}</li>
                            <li>Facebook Link: {studentInfo.facebook_link}</li>
                            <li>YouTube Link: {studentInfo.youtube_link}</li>
                            <li>LinkedIn Link: {studentInfo.linkedin_link}</li>
                            <li>Attachment File: {studentInfo.attachment_file}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsDashboard;
