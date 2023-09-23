import React from 'react';
import { Table } from 'reactstrap';
import Loader from '../../utilities/Loader';
import { Link } from 'react-router-dom';

const SearchBlood = ({ donors, group, loading }) => {

    if (loading) {
        return <Loader />
    }

    console.log(donors);

    return (
        <div className='row'>
            <div className='col-md-10 mx-auto'>
                <h2 className='mt-4 text-center'>  <span className='text-danger'> {group === 'A,p' ? 'A+' : group === 'A,n' ? 'A-' : group === 'B,p' ? 'B+' : group === 'B,n' ? 'B-' : group === 'AB,p' ? 'AB+' : group === 'AB,n' ? 'AB-' : group === 'O,p' ? 'O+' : group === 'O,n' ? 'O-' : group}</span> রক্তদাতার তালিকাঃ</h2>
                <Table hover responsive className='shadow'>
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
                </Table>
            </div>
        </div>
    );
};

export default SearchBlood;