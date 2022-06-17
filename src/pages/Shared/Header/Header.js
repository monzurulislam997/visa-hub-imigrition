import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import logo from '../logo192.png'
import './Header.css'
const Header = () => {
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
                            <Nav.Link className='fs-5' href="home#expertsy" id="home">Home</Nav.Link>
                            <Nav.Link className=' fs-5 ' href="home#services" id="service">Services</Nav.Link>
                            <Nav.Link className='fs-5 ' href="#blogs" id="blogs">Blogs</Nav.Link>
                            <Nav.Link className='fs-5 ' href="#blogs" id="about">About Me</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} as={Link} className="fs-5" id="login" to="/login">
                                Log In
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} className="fs-5" id="signup" to="/signup">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;