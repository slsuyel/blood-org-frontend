import React, { useEffect } from 'react';

const Partner = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="zoom-in-down" className='my-5 w-100 mx-auto'>
            <h1 className='text-center mb-4'>Our Partner</h1>

            <div className='d-flex flex-wrap gap-4 justify-content-center mb-5'>
                <img className='bg-white p-2 rounded-3 shadow-lg' src="https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG16.png" alt="" width={"180px"} height={'70px'} />
                <img className='bg-white p-2 rounded-3 shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUdIlvJ-yx1A-G1jnrZ-Parybh7I2g2zAe40sW_9I-hBBTgFa1OGsUN2mVkSrdY2Xm5U&usqp=CAU" alt="" width={"180px"} height={'70px'} />
                <img className='bg-white p-2 rounded-3 shadow-lg' src="https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG16.png" alt="" width={"180px"} height={'70px'} />
                <img className='bg-white p-2 rounded-3 shadow-lg' src="https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG16.png" alt="" width={"180px"} height={'70px'} />
                <img className='bg-white p-2 rounded-3 shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUdIlvJ-yx1A-G1jnrZ-Parybh7I2g2zAe40sW_9I-hBBTgFa1OGsUN2mVkSrdY2Xm5U&usqp=CAU" alt="" width={"180px"} height={'70px'} />
            </div>
        </div>
    );
};

export default Partner;