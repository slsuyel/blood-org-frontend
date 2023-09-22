import React from 'react';
import useOrg from '../../hooks/useOrg';
import Loader from '../../utilities/Loader';

const SingleOrg = () => {
    const id = localStorage.getItem('orgId')
    const { org, isLoading } = useOrg(id)

    if (isLoading) {
        return <Loader />
    }
    console.log(org);

    return (

        <div className='content-wrapper'>
            <div className="content-header">
                <div>
                    <h4 className='my-3 text-center'>  Your Organization Profile</h4>
                </div>
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://admin.roktobondhu.com/storage/files/received_6935558146476387.jpeg" alt="Admin" className="rounded-circle" width={140} />
                                    <div className="mt-3">
                                        <strong>ID:</strong> {org.id}

                                        <h4>সংগঠনের নামঃ {org?.name}</h4>

                                        <div>

                                            <p className=" font-size-sm mb-0">ঠিকানাঃ {org?.union}, {org?.thana}, {org?.district}</p>

                                        </div>
                                        <div className='mb-3'>
                                            <p className=" font-size-sm mb-0"> মোবাইলঃ {org?.mobile}</p>
                                            <p className=" font-size-sm mb-0"> ইমেইলঃ {org?.email}</p>
                                            <p className=" font-size-sm mb-0"> Whatsapp:   {org.whatsapp_number}</p>

                                        </div>






                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3 table-responsive">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Blood Group</th>
                                        <th>Last Donate</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {org?.doners?.map((donor) => (
                                        <tr key={donor.id}>
                                            <td>{donor.name}</td>
                                            <td>{donor.mobile}</td>
                                            <td>{donor.blood_group}</td>
                                            <td>{donor.last_donate_date}</td>
                                            <td>{donor.district},{donor.thana},{donor.union}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div></div></div></div>



    );
};

export default SingleOrg;