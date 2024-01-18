import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Creating the LoginForm to be used in the App.js file
export default class LoginForm extends Component {
    render() {
        return (
            // Gave div a className for styling here with bootstrap and also in css file
            <div className='loginForm' style={{
                display: 'block',
                padding: 30
            }}>
                {/* Used React Bootstrap for the form components */}
                <Form>
                    <h3 className='formHeader'>Please Log In</h3>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="enter password" />
                    </Form.Group>
                    {/* Button put in its own div so that I could center it using Bootstrap */}
                    <div className='text-center'>
                        <Button variant="outline-dark" type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        );
    }
}
