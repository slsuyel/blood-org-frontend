import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { callApi } from '../../utilities/functions';
import { Link, useLocation } from 'react-router-dom';
import Paginate from '../../components/Paginate';
import Loader from '../../utilities/Loader';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
const Students = () => {
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [per_page, setPer_page] = useState()
    const [totalitems, setTotalitems] = useState()
    const location = useLocation();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1
            const data = await callApi("get", `/api/students?perpage=5&page=${page}`);
            setStudents(data.data);
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

    const handleStudentDelete = async (id) => {
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
                await callApi("DELETE", `/api/students/${id}`);
                toast.success('Student deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                fetchData();
            }
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>founder name</th>
                            <th>company name</th>
                            <th>founder_email</th>
                            <th>founder_phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{index + pageNo}</td>
                                    <td>{student.founder_name}</td>
                                    <td>{student.company_name}</td>
                                    <td>{student.founder_email}</td>
                                    <td>{student.founder_phone}</td>
                                    <td className='d-flex justify-content-around gap-2'>
                                        <Link className='btn btn-primary text-decoration-none' to={`/dashboard/student/show/${student.id}`}>Show</Link>

                                        <Link className='btn btn-info text-decoration-none' to={`/dashboard/student/edit/${student.id}`}>Edit</Link>

                                        <button
                                            onClick={() => handleStudentDelete(student.id)}
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
                route='/dashboard/student'
            />
        </div>
        </div >

        // <div className='content-wrapper'>
        //     <div className="content-header">
        //         <Table striped bordered>
        //             <thead>
        //                 <tr>
        //                     <th>#</th>
        //                     <th>founder name</th>
        //                     <th>company name</th>
        //                     <th>founder_email</th>
        //                     <th>founder_phone</th>
        //                     <th>Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {students.length > 0 ? (
        //                     students.map((student, index) => (
        //                         <tr key={student.id}>
        //                             <td>{index + pageNo}</td>
        //                             <td>{student.founder_name}</td>
        //                             <td>{student.company_name}</td>
        //                             <td>{student.founder_email}</td>
        //                             <td>{student.founder_phone}</td>
        //                             <td className='d-flex justify-content-around flex-wrap'>
        //                                 <Link className='btn btn-primary text-decoration-none' to={`/dashboard/student/show/${student.id}`}>Show</Link>

        //                                 <Link className='btn btn-info text-decoration-none' to={`/dashboard/student/edit/${student.id}`}>Edit</Link>

        //                                 <button
        //                                     onClick={() => handleStudentDelete(student.id)}
        //                                     className='btn btn-danger'> Delete
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     ))
        //                 ) : (
        //                     <Loader />
        //                 )}
        //             </tbody>

        //         </Table>
        //         <Paginate
        //             Totalpageprops={totalPages}
        //             per_page={per_page}
        //             totalitems={totalitems}
        //         />
        //     </div>
        // </div>
    );
};

export default Students;
