import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import BloodFinding from '../../utilities/BloodFinding';

const SearchBlood = ({ donors, group, loading, hide }) => {

    if (loading) {
        return <BloodFinding />
    }

    return (
        <>
            {
                !hide ? <div className='row w-100 mx-auto bg-white shadow my-3 py-3'>
                    <div className='col-md-8 mx-auto'>
                        <h2 className='mt-4 text-center'>  <span className='text-danger'> {group === 'A,p' ? 'A+' : group === 'A,n' ? 'A-' : group === 'B,p' ? 'B+' : group === 'B,n' ? 'B-' : group === 'AB,p' ? 'AB+' : group === 'AB,n' ? 'AB-' : group === 'O,p' ? 'O+' : group === 'O,n' ? 'O-' : group}</span> রক্তদাতার তালিকাঃ</h2>
                        <Table hover responsive className='shadow'>

                            {
                                donors.length > 0 ? <thead>
                                    <tr className=' text-center text-nowrap'>
                                        <th className='bg-danger-subtle'>
                                            ক্রমিকঃ
                                        </th>
                                        <th className='bg-danger-subtle'>
                                            <i className="fa-solid fa-user"></i>  নামঃ
                                        </th>
                                        {/* <th className='bg-danger-subtle'>
                                            <i className="fa-solid fa-location-dot"></i>  ঠিকানাঃ
                                        </th> */}
                                        <th className='bg-danger-subtle'>
                                            <i className="fa-regular fa-address-card"></i>   যোগাযোগঃ
                                        </th>
                                        <th className='bg-danger-subtle'>
                                            <i className="fa-regular fa-clock"></i> সর্বশেষ রক্তদানঃ
                                        </th>
                                    </tr>
                                </thead> : <th className='bg-danger-subtle py-3 text-center text-danger'>দুঃখিত ! কোন তথ্য পাওয়া যায়নি</th>
                            }

                            <tbody>
                                {
                                    donors.map((d, index) =>
                                        <tr key={d.id}>
                                            <td className='text-center'>{index + 1}</td>

                                            <td className='border text-start text-nowrap fs-5'>
                                                <div className='ms-4'>
                                                    <Link className='text-danger text-capitalize text-decoration-none' to={`/donar/${d.id}`}>

                                                        <h5><i className="fa-solid fa-user-check"></i> {d.name}</h5>

                                                        <p className='mb-0 mt-2 text-danger-emphasis text-sm'> <i className="fa-solid fa-location-dot"></i> {d.union}, {d.thana}</p>

                                                    </Link>


                                                </div>

                                            </td>
                                            {/*  <td className='border pt-3 text-center text-nowrap'> href="tel:01751331330"
                                                {d.union}, {d.thana}
                                            </td> */} 
                                            <td className="border text-center text-nowrap">

                                                <div className="d-flex gap-4 justify-content-center mt-3 text-center text-nowrap">
                                                    <a target='blank' href={`tel:${d.mobile}`}>
                                                        <i className="fs-4 fa-solid fa-phone-volume text-primary"></i>
                                                    </a>
                                                    <a target='blank' href={`https://wa.me/+88${d.whatsapp_number}`}>
                                                        <i className="fs-4 fa-brands fa-whatsapp text-success"></i>
                                                    </a>
                                                </div>
                                                {/*  <a href="">
                                                    <i className="fs-4 fa-regular fa-envelope text-danger"></i>
                                                </a> */}
                                            </td>
                                            {/* <td className='border pt-3 text-center text-nowrap'>
                                                {d.last_donate_date}
                                               
                                            </td> */}
                                            <td className='border pt-3 text-center text-nowrap'>
                                                {d.last_donate_date}
                                                <br />
                                                {
                                                    ((lastDonationDate) => {
                                                        const today = new Date();
                                                        const lastDonation = new Date(lastDonationDate);
                                                        const timeDifference = today - lastDonation;
                                                        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                                                        return daysDifference;
                                                    })(d.last_donate_date)
                                                } দিন আগে
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div> : ''


            }

        </>

    );
};

export default SearchBlood;