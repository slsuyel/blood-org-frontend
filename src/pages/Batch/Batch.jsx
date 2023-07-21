import React from 'react';
import { Table } from 'reactstrap';

const Batch = () => {
    // Dummy student data for demonstration purposes
    const studentsData = [
        { id: 1, name: 'John Doe', age: 20, grade: 'A' },
        { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
        { id: 3, name: 'Bob Johnson', age: 21, grade: 'A+' },
        // Add more student data here
    ];

    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Batch;
