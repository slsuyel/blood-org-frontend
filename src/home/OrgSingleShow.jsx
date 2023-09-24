import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../utilities/functions';
import Loader from '../utilities/Loader';
import orgImg from '../assets/images/orgs/org-demo.jpg'
const OrgSingleShow = () => {
    const [org, setOrg] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await callApi('GET', `/api/organizations/single/${id}`);
                setOrg(res);
                // console.log(res);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <Loader />
    }

    console.log(id, org);
    return (

        <div className='container mt-5'>
            <div className=" pt-3">
                <div>
                    <h3 className='mt-3 text-center'> <i className="fa-solid fa-hand-holding-heart"></i>  {org?.name} </h3>
                    <p className=" font-size-sm mb-2 text-center">{org?.union}, {org?.thana}, {org?.district}</p>
                </div>
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={orgImg} alt="Admin" className="rounded-circle" width={140} />
                                    <div className="mt-3">
                                        <strong> আইডিঃ {org.id}</strong>

                                        <h4> নামঃ {org?.name}</h4>

                                        <div>

                                            <p className=" font-size-sm mb-0">ঠিকানাঃ {org?.union}, {org?.thana}, {org?.district}</p>

                                            <p className=" mb-0"> জেলাঃ {org?.district}</p>

                                        </div>
                                        <div className='mb-3'>
                                            <p className=" font-size-sm mb-0"> মোবাইলঃ {org?.mobile}</p>
                                            <p className=" font-size-sm mb-0"> ইমেইলঃ {org?.email}</p>
                                            <p className=" font-size-sm mb-0"> Whatsapp:  {org.whatsapp_number}</p>

                                        </div>






                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-8">
                        <h5 className='bg-danger-subtle fs-5 mb-0 py-2 rounded-0 rounded-top text-center text-custom'> {org?.name} এর অধিনে সর্বশেষ ১০ জন রক্তদাতার তালিকাঃ </h5>
                        <div className="card mb-3 table-responsive">


                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th className='text-center'>#</th>
                                        <th className='text-center'>Name</th>
                                        <th className='text-center'>Mobile</th>
                                        <th className='text-center'>Blood Group</th>
                                        <th className='text-center'>Last Donate</th>
                                        <th className='text-center'>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {org?.doners?.slice(0, 10).map((donor, index) => (
                                        <tr key={donor.id}>
                                            <td className='text-center'>{index + 1}</td>
                                            <td className='text-center'>{donor.name}</td>
                                            <td className='text-center'>{donor.mobile}</td>
                                            <td className='text-center'>{donor.blood_group}</td>
                                            <td className='text-center'>{donor.last_donate_date}</td>
                                            <td className='text-center'>{donor.district},{donor.thana},{donor.union}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div></div></div></div>



    );
};

export default OrgSingleShow;
