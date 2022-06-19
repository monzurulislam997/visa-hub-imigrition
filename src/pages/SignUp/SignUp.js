import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import googleLogo from '../../images/googleLogo.png'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(' ');
    const [error, setError] = useState('');
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,


    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    console.log(user)

    const handleCreateUser = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password must have 6 charecter');
            return;
        }
        if (password !== confirmPassword) {
            setError("Password don't match")
        }
        createUserWithEmailAndPassword(email, password)
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    if (user || user1) {
        navigate('/home')
    }


    return (
        <div className='w-50 mx-auto my-5 border p-5'>
            <h1>Please ,Sign Up</h1>

            <div>
                <Button onClick={handleSignInWithGoogle} variant='primary' className='w-100'>
                    <img width='60px' height=" 50px" src={googleLogo} alt="google-logo" />
                    Google Sign In
                </Button>
            </div>
            {/* ------ password implementaion--------- */}
            <div style={{ height: '3px' }} className='or d-flex my-4'>
                <div className='w-50 bg-warning me-3 '>
                </div>
                <span style={{ marginTop: "-15px" }}>Or</span>
                <div className='w-50 bg-warning ms-3'>
                </div>
            </div>
            <div>
                <Form onSubmit={handleCreateUser}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controslId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <h5 className='text-danger '>{error} </h5>

                    <Button className='w-100' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <p>Already you member? <span><Link to='/login'>Log In</Link></span> </p>
                </Form>
            </div>

        </div>
    );
};

export default SignUp;