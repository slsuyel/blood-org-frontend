
import React from 'react';
import { Spinner, Button } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        </div>
    );
};

export default Loader;