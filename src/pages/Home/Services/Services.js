import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../../images/services/service1.jpg';
import img2 from '../../../images/services/service2.jpg';
import img3 from '../../../images/services/service3.jpg';
import img4 from '../../../images/services/service4.jpg';
import img5 from '../../../images/services/service5.jpg'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate()
    const handleGoCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div className='container'>
            <h2 className='text-center mt-2'>Services</h2>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Tourist visa</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                <h5>Price: 522$</h5>
                            </Card.Text>
                            <Button className='w-100' onClick={handleGoCheckOut} >Check Out</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Student Visa</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                <h5>Price: 99$</h5>
                            </Card.Text>
                            <Button className='w-100' onClick={handleGoCheckOut}>Check Out</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Bussiness Visa</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                <h5>Price: 299$</h5>
                            </Card.Text>
                            <Button onClick={handleGoCheckOut} className=' w-100'>Check Out</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>Travell Visa</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                <h5>Price: 799$</h5>
                            </Card.Text>
                            <Button onClick={handleGoCheckOut} className=' w-100'>Check Out</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card >
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Family Visa</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                                <h5>Price: 766$</h5>
                            </Card.Text>
                            <Button onClick={handleGoCheckOut} className=' w-100'>Check Out</Button>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>
        </div>
    );
};

export default Services;