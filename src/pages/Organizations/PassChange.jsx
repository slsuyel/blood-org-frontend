import React, { useState } from 'react';
import { callApi } from '../../utilities/functions';
import { toast } from 'react-toastify';

const PassChange = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        const response = await callApi("POST", "/api/organization/change-password", formData, { 'Content-Type': 'application/json' });
        if (response.token) {
            toast.success('Signup successfully!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            setIsSubmitting(false);
            console.error('Error fetching data:', error);
        }

    };

    return (
        <div className='row' >
            <h5 className='bg-dark-subtle mb-4 py-2  text-center'>Change Your Password</h5>
            <form onSubmit={handleSubmit} className='col-md-6 mx-auto'>
                <div className='form-group'>
                    <label className='fw-medium' htmlFor='current_password'>Current Password <span className='text-danger'> *</span></label>
                    <input
                        type='password'
                        className='form-control'
                        id='current_password'
                        name='current_password'
                        placeholder='Current Password'
                        value={formData.current_password}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label className='fw-medium' htmlFor='new_password'>New Password <span className='text-danger'> *</span></label>
                    <input
                        type='password'
                        className='form-control'
                        id='new_password'
                        name='new_password'
                        placeholder='New Password'
                        value={formData.new_password}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label className='fw-medium' htmlFor='new_password_confirmation'>Confirm New Password <span className='text-danger'> *</span></label>
                    <input
                        type='password'
                        className='form-control'
                        id='new_password_confirmation'
                        name='new_password_confirmation'
                        placeholder='Confirm New Password'
                        value={formData.new_password_confirmation}
                        onChange={handleChange}
                    />
                </div>
                <button
                    disabled={isSubmitting}
                    type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default PassChange;
