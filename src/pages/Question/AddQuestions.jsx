import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { callApi } from '../../utilities/functions';
import Swal from 'sweetalert2';

const AddQuestions = () => {
    const [question_text, setQuestion_text] = useState('');
    const [answers, setAnswers] = useState(['']);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleQuestionChange = (event) => {
        setQuestion_text(event.target.value);
    };

    const handleAnswerOptionChange = (event, index) => {
        const updatedAnswerOptions = [...answers];
        updatedAnswerOptions[index] = event.target.value;
        setAnswers(updatedAnswerOptions);
    };

    const handleAddOption = () => {
        setAnswers([...answers, '']);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true)
        const data = { question_text, answers };
        try {
            await callApi('POST', '/api/questions', data);
            // console.log(data);
            setIsSubmitting(false)
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Question and answers have been added successfully.',
                showConfirmButton: false,
                timer: 2000, // Auto close after 2 seconds
            });
            setQuestion_text('');
            setAnswers(['']);
        } catch (error) {
            console.error('Error fetching data:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while adding the question and answers.',
            });
            setIsSubmitting(false)
        }
    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <Form className='col-10 mt-3 mx-auto'>
                    <Form.Group>
                        <Form.Label>Add question</Form.Label>
                        <Form.Control type="text" value={question_text} onChange={handleQuestionChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Add answer</Form.Label>
                        {answers.map((option, index) => (
                            <InputGroup className="mb-3" key={index}>
                                <InputGroup.Text id="basic-addon1">Option {index + 1}</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    value={option}
                                    onChange={(event) => handleAnswerOptionChange(event, index)}
                                    aria-label={`Option ${index + 1}`}
                                />

                                {index === answers.length - 1 && (
                                    <Button variant="link" className='col-12 text-end' onClick={handleAddOption}>
                                        <i className="btn btn-outline-primary fa-plus fa-solid"></i>
                                    </Button>
                                )}
                            </InputGroup>
                        ))}
                    </Form.Group>
                    <Button variant="primary"
                        disabled={isSubmitting}
                        onClick={handleSubmit}>

                        {isSubmitting ? 'Loading...' : 'Submit'}
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddQuestions;
