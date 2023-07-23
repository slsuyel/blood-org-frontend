import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../utilities/Loader";
import useStudent from "../../hooks/useStudent";

const StudentShow = () => {
    const { id } = useParams();
    const { studentData, isLoading } = useStudent(id);


    if (isLoading || !studentData) {
        return <Loader />;
    }
    const {
        founder_name,
        founder_email,
        founder_phone,
        founder_gender,
        company_name,
        location,
        business_category,
        short_note,
        website_url,
        employee_number,
        formation_of_company,
        company_video_link,
        facebook_link,
        youtube_link,
        linkedin_link,
        attachment_file,
    } = studentData;

    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <h2 className='text-center my-3'>Student Information</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>Founder Name: {founder_name}</p>
                        <p>Founder Email: {founder_email}</p>
                        <p>Founder Phone: {founder_phone}</p>
                        <p>Founder Gender: {founder_gender}</p>

                        <p>Company Name: {company_name}</p>
                        <p>Location: {location}</p>
                        <p>Business Category: {business_category}</p>
                        <p>Short Note: {short_note}</p>
                        <p>Website Url: {website_url}</p>
                        <p>Employee Number: {employee_number}</p>
                        <p>Formation Of Company: {formation_of_company}</p>
                        <p>Company Video link: {company_video_link}</p>
                        <p>Company Facebook link: {facebook_link}</p>
                        <p>Company Youtube link: {youtube_link}</p>
                        <p>Company Linkedin link: {linkedin_link}</p>
                        <p>Attachment (company profile/pitch deck): {attachment_file}</p>
                    </div>
                    <div className="col-md-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ullam possimus culpa ipsum ea, nobis distinctio odit iusto modi ab repudiandae cupiditate reprehenderit harum, quaerat vitae doloribus explicabo sit impedit?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentShow;
