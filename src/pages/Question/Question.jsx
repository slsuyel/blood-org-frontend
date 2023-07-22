import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { callApi } from '../../utilities/functions';

const Question = () => {
    const [questions, setQuestions] = useState([]);

    const fetchData = async () => {
        try {
            const data = await callApi("get", "/api/questions");
            setQuestions(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (id) => {
        console.log(`Edit question with id: ${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await callApi("delete", `/api/questions/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting question:", error);
        }
    };
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={question.id}>
                                <td>{index + 1}</td>
                                <td>{question.text}</td>
                                <td>
                                    <Button color="primary" onClick={() => handleEdit(question.id)}>
                                        Edit
                                    </Button>{' '}
                                    <Button color="danger" onClick={() => handleDelete(question.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default Question;
