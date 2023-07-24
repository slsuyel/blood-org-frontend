
// import React from 'react';
// import { Spinner, Button } from 'react-bootstrap';

// const Loader = () => {
//     return (
//         <div className='content-wrapper'>
//             <div className="content-header">
//                 <Button variant="primary" disabled>
//                     <Spinner
//                         as="span"
//                         animation="grow"
//                         size="sm"
//                         role="status"
//                         aria-hidden="true"
//                     />
//                     Loading...
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default Loader;
import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className="custom-loadingio-spinner mx-auto w-100"> 
            <div className="ldio-sy4uj1dbwje">
                <div style={{ left: '38px', top: '38px', animationDelay: '0s' }}></div>
                <div style={{ left: '80px', top: '38px', animationDelay: '0.125s' }}></div>
                <div style={{ left: '122px', top: '38px', animationDelay: '0.25s' }}></div>
                <div style={{ left: '38px', top: '80px', animationDelay: '0.875s' }}></div>
                <div style={{ left: '122px', top: '80px', animationDelay: '0.375s' }}></div>
                <div style={{ left: '38px', top: '122px', animationDelay: '0.75s' }}></div>
                <div style={{ left: '80px', top: '122px', animationDelay: '0.625s' }}></div>
                <div style={{ left: '122px', top: '122px', animationDelay: '0.5s' }}></div>
            </div>
        </div>
    );
};

export default Loader;

