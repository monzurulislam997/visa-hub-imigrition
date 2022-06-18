import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../../images/unique/img1.svg'
import img2 from '../../images/unique/img2.svg'
import img3 from '../../images/unique/img3.svg'
import img4 from '../../images/unique/img4.svg'
import './UniqueNeeds.css'
const UniqueNeeds = () => {
    return (
        <div style={{ color: "#0b133b" }} className='container'>
            <h1 className='text-center my-5  '> Flexible to meet your unique needs </h1>
            <CardGroup  >
                <Card className='uniqueCard'  >
                    <Card.Img variant="top" width="100px" height="90px" src={img1} />
                    <Card.Body >
                        <Card.Title>Instant
                            delivery</Card.Title>
                        <Card.Text >
                            Issue cards in a matter of seconds in bulk, upto 10,000 recipients.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='uniqueCard'>
                    <Card.Img variant="top" width="100px" height="90px" src={img2} />
                    <Card.Body>
                        <Card.Title>Reduced
                            costs</Card.Title>
                        <Card.Text>

                            Gain operational efficiencies with a more cost-effective payment solution.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='uniqueCard'>
                    <Card.Img variant="top" width="100px" height="90px" src={img3} />
                    <Card.Body>
                        <Card.Title> Personalize experience</Card.Title>
                        <Card.Text>

                            Custom-brand your virtual card and create lasting impressions.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='uniqueCard'>
                    <Card.Img variant="top" width="100px" height="90px" src={img4} />
                    <Card.Body>
                        <Card.Title>Custom denominations</Card.Title>
                        <Card.Text>

                            Send any amount in any denomination ($1, ¥125.5, ₹2500, £52)
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default UniqueNeeds;