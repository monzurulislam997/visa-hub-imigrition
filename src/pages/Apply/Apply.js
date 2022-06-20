import React from 'react';
import { Button } from 'react-bootstrap';
import img1 from '../../images/apply/apply1.png'
import img2 from '../../images/apply/apply2.png'
import img3 from '../../images/apply/apply3.png'
import arrow1 from '../../images/apply/arrow_01.png'
import arrow2 from '../../images/apply/arrow_02.png';
import redArrow from '../../images/apply/redArrow.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Apply.css'

const Apply = () => {
    const handleApply = () => {
        toast("Currently we aren't abailable")
    }

    return (
        <div className='mb-5'>
            <h5 className='text-primary font-weight-bold text-center bg-dark p-2'>VISA APPLYING PROCESS</h5>
            <div className='mx-auto w-50'>
                <div className='d-flex my-5 '>

                    <div className="apply ">  <img className='m-4' src={img1} width='130px' alt="" />
                        <h3 className='text-secondary mt-4'>Apply Online</h3>
                        <p className='text-secondary'>Secure online application saves time and check status online.</p>
                    </div>


                    <div className=' arrow '> <img src={arrow1} alt="" /></div>


                    <div className="apply ">  <img className='m-4' src={img2} width='130px' alt="" />
                        <h3 className='text-secondary mt-4'>Submit documents</h3>
                        <p className='text-secondary'>Submit your application with required documents at Indian Misison/Visa collection centre.</p>
                    </div>


                    <div className="arrow ">    <img src={arrow2} alt="" /></div>


                    <div className="apply ">  <img className='m-4' src={img3} width='130px' alt="" />
                        <h3 className='text-secondary mt-4'>Receive passport, visa</h3>
                        <p className='text-secondary'>Collect your passport/visa from Bangladeshi Mission/Collection Centre or by post.</p>
                    </div>
                </div>
                <div className=' w-50 apply-now mx-auto'>
                    <Button onClick={handleApply} className='mx-auto mt-5 ps-5 ' >Apply Now
                        <img className='ms-2' src={redArrow} width="60px" height="30px" alt="" />
                    </Button>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Apply;