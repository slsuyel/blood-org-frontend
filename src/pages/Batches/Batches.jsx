import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Table } from 'reactstrap';
import Loader from '../../utilities/Loader';
import { callApi } from '../../utilities/functions';
import Swal from 'sweetalert2';
import Paginate from '../../components/Paginate';

const Batches = () => {
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [per_page, setPer_page] = useState()
    const [totalitems, setTotalitems] = useState()
    const location = useLocation();
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1
            const data = await callApi("get", `/api/teachers?perpage=10&page=${page}`);
            setTeachers(data.data);
            setTotalPages(data.links)
            setPer_page(data.per_page)
            setTotalitems(data.total)
            if (page == 1) {
                setPageNo(1);
            } else {
                setPageNo((page - 1) * data.per_page + 1);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleTeacherDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to delete the student. This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
            });
            if (result.isConfirmed) {
                await callApi("DELETE", `/api/teachers/${id}`);
                toast.success('Student deleted successfully!', {
                    position: toast.POSITION.TOP_RIGHT
                  });
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };
    // console.log(teachers);
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Table striped bordered responsive >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.length > 0 ? (
                            teachers.map((teacher, index) => (
                                <tr key={teacher.id}>
                                    <td className='text-nowrap'>{index + pageNo}</td>
                                    <td className='text-nowrap'>{teacher.name}</td>
                                    <td className='text-nowrap'>{teacher.email}</td>
                                    <td className='text-nowrap'>{teacher.role}</td>
                                    <td className='d-flex justify-content-around gap-2'>
                                        <Link className='btn btn-primary text-decoration-none' to={`/dashboard/student/show/${teacher.id}`}>Show</Link>

                                        <Link className='btn btn-info text-decoration-none' to={`/dashboard/student/edit/${teacher.id}`}>Edit</Link>

                                        <button
                                            onClick={() => handleTeacherDelete(teacher.id)}
                                            className='btn btn-danger'> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">
                                    <Loader />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Paginate
                    Totalpageprops={totalPages}
                    per_page={per_page}
                    totalitems={totalitems}
                    route='/dashboard/teachers'
                />
            </div>

        </div>

    );
};


export default Batches;