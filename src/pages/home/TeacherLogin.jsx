import React from "react";
import { Table } from 'react-bootstrap';


export default function TeacherLogin() {
    const data = [
        { subject: 'Graphic Design', marks: '70/50', date: '07/22/2023', status: 'Incomplete' },
        { subject: 'Graphic Design', marks: '70/50', date: '07/22/2023', status: 'Complete' },
        { subject: 'Graphic Design', marks: '70/50', date: '07/22/2023', status: 'Complete' },
        { subject: 'Graphic Design', marks: '70/50', date: '07/22/2023', status: 'Running' },
    ];



    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="row my-2">

                    <div className="col-md-7 ">
                        <div className="align-items-center d-flex gap-2 justify-content-between">
                            <div className="bg-white border  p-3 px-4 rounded-3 shadow">
                                <h5>Total Classes</h5>
                                <div className="d-flex gap-4 justify-content-between text-center">
                                    <div><h6>Total</h6>
                                        <span className="fs-4 fw-bold ">100</span></div>
                                    <div><h6>Remaining</h6>
                                        <span className="fs-4 fw-bold text-primary">50</span></div>

                                </div>
                            </div>
                            <div className="bg-white border  p-3 px-4 rounded-3 shadow">
                                <h5 className="text-nowrap">Total Workshop</h5>
                                <div className="d-flex gap-4 justify-content-between text-center">
                                    <div><h6>Total</h6>
                                        <span className="fs-4 fw-bold ">100</span></div>
                                    <div><h6>Remaining</h6>
                                        <span className="fs-4 fw-bold text-primary">50</span></div>

                                </div>
                            </div>
                            <div className="bg-white border  p-3 px-4 rounded-3 shadow">
                                <h5>Rank</h5>
                                <div className="d-flex gap-4 justify-content-between text-center">
                                    <div><h6>Total</h6>
                                        <span className="fs-4 fw-bold ">100</span></div>
                                    <div><h6>Remaining</h6>
                                        <span className="fs-4 fw-bold text-primary">50</span></div>

                                </div>
                            </div>



                        </div>
                        <div className="my-2">
                            <h5>My Assignment</h5>

                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Marks</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.subject}</td>
                                            <td>{item.marks}</td>
                                            <td>{item.date}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>


                    </div>




                    <div className="col-md-5"> </div>
                </div>

            </div>

        </div>


    );
}
