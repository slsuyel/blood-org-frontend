import React, { useState, useEffect } from 'react';
import { callApi } from '../utilities/functions';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Exam = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const Navigate = useNavigate()
    useEffect(() => {
        async function fetchQuestions() {
            try {
                const res = await callApi("GET", "/api/exam/questions");
                setQuestions(res);
                initializeSelectedAnswers(res);
            } catch (error) {
                console.error("Error while calling API:", error);
            }
        }
        fetchQuestions();
    }, []);

    const initializeSelectedAnswers = (questions) => {
        const initialSelectedAnswers = {};
        questions.forEach((question) => {
            initialSelectedAnswers[question.id] = null;
        });
        setSelectedAnswers(initialSelectedAnswers);
    };

    const handleAnswerSelect = (questionId, answerId) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answerId,
        }));
    };

    const handleSubmit = async () => {
        const results = {};
        questions.forEach((question) => {
            const selectedAnswerId = selectedAnswers[question.id];
            const selectedAnswer = question.answers.find((answer) => answer.id === selectedAnswerId);
            results[question.question_text] = selectedAnswer ? selectedAnswer.answer_text : "Not answered";
        });
        const studentId = localStorage.getItem("studentId")
        const finalReult = { results: results, userId: studentId }
        // console.log(finalReult);
        const res = await callApi('POST', '/api/student/exams', finalReult);
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: `${res.message}`,
            showConfirmButton: false,
            timer: 2000,
        });
        Navigate('/studentdashboard')
    };

    return (
        <div style={{ backgroundColor: '#b8b8b89c' }}>
            <div className="container pb-3">
                <div className='d-flex fs-2 justify-content-between pt-4 text-decoration-underline text-primary'>
                    <p>Total Questions :{questions.length}</p>
                    <p>Time : {questions.length} minutes</p>
                </div>
                {questions?.map((question, index) => (
                    <div key={question.id}>
                        <p className='font-weight-normal fs-3 mb-2 text-capitalize'>{index + 1}. {question.question_text}</p>
                        <ul className='list-unstyled ms-2'>
                            {question.answers.map((answer) => (
                                <li key={answer.id}>
                                    <Form.Check
                                        type="radio"
                                        id={`question_${question.id}_${answer.id}`}
                                        name={`question_${question.id}`}
                                        label={answer.answer_text}
                                        checked={selectedAnswers[question.id] === answer.id}
                                        onChange={() => handleAnswerSelect(question.id, answer.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <Button variant="secondary" className="mt-3" onClick={handleSubmit}>Submit Exam</Button>
            </div>
        </div>
    );
};

export default Exam;
