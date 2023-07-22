import React from 'react';
import { callApi } from '../../utilities/functions';
import { useNavigate, useParams } from 'react-router-dom';
import useStudent from '../../hooks/useStudent';
import Loader from '../../utilities/Loader';
import { toast } from 'react-toastify';

const EditStudent = () => {
    const { id } = useParams();
    const { studentData, isLoading } = useStudent(id);
    const Navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = {
            founder_name: e.target.founder_name.value,
            founder_email: e.target.founder_email.value,
            founder_phone: e.target.founder_phone.value,
            founder_gender: e.target.founder_gender.value,
            company_name: e.target.company_name.value,
            location: e.target.location.value,
            business_category: e.target.business_category.value,
            short_note: e.target.short_note.value,
            website_url: e.target.website_url.value,
            employee_number: e.target.employee_number.value,
            formation_of_company: e.target.formation_of_company.value,
            company_video_link: e.target.company_video_link.value,
            facebook_link: e.target.facebook_link.value,
            youtube_link: e.target.youtube_link.value,
            linkedin_link: e.target.linkedin_link.value,
            attachment_file: e.target.attachment_file.value,
        };

        callApi("PUT", `/api/students/${id}`, formData)
            .then((response) => {
                toast.success('Student updated successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                Navigate('/dashboard/student')
            })
            .catch((error) => {
                console.error("Error updating student:", error);
            });
    };

    if (isLoading || !studentData) {
        return <Loader />;
    }

    const { founder_name, founder_email, founder_phone, founder_gender, company_name, location, business_category, short_note, website_url, employee_number, formation_of_company, company_video_link, facebook_link, youtube_link, linkedin_link, attachment_file } = studentData;


    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <div>
                    <h2 className='text-center my-3'>Edit student data</h2>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className='row my-3'>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='founder_name'>Founder Name <span className='text-danger'> *</span></label>
                            <input
                                type='text'
                                className='form-control'
                                id='founder_name'
                                name='founder_name'
                                placeholder='Founder Name'
                                defaultValue={founder_name}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='founder_email'>Founder Email <span className='text-danger'> *</span></label>
                            <input
                                type='email'
                                className='form-control'
                                id='founder_email'
                                name='founder_email'
                                placeholder='Founder Email'
                                defaultValue={founder_email}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='founder_phone'>Founder Phone <span className='text-danger'> *</span></label>
                            <input
                                type='tel'
                                className='form-control'
                                id='founder_phone'
                                name='founder_phone'
                                placeholder='Ex: 017********'
                                defaultValue={founder_phone}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='founder_gender'>Founder Gender <span className='text-danger'> *</span></label>
                            <select name='founder_gender' className='form-control' id='founder_gender' defaultValue={founder_gender}>
                                <option disabled>-Select-</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='company_name'>Company Name <span className='text-danger'> *</span></label>
                            <input
                                type='text'
                                className='form-control'
                                id='company_name'
                                name='company_name'
                                placeholder='Company Name'
                                defaultValue={company_name}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='location'>Location <span className='text-danger'> *</span></label>
                            <select name='location' className='form-control' id='location' defaultValue={location}>
                                <option disabled>--Select Division--</option>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Rajshahi</option>
                                <option>Khulna</option>
                                <option>Barisal</option>
                                <option>Sylhet</option>
                                <option>Rangpur</option>
                                <option>Mymensingh</option>
                            </select>
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='business_category'>Business Category <span className='text-danger'> *</span></label>
                            <select name='business_category' className='form-control' id='business_category' defaultValue={business_category}>
                                <option disabled>--Select--</option>
                                <option>Technology</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                                <option>Education</option>
                                <option>Food and Beverage</option>
                                <option>Entertainment</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group my-3'>
                        <label className='fw-medium' htmlFor='short_note'>Short note about your startup/project/ideas <span className='text-danger'> *</span></label>
                        <textarea
                            className='form-control py-3'
                            id='short_note'
                            name='short_note'
                            placeholder='Write short note about your startup/project/ideas'
                            defaultValue={short_note}
                        ></textarea>
                    </div>
                    <div className='row my-3'>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='website_url'>Website Url</label>
                            <input
                                type='text'
                                className='form-control'
                                id='website_url'
                                name='website_url'
                                placeholder='Company website link'
                                defaultValue={website_url}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='employee_number'>Employee Number</label>
                            <input
                                type='number'
                                className='form-control'
                                id='employee_number'
                                name='employee_number'
                                placeholder='Employee Number'
                                defaultValue={employee_number}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='formation_of_company'>Formation Of Company*</label>
                            <select name='formation_of_company' className='form-control' id='formation_of_company' defaultValue={formation_of_company}>
                                <option disabled>--Select--</option>
                                <option>Technology</option>
                                {/* Add other options here */}
                            </select>
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='company_video_link'>Company Video link</label>
                            <input
                                type='text'
                                className='form-control'
                                id='company_video_link'
                                name='company_video_link'
                                placeholder='Company Video link'
                                defaultValue={company_video_link}
                            />
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='facebook_link'>Company Facebook link</label>
                            <input
                                type='text'
                                className='form-control'
                                id='facebook_link'
                                name='facebook_link'
                                placeholder='Company Facebook link'
                                defaultValue={facebook_link}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='youtube_link'>Company Youtube link</label>
                            <input
                                type='text'
                                className='form-control'
                                id='youtube_link'
                                name='youtube_link'
                                placeholder='Company Youtube link'
                                defaultValue={youtube_link}
                            />
                        </div>
                        <div className='form-group col-md-3'>
                            <label className='fw-medium' htmlFor='linkedin_link'>Company Linkedin link</label>
                            <input
                                type='text'
                                className='form-control'
                                id='linkedin_link'
                                name='linkedin_link'
                                placeholder='Company Linkedin link'
                                defaultValue={linkedin_link}
                            />
                        </div>
                    </div>
                    <div className="mb-3 my-3">
                        <label htmlFor="formFile" className="form-label fw-medium">Attachment (company profile/pitch deck) about startup</label>
                        <input className="form-control bg-secondary-subtle" type="text" id="formFile" name="attachment_file" defaultValue={attachment_file} />
                    </div>

                    <button type='submit' className='border-0 btn mb-3 py-2 rounded-0 w-100' style={{ backgroundColor: '#05BCCA' }}>
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditStudent;