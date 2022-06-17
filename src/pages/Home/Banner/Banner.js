import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../images/Banner/slider1.jpg'
import img2 from '../../../images/Banner/slider2.jpg'
import img3 from '../../../images/Banner/silder3.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt='First slide'
                    />
                    <Carousel.Caption >
                        <h1>IMIGRITION & VISA CONSALTANTS</h1>
                        <Button style={{ color: '#000', fontSize: "20px", fontWeight: "700" }} variant="warning" className="w-50 ">START BOOKING</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h1>WANT TO STUDY ABROAD?</h1>
                        <Button style={{ color: '#000', fontSize: "20px", fontWeight: "700" }} variant="warning" className="w-50 ">READ THE SYSTEM</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption >
                        <h1>WORLDS MOST TRUSTED IMIGRITION AGENCY </h1>
                        <Button style={{ color: '	#000', fontSize: "20px", fontWeight: "700" }} variant="warning" className="w-50 ">STUDENTS FEEDBACKS</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Banner;