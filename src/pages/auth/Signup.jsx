import { Link } from 'react-router-dom';
import { callApi } from '../../utilities/functions';

const Signup = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      await callApi("POST", "/api/students", data, { 'Content-Type': 'multipart/form-data' });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='container'>
      <div>
        <h2 className='text-center my-3'>Register Here</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row my-3'>
          <div className='form-group col-md-3'>
            <label className='fw-medium' htmlFor='founder_name'>Founder Name <span className='text-danger'> *</span></label>
            <input
              type='text'
              className='form-control'
              id='founder_name'
              name='founder_name'
              placeholder='Founder Name'

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

            />
          </div>
          <div className='form-group col-md-3'>
            <label className='fw-medium' htmlFor='founder_gender'>Founder Gender <span className='text-danger'> *</span></label>
            <select name='founder_gender' className='form-control' id='founder_gender' required>
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
            <label className='fw-medium' htmlFor='business_category'>Business Category <span className='text-danger'> *</span></label>
            <select name='business_category' className='form-control' id='business_category' required>
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
            />
          </div>
          <div className='form-group col-md-3'>
            <label className='fw-medium' htmlFor='formation_of_company'>Formation Of Company*</label>
            <select name='formation_of_company' className='form-control' id='formation_of_company' required>
              <option disabled>--Select--</option>
              <option>Technology</option>
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
            />
          </div>
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="formFile" className="form-label fw-medium">Attachment (company profile/pitch deck) about startup</label>
          <input className="form-control bg-secondary-subtle" type="file" id="formFile" name="attachment_file" />
        </div>

        <button type='submit' className='border-0 btn mb-3 py-2 rounded-0 w-100' style={{ backgroundColor: '#05BCCA' }}>
          Register
        </button>
      </form>
      <div className='mb-4 text-end'>
        <span>  Already have an account?</span>
        <Link to={'/signin'} className="text-center text-decoration-none"> Login here
        </Link>
      </div>
    </div>
  );
};

export default Signup;