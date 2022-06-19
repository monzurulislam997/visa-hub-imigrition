import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import logo from '../logo192.png';
import { Button } from 'react-bootstrap';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <>

            <Navbar sticky='top' collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" width='150px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav" >
                            <Nav.Link className='fs-5' href="/home" id="home">Home</Nav.Link>
                            <Nav.Link className=' fs-5 ' href="/service" id="service">Services</Nav.Link>
                            <Nav.Link className='fs-5 ' href="#blogs" id="blogs">Blogs</Nav.Link>
                            <Nav.Link className='fs-5 ' href="/about" id="about">About Me</Nav.Link>

                        </Nav>
                        {
                            user && <span className='text-warning me-2'>Hello,</span>
                        }  <span className='text-warning me-2'> {

                            user?.email.split('@', 1)

                        }</span>
                        <Nav>

                            {
                                user ? <Nav.Link as={Link} className="fs-5" id="login" to="/login">
                                    Log In
                                </Nav.Link> && <Button variant='primary' onClick={logOut}>Sign Out</Button> :
                                    <Nav.Link as={Link} className="fs-5" id="signup" to="/signup">
                                        Sign Up
                                    </Nav.Link>

                            }

                            {
                                !user && <Nav.Link as={Link} className="fs-5" id="login" to="/login">
                                    log in
                                </Nav.Link>


                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ backgroundColor: "#000", marginBottom: "-8px", color: 'orange' }}>
                <h3 className='text-center  '>VISA HUB IMIGRATION </h3>

            </div>

        </>
    );
};

export default Header;