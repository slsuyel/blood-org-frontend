import React from 'react';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };

    return (
        <div className='container'>
            <div>
                <h2 className='text-center my-3'>Register Here</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row my-3'>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='founderName'>Founder Name <span className='text-danger'> *</span></label>
                        <input
                            type='text'
                            className='form-control'
                            id='founderName'
                            name='founderName'
                            placeholder='Founder Name'
                            required
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='founderEmail'>Founder Email <span className='text-danger'> *</span></label>
                        <input
                            type='email'
                            className='form-control'
                            id='founderEmail'
                            name='founderEmail'
                            placeholder='Founder Email'
                            required
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='founderPhone'>Founder Phone <span className='text-danger'> *</span></label>
                        <input
                            type='tel'
                            className='form-control'
                            id='founderPhone'
                            name='founderPhone'
                            placeholder='Ex: 017********'
                            required
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='founderGender'>Founder Gender <span className='text-danger'> *</span></label>
                        <select name='founderGender' className='form-control' id='founderGender' required>
                            <option disabled>-Select-</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className='row my-3'>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='companyName'>Company Name <span className='text-danger'> *</span></label>
                        <input
                            type='text'
                            className='form-control'
                            id='companyName'
                            name='companyName'
                            placeholder='Company Name'
                            required
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='location'>Location <span className='text-danger'> *</span></label>
                        <select name='location' className='form-control' id='location' required>
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
                        <label className='fw-medium' htmlFor='businessCategory'>Business Category <span className='text-danger'> *</span></label>
                        <select name='businessCategory' className='form-control' id='businessCategory' required>
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
                    <label className='fw-medium' htmlFor='shortNote'>Short note about your startup/project/ideas <span className='text-danger'> *</span></label>
                    <textarea
                        className='form-control py-3'
                        id='shortNote'
                        name='shortNote'
                        placeholder='Write short note about your startup/project/ideas'
                        required
                    ></textarea>
                </div>
                <div className='row my-3'>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='companyWebsiteLink'>Website Url</label>
                        <input
                            type='text'
                            className='form-control'
                            id='companyWebsiteLink'
                            name='companyWebsiteLink'
                            placeholder='Company website link'
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='employeeNumber'>Employee Number</label>
                        <input
                            type='number'
                            className='form-control'
                            id='employeeNumber'
                            name='employeeNumber'
                            placeholder='Employee Number'
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='formationOfCompany'>Formation Of Company*</label>
                        <select name='formationOfCompany' className='form-control' id='formationOfCompany' required>
                            <option disabled>--Select--</option>
                            <option>Technology</option>
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='companyVideoLink'>Company Video link</label>
                        <input
                            type='text'
                            className='form-control'
                            id='companyVideoLink'
                            name='companyVideoLink'
                            placeholder='Company Video link'
                        />
                    </div>
                </div>
                <div className='row my-3'>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='companyFacebookLink'>Company Facebook link</label>
                        <input
                            type='text'
                            className='form-control'
                            id='companyFacebookLink'
                            name='companyFacebookLink'
                            placeholder='Company Facebook link'
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='companyYoutubeLink'>Company Youtube link</label>
                        <input
                            type='text'
                            className='form-control'
                            id='companyYoutubeLink'
                            name='companyYoutubeLink'
                            placeholder='Company Youtube link'
                        />
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='fw-medium' htmlFor='companyLinkedinLink'>Company Linkedin link</label>
                        <input
                            type='text'
                            className='form-control'
                            id='companyLinkedinLink'
                            name='companyLinkedinLink'
                            placeholder='Company Linkedin link'
                        />
                    </div>
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="formFile" className="form-label fw-medium">Attachment (company profile/pitch deck) about startup</label>
                    <input className="form-control bg-secondary-subtle" type="file" id="formFile" name="attachment" />
                </div>

                <button type='submit' className='border-0 btn mb-3 py-2 rounded-0 w-100' style={{ backgroundColor: '#05BCCA' }}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
