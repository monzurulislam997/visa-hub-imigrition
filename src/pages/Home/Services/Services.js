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
                                Tourist visas are nonimmigrant visas for persons who want to enter the United States temporarily for business (visa category B-1), for tourism (visa category B.
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
                                This feature will at first be accessible only to applicants for long-stay student visas residing in a country where the visa application is outsourced to an
                                opportunity to all.   <h5>Price: 99$</h5>
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
                                A business visa is a type of travel authorization that allows an individual to visit a foreign nation for the purpose of conducting business. During the visit, they may engage in business activities that do not constitute work or employment.
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
                                What is a travel visa used for?
                                Travel visas allow the bearer to enter a foreign country for touristic and leisure purposes only and stay for a predetermined amount of time. These visas do not entitle the holder to work or engage in any business activities in the host country.
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
                                There are two types of family-based immigrant visas: Immediate Relative – these visas are based on a close family relationship with a U.S. citizen, such as a spouse, child or parent
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