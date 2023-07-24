import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTeacher from '../../hooks/useTeacher';
import Loader from '../../utilities/Loader';
import { Form, Button } from 'react-bootstrap';
import { callApi } from '../../utilities/functions';
import { toast } from 'react-toastify';

const TeacherEdit = () => {
    const Navigate = useNavigate()

    const { id } = useParams();
    const { teacherData, isLoading } = useTeacher(id)
    if (isLoading) {
        return <Loader />
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
        };

        callApi("PUT", `/api/teachers/${id}`, formData)
            .then((response) => {
                toast.success('teacher updated successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                Navigate('/dashboard/teachers')
            })
            .catch((error) => {
                console.error("Error updating teacher:", error);
            });
    };

    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Form onSubmit={handleUpdate}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            defaultValue={teacherData?.name} />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            defaultValue={teacherData?.email} />
                    </Form.Group>
                    <Button type='submit' className='border-0 btn mb-3 py-2 rounded-0 w-100' style={{ backgroundColor: '#05BCCA' }}>
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default TeacherEdit;