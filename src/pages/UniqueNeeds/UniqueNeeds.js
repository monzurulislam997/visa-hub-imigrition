import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../../images/unique/img1.svg'
import img2 from '../../images/unique/img2.svg'
import img3 from '../../images/unique/img3.svg'
import img4 from '../../images/unique/img4.svg'
const UniqueNeeds = () => {
    return (
        <div style={{ color: "#0b133b" }} className='container'>
            <h1 className='text-center'> Flexible to meet your unique needs </h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" width="100px" height="90px" src={img1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" width="100px" height="90px" src={img2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" width="100px" height="90px" src={img3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" width="100px" height="90px" src={img4} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default UniqueNeeds;