import React from 'react';
import img from '../../images/hhhhhhh.JPG';
import './About.css'
const About = () => {
    return (
        <div style={{ backgroundColor: '#f1f1f1' }} className='d-flex w-50 mx-auto my-5 p-5'>

            <div className='me-5'>
                <img className='rounded' width="200" height='250' src={img} alt="" />
            </div>
            <div className='px-5' style={{ backgroundColor: '#FFF' }}>
                <h1>About Me</h1>
                <h4>My Goal</h4>
                <p>I always dream to be a <span className='text-info'>doctor</span>.But somehow my dream destroyed.From 2020, I have been starting web desgin.Now I am on the verge of success.Always i try to keep in my mind that miles to go before i sleep.Now my dream is to be a full stack developer.I will do this by hook or crook.</p>
            </div>

        </div>
    );
};

export default About;