import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleLogo from '../../images/googleLogo.png'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

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
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleuserLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)
    }
    const handleSignInWithGoogle = () => {

        signInWithGoogle();
    }

    if (user || user1) {
        navigate(from, { replace: true })

    }

    return (
        <div className='w-50 mx-auto my-5 border   p-5'>
            <h5>Please, Log In</h5>
            <Form onSubmit={handleuserLogin}>

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
            <div style={{ height: '2px' }} className='or d-flex my-4'>
                <div className='w-50 bg-secondary me-3 '>
                </div>
                <span style={{ marginTop: "-15px" }}>OR</span>
                <div className='w-50 bg-secondary ms-3'>
                </div>
            </div>
            <div>
                <Button onClick={handleSignInWithGoogle} variant='primary' className='w-100'>
                    <img width='60px' height=" 50px" src={googleLogo} alt="google-logo" />
                    Google Sign In
                </Button>
            </div>
        </div >
    );
};

export default Login;