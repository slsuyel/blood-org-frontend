import React, { useEffect } from 'react';

const Others = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" className='my-5 w-100 mx-auto'>
            <div className='row w-100 container mx-auto'>
                <div className='mb-4 text-center'><h3>Engaged Learners Lead to Better Number</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  </p>
                </div>
                <div className='col-md-6'>
                    <img src="https://img.freepik.com/premium-photo/side-view-diverse-group-business-people-working-with-computers-modern-office-focus-senior-man-it-studio_236854-29762.jpg" alt=""
                        className="img-fluid rounded-5" />
                </div>
                <div className='col-md-6'>
                    <div className='my-3'>
                        <h6>Create a Detail About your company Project</h6>
                        <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                            urna lorem neque urna duis pretium.</p>
                    </div>
                    <div className='my-3'>
                        <h6>Create a Detail About your company Project</h6>
                        <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                            urna lorem neque urna duis pretium.</p>
                    </div>
                    <div className='my-3'>
                        <h6>Create a Detail About your company Project</h6>
                        <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                            urna lorem neque urna duis pretium.</p>
                    </div>
                    <div className='my-3'>
                        <h6>Create a Detail About your company Project</h6>
                        <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                            urna lorem neque urna duis pretium.</p>
                    </div>
                </div>
            </div>

            <div className=' container mx-auto my-5'>
                <h4 className='text-center mb-4'>How it Work</h4>
                <div className='row w-100 '>
                    <div className='col-md-6'>
                        <div className='my-3'>
                            <h6>Create a Detail About your company Project</h6>
                            <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                                urna lorem neque urna duis pretium.</p>
                        </div>
                        <div className='my-3'>
                            <h6>Create a Detail About your company Project</h6>
                            <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                                urna lorem neque urna duis pretium.</p>
                        </div>
                        <div className='my-3'>
                            <h6>Create a Detail About your company Project</h6>
                            <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                                urna lorem neque urna duis pretium.</p>
                        </div>
                        <div className='my-3'>
                            <h6>Create a Detail About your company Project</h6>
                            <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                                urna lorem neque urna duis pretium.</p>
                        </div>
                        <div className='my-3'>
                            <h6>Create a Detail About your company Project</h6>
                            <p>  Lorem ipsum dolor sit amet consectetur. Sit cras sagittis orci sit vel. Arcu
                                urna lorem neque urna duis pretium.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src="https://media.istockphoto.com/id/1306842391/vector/best-for-slideshow-diagram-or-business-presentation-with-three-options-example-of.jpg?s=612x612&w=0&k=20&c=JaMhqSOpKjE8sr59VIOWOzc_kDDI3VKlDaqYyB1-bF8=" alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Others;