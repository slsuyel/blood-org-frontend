import React from 'react';
import img from '../assets/images/orggg.jpg'

const data = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 1000) + 1
);
const Organizations = () => {
    return (
        <div className='container mx-auto w-100 mt-5 pt-5'>
            <div className='row'>
                {data?.map((d, index) => (
                    <div key={index} className=" col-md-4 mb-5" >
                        <div className="card bggg" >

                            <div className='text-center'>
                                <img src='https://admin.roktobondhu.com/storage/files/received_6935558146476387.jpeg' alt=""
                                    height={'100px'} className=" mx-auto mb-2" />
                            </div>
                            <div className=' text-center' style={{ marginBottom: '125px' }}>
                                <h4 className=' text-center'>সুরাহা ব্লাড ফাউন্ডেশন</h4>
                                <h5 className="fs-6 mb-0 text-secondary">মনোহরদী, নরসিংদী</h5>
                                <a className="my-1 text-decoration-none" href="tel:01761698300">
                                    01761698300
                                </a>
                            </div>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Organizations;