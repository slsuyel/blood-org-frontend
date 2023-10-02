// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Paginate from '../components/Paginate';
// import { callApi } from '../utilities/functions';

// const AllUsers = () => {

//     const [pageNo, setPageNo] = useState(1)
//     const [totalPages, setTotalPages] = useState()
//     const [per_page, setPer_page] = useState()
//     const [totalitems, setTotalitems] = useState()
//     const location = useLocation();
//     const [allUsers, setAllUsers] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, [location]);

//     const fetchData = async () => {
//         try {
//             const searchParams = new URLSearchParams(window.location.search);
//             const page = searchParams.get('page') ? searchParams.get('page') : 1
//             const data = await callApi("get", `/api/donated-users?page=${page}`);
//             setAllUsers(data.donated_users.data);
//             setTotalPages(data.links)
//             setPer_page(data.per_page)
//             setTotalitems(data.total)
//             if (page == 1) {
//                 setPageNo(1);
//             } else {
//                 setPageNo((page - 1) * data.per_page + 1);
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     console.log(allUsers);
//     return (
//         <div className="container-fluid my-5 py-2">
//             <h2 className='mt-4 text-center'>সকল <span className='text-danger'>রক্তদাতার</span> তালিকাঃ</h2>

//             <div className='row my-5'>



//                 <div className="col-lg-4 col-md-6 mb-5 ">

//                     <div className='mx-3 mb-5 llllllll'>
//                         <div className="bg-danger-subtle shadow text-center">
//                             <div className="group"> B+ </div>

//                             <Link to={`/donar/${''}`} className=' text-decoration-none '>
//                                 <div className="single-content-details">
//                                     <ul className='list-unstyled'>
//                                         <li className='bg-body mb-2'>
//                                             <div className='fs-2 text-decoration-none text-warning-emphasis'><i className="fa-solid fa-user"></i> Ashikur Rahman</div>
//                                         </li>
//                                         <li><i className="fa-solid fa-location-dot me-2"></i>ঠিকানাঃ তেতুঁলিয়া, পঞ্চগড়</li>
//                                         <li> জেলাঃ পঞ্চগড় </li>
//                                         <li>
//                                             <a className="text-decoration-none" href="tel:01751331330">যোগাযোগঃ 01751331330</a>
//                                         </li>
//                                         <li>&nbsp;</li>
//                                         <li className="bg-white fs-4 mb-2 text-danger">সর্বশেষ রক্তদান</li>

//                                         <div className='align-items-center d-flex gap-3 justify-content-center'>
//                                             <i className="text-blood fa-regular fa-calendar-check fs-2"></i>

//                                             <div>
//                                                 <li>10-March-2018</li>
//                                                 <li>2014 দিন আগে...</li>
//                                             </div>
//                                         </div>

//                                     </ul>
//                                 </div>
//                             </Link>
//                             <div className="bg-danger py-1">
//                                 <a href="tel:01751331330" className='text-decoration-none'>
//                                     <i className="fa fa-phone me-2" />
//                                     কল করুন
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//             <Paginate
//                 Totalpageprops={totalPages}
//                 per_page={per_page}
//                 totalitems={totalitems}
//                 route='/dashboard/student'
//             />

//         </div>

//     );
// };

// export default AllUsers;
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Paginate from '../components/Paginate';
import { callApi } from '../utilities/functions';
import Loader from '../utilities/Loader';
import useTitle from '../hooks/useTitle';

const AllUsers = () => {
    useTitle('সকল রক্তদাতার তালিকাঃ')

    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [per_page, setPer_page] = useState();
    const [totalitems, setTotalitems] = useState();
    const location = useLocation();
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading as true

    useEffect(() => {
        fetchData();
    }, [location]);

    const fetchData = async () => {
        try {
            const searchParams = new URLSearchParams(window.location.search);
            const page = searchParams.get('page') ? searchParams.get('page') : 1;
            const data = await callApi("get", `/api/donated-users?page=${page}`);
            setAllUsers(data.donated_users.data);
            setTotalPages(data.links);
            setPer_page(data.per_page);
            setTotalitems(data.total);
            if (page == 1) {
                setPageNo(1);
            } else {
                setPageNo((page - 1) * data.per_page + 1);
            }
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Set loading to false in case of an error
        }
    };


    if (loading) {
        return <Loader />
    }

    return (
        <div className="container-fluid my-5 py-2">
            <h2 className='mt-4 text-center'>সকল <span className='text-danger'>রক্তদাতার</span> তালিকাঃ</h2>
            <div className='row my-5'>
                {allUsers.map(user => (
                    <div key={user.id} className="col-lg-4 col-md-6 mb-5 ">
                        <div className='mx-3 mb-5 llllllll'>
                            <div className="bg-danger-subtle shadow text-center">
                                <div className="group"> {user.blood_group} </div>
                                <Link to={`/donar/${user.id}`} className=' text-decoration-none '>
                                    <div className="single-content-details">
                                        <ul className='list-unstyled mb-0'>
                                            <li className='bg-body mb-2'>
                                                <div className='fs-3 text-decoration-none text-warning-emphasis'><i className="fa-solid fa-user"></i> {user.name}</div>
                                            </li>
                                            <li><i className="fa-solid fa-location-dot me-2"></i>ঠিকানাঃ {user.union}, {user.thana}</li>
                                            <li> জেলাঃ {user?.district} </li>
                                            <li>
                                                <a className="text-decoration-none" href={`tel:${user.mobile}`}>যোগাযোগঃ {user.mobile}</a>
                                            </li>
                                            {/* <li>&nbsp;</li> */}
                                            <li className="bg-white fs-4 mb-2 text-danger">সর্বশেষ রক্তদান</li>
                                            <div className='align-items-center d-flex gap-3 justify-content-center'>
                                                <i className="text-blood fa-regular fa-calendar-check fs-2"></i>
                                                <div>
                                                    <li>{user.last_donate_date}</li>
                                                    <li>{
                                                        ((lastDonationDate) => {
                                                            const today = new Date();
                                                            const lastDonation = new Date(lastDonationDate);
                                                            const timeDifference = today - lastDonation;
                                                            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                                                            return daysDifference;
                                                        })(user.last_donate_date)
                                                    } দিন আগে...</li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </Link>

                                <div>
                                    {
                                        user.donation_logs.length > 0 ? <p className='fs-5 my-1'>মোট রক্ত দিয়েছেন
                                            <span> {user.donation_logs?.length} </span>


                                            বার</p> : ''
                                    }
                                </div>


                                <div className="bg-danger py-1">
                                    <a href={`tel:${user.mobile}`} className='text-decoration-none'>
                                        <i className="fa fa-phone me-2" />
                                        কল করুন
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Paginate
                Totalpageprops={totalPages}
                per_page={per_page}
                totalitems={totalitems}
                route='/dashboard/student'
            />
        </div>
    );
};

export default AllUsers;
