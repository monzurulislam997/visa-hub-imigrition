import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error

    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const userLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true })

    }

    return (
        <div className='w-50 mx-auto my-5 border bg-secondary  p-5'>
            <h5>Please, Log In</h5>
            <Form onSubmit={userLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <h5 className="text-danger">
                    {error?.message}
                </h5>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>New here? <span><Link to='/signup'>Sign Up</Link></span> </p>
            </Form>
        </div >
    );
};

export default Login;