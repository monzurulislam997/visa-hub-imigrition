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

const Services = () => {
    return (
        <div className='container'>
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
                            </Card.Text>
                            <Button>Read More..</Button>
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
                            </Card.Text>
                            <Button>Read More..</Button>
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
                            </Card.Text>
                            <div className=' '><Button className=' w-100'>Read More..</Button></div>
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
                            </Card.Text>
                            <div className=' '><Button className=' w-100'>Read More..</Button></div>
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
                            </Card.Text>
                            <div className=' '><Button className=' w-100'>Read More..</Button></div>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>
        </div>
    );
};

export default Services;