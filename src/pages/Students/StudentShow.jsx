import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../utilities/Loader";
import useStudent from "../../hooks/useStudent";
import { Rating } from "@smastrom/react-rating";
import { callApi } from "../../utilities/functions";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

const StudentShow = () => {
    const { id } = useParams();
    const { studentData: initialStudentData, isLoading } = useStudent(id);
    const [studentData, setStudentData] = useState(initialStudentData);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        setStudentData(initialStudentData);
    }, [initialStudentData]);

    useEffect(() => {
        if (studentData) {
            setRating(Number(studentData.rating));
        }
    }, [studentData]);

    if (isLoading || !studentData) {
        return <Loader />;
    }

    const handleSubmitStar = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to submit the ratings?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit!',
        }).then((result) => {
            if (result.isConfirmed) {
                callApi("POST", `/api/students/set/ratings/${id}`, { rating: rating })
                    .then((response) => {
                        // Refetch student data after successful submission
                        callApi("GET", `/api/students/${id}`)
                            .then((data) => {
                                setStudentData(data);
                                toast.success('submit ratings successfully!', {
                                    position: 'top-right',
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };



    const {
        founder_name,
        founder_email,
        founder_phone,
        founder_gender,
        company_name,
        location,
        business_category,
        short_note,
        website_url,
        employee_number,
        formation_of_company,
        company_video_link,
        facebook_link,
        youtube_link,
        linkedin_link,
        attachment_file,
    } = studentData;

    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <h2 className='text-center my-3'>Student Information</h2>
                <div className="row">
                    <div className="col-md-6  d-flex flex-wrap ">
                        <p className="mx-4 border-end border-dark pe-4">Founder Name: {founder_name}</p>
                        <p className="mx-4 border-end border-dark pe-4">Founder Email: {founder_email}</p>
                        <p className="mx-4 border-end border-dark pe-4">Founder Phone: {founder_phone}</p>
                        <p className="mx-4 border-end border-dark pe-4">Founder Gender: {founder_gender}</p>

                        <p className="mx-4 border-end border-dark pe-4">Company Name: {company_name}</p>
                        <p className="mx-4 border-end border-dark pe-4">Location: {location}</p>
                        <p className="mx-4 border-end border-dark pe-4">Business Category: {business_category}</p>
                        <p className="mx-4 border-end border-dark pe-4">Short Note: {short_note}</p>
                        <p className="mx-4 border-end border-dark pe-4">Website Url: {website_url}</p>
                        <p className="mx-4 border-end border-dark pe-4">Employee Number: {employee_number}</p>
                        <p className="mx-4 border-end border-dark pe-4">Formation Of Company: {formation_of_company}</p>
                        <p className="mx-4 border-end border-dark pe-4">Company Video link: {company_video_link}</p>
                        <p className="mx-4 border-end border-dark pe-4">Company Facebook link: {facebook_link}</p>
                        <p className="mx-4 border-end border-dark pe-4">Company Youtube link: {youtube_link}</p>
                        <p className="mx-4 border-end border-dark pe-4">Company Linkedin link: {linkedin_link}</p>
                        <p className="mx-4 border-end border-dark pe-4">Attachment (company profile/pitch deck): {attachment_file}</p>
                    </div>
                    <div className="col-md-6 card">
                        <h4 className="text-center">All questions and answer : {rating}</h4>
                        <div className="border d-flex gap-3 justify-content-end my-3 p-2">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                onChange={setRating}
                                isDisabled={Number(studentData.rating) > 0}
                            />
                            <button onClick={handleSubmitStar}
                                disabled={Number(studentData.rating) > 0}
                                className="btn btn-outline-success">Submit</button>
                        </div>
                        <div>
                            <ol> {studentData?.exams?.map(exam => <>
                                <li key={exam?.question}>{exam?.question}</li>
                                <span>ans : {exam?.ans}</span>
                            </>)}

                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentShow;
