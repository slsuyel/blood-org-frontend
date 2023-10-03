// PopupModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import TutorialModal from './TutorialModal';

const PopupModal = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 5000);
        return () => {
            setShow(false);
        };
    }, []);

    return (
        <div className='container row mx-auto w-100'>
            <Modal className='' show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <div className='bg-danger fs-3 fw-bold rounded-5 text-center w-100'>  <i className="fa-regular fa-circle-check"></i> বেটা ভার্সন</div>
                </Modal.Header>
                <Modal.Body >
                    <h4>লক্ষ করুনঃ</h4>
                    <p>

                        <i className="fa-solid fa-check-double"></i>  একজন রক্তদাতা নিজে রেজিস্ট্রেশন করতে পারবে এবং কোনো রক্তদাতা বা সামাজিক সংগঠন রেজিস্ট্রেশন করতে পারবে।</p>

                    <p><i className="fa-solid fa-check-double"></i> একজন রক্তদাতা রেজিস্ট্রেশন করার পর তার প্রোফাইলে গিয়ে সর্বশেষ রক্তদানের তথ্য অবশ্যই আপডেট করতে হবে, আপডেট করলে তার তথ্য ওয়েবসাইটে দেখাবে।</p>

                    <TutorialModal />

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PopupModal;
