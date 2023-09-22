import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { callApi } from '../../utilities/functions';
import Loader from '../../utilities/Loader'; // Import the Loader component
import { Table } from 'reactstrap';

const SearchBlood = () => {
    const { group, donarUnions } = useParams();
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true); // Set loading to true initially

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await callApi("get", `/api/filter-doners?blood_group=${group}&filter_by=union&search=${donarUnions}`);
                setDonors(response.doners.data);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchData();
    }, [group, donarUnions]);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className='my-5 pt-5 container-fluid'>


            <div className='row'>

                <div className='col-md-10 mx-auto'>

                    <h2 className='mt-4 text-center'> {donarUnions} এলাকার <span className='text-danger'> {group === 'A,p' ? 'A+' : group === 'A,n' ? 'A-' : group === 'B,p' ? 'B+' : group === 'B,n' ? 'B-' : group === 'AB,p' ? 'AB+' : group === 'AB,n' ? 'AB-' : group === 'O,p' ? 'O+' : group === 'O,n' ? 'O-' : group}</span> রক্তদাতার তালিকাঃ</h2>

                    {
                        donors.length > 0 ? <Table hover responsive className='shadow'>
                            <thead>
                                <tr className=' text-center text-nowrap'>
                                    <th className='bg-danger-subtle'>
                                        <i className="fa-solid fa-user"></i>  নামঃ
                                    </th>
                                    <th className='bg-danger-subtle'>
                                        <i className="fa-solid fa-location-dot"></i>  ঠিকানাঃ
                                    </th>
                                    <th className='bg-danger-subtle'>
                                        <i className="fa-regular fa-address-card"></i>   যোগাযোগঃ
                                    </th>
                                    <th className='bg-danger-subtle'>
                                        <i className="fa-regular fa-clock"></i> সর্বশেষ রক্তদানঃ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    donors.map(d =>
                                        <tr key={d.id}>
                                            <td className='border text-start text-nowrap fs-5'>
                                                <Link className=' text-capitalize text-decoration-none' to={`/donar/${d.id}`}>  {d.name}</Link>
                                            </td>
                                            <td className='border pt-3 text-center text-nowrap'>
                                                {d.union}, {d.thana}
                                            </td>
                                            <td className='border d-flex justify-content-around pt-3 text-center text-nowrap'>
                                                {/* {d.mobile} */}
                                                <a href="">
                                                    <i className="fs-4 fa-solid fa-phone-volume text-primary"></i>
                                                </a>
                                                <a href="">
                                                    <i className="fs-4 fa-brands fa-whatsapp text-success"></i>
                                                </a>
                                                <a href="">
                                                    <i className="fs-4 fa-regular fa-envelope text-danger"></i>
                                                </a>


                                            </td>
                                            <td className='border pt-3 text-center text-nowrap'>
                                                {d.last_donate_date}
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </Table> :
                         <div className='bg-white my-4 p-5 shadow text-danger'>

                            <h5 className='bg-danger-subtle py-3 text-center text-danger'>দুঃখিত ! কোন তথ্য পাওয়া যায়নি</h5>

                            <div className="row">

                                <div className="col-lg-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <i className="fa-solid fa-lock h4 mb-0 text-danger" />
                                        <h6 className="ml-3 mb-0"><a href="/donar/signin" className="text-danger text-decoration-none">রক্তদাতা লগইন করুন</a></h6>
                                    </div>
                                </div>{/* <i class="fa-solid fa-lock"></i> */}
                                <div className="col-lg-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <i className="fa fa-user h4 mb-0 text-danger" />
                                        <h6 className="ml-3 mb-0"><a href="/signup" className="text-danger text-decoration-none">রক্তদাতা রেজিস্ট্রেশন করুন</a></h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 pt-2">
                                    <div className="media align-items-center rounded shadow p-3">
                                        <i className="text-danger fs-4 fa-solid fa-users-rays"></i>
                                        <h6 className="ml-3 mb-0"><a href="/add-org" className="text-danger text-decoration-none">রক্তদাতা সংগঠন যোগ করুন</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }





                </div>



            </div>

        </div>
    );
};

export default SearchBlood;
