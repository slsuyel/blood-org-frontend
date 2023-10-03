import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ReusableModal = ({ show, onHide, title, body }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const TutorialModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button className='original-button' onClick={handleShowModal}>
                <i className="fa-solid fa-play"></i> ভিডিও
            </button>

            <ReusableModal
                show={showModal}
                onHide={handleCloseModal}
                title="Tutorial Modal"
                body={
                    <iframe
                        width={'100%'}
                        height={315}
                        src="https://www.youtube.com/embed/cZ7jNYkhzn4?si=SXL7BQhTVjB3jT9W"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                    />

                }
            />
        </div>
    );
};

export default TutorialModal;
