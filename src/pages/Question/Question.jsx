import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { callApi } from '../../utilities/functions';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to delete this question.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel'
            });
            if (result.isConfirmed) {
                await callApi("delete", `/api/questions/${id}`);
                fetchData();
                Swal.fire('Deleted!', 'The question has been deleted.', 'success');
            }
        } catch (error) {
            console.error("Error deleting question:", error);
            Swal.fire('Error', 'An error occurred while deleting the question.', 'error');
        }
    };


    console.log(questions);
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                <div className='m-2 text-end'>
                    <Link className='border-dark btn btn-warning' to='/dashboard/question/add'>Add Questions</Link>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={question.id}>
                                <td>{index + 1}</td>
                                <td>{question.question_text}</td>
                                <td>
                                    <ul>
                                        {question.answers.map((answer, answerIndex) => (
                                            <li key={answerIndex}>{answer.answer_text}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <Button color="primary" onClick={() => handleEdit(question.id)}>
                                        Edit
                                    </Button>{" "}
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
