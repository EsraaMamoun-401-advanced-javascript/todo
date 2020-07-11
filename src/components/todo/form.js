import React from 'react';
import { Form, Button, Row, Col, Container, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import useForm from '../hooks/useForm';


function ToDoForm(props) {
    const [updateForm, submitForm, formData] = useForm(props.addTask);

    console.log('in Form formData===', formData);

    // const [status, setStatus] = React.useState(props.status || false);
    // props.addTask({
    // status: e.target.status.value,
    //   })
    return (
        <>
            <header><Navbar bg="light">
                <Navbar.Brand>Home</Navbar.Brand>
            </Navbar></header>
            <Container className="todoHeader" fluid>
                <Row>
                    <Col><h2>To Do List Manager {}
                    </h2></Col>
                </Row>
            </Container>
            <Form className="todoF" onSubmit={submitForm}>
                <Form.Group controlId='todo-description'>
                    <Form.Label>Add To Do Item:</Form.Label>
                    <Form.Control
                        as='input'
                        placeholder="Add To Do List Item"
                        rows='3'
                        onChange={(e) => {
                            updateForm('text', e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group controlId='todo-assignee'>
                    <Form.Label>Assigned To:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Assigned To"
                        onChange={(e) => {
                            updateForm('assignee', e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group controlId='todo-status'>
                    <Form.Label>Status:</Form.Label>
                    <Form.Check
                        onChange={(e) => {
                            updateForm('complete', e.target.checked);
                        }}
                        type='switch'
                        id='status-switch'
                        label={formData.complete ? 'Complete' : 'Pending'}
                    />
                </Form.Group>
                <Form.Group controlId='todo-difficulty'>
                    <Form.Label><span>Difficulty: &nbsp;</span></Form.Label>
                    <input
                        type='range'
                        defaultValue="0"
                        min={0}
                        max={5}
                        step={1}
                        onChange={(e) => {
                            updateForm('difficulty', e.target.value);
                        }}
                    />
                </Form.Group>

                <Button variant='primary' type='submit'>
                    Add Task
        </Button>
            </Form>
        </>
    );
}

export default ToDoForm;