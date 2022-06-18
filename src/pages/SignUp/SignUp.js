import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className='w-50 mx-auto my-5 border p-5'>
            <h1>Please ,Sign Up</h1>

            <div>
                <button>Google Sign In</button>
            </div>
            <div style={{ height: '3px' }} className='or d-flex my-4'>
                <div className='w-50 bg-info me-3 '>

                </div>
                <span style={{ marginTop: "-15px" }}>Or</span>
                <div className='w-50 bg-info ms-3'>

                </div>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>Already you member? <span><Link to='/login'>Log In</Link></span> </p>
                </Form>
            </div>

        </div>
    );
};

export default SignUp;