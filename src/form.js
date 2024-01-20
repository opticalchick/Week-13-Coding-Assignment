import React from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Creating the LoginForm to be used in the App.js file
function LoginForm() {
    return (
        // Gave div a className for styling here with bootstrap and also in css file
        <div className='loginForm'>
            {/* Used React Bootstrap for the form components  */}
            <h3 className='formHeader'>Please Log In</h3>
            <Form>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='email' placeholder='enter email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type='password' placeholder='enter password' />
                </Form.Group>
                <div className='row mb-4'>
                    <div className='col'>
                        {/*  Checkbox  */}
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id='rememberMe' />
                            <label className='form-check-label' for='rememberMe'> Remember me </label>
                        </div>
                    </div>

                    <div className='col'>
                        {/* Simple link   */}
                        <div>
                            <p className='forgotPassword'><a href="#">Forgot password?</a></p>
                        </div>
                    </div>
                </div>
                {/* Button put in its own div so that I could center it using Bootstrap */}
                <div className='text-center'>
                    <Button variant='outline-dark' type='submit'>Submit</Button>
                </div>
            </Form>
        </div >
    );
}


export default LoginForm;