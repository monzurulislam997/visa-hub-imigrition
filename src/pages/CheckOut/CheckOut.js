import React from 'react';
import img from '../../images/thanks.jpg'
import gif from '../../images/check.gif'
const CheckOut = () => {
    return (
        <div>
            <h2 className='text-center text-danger'> Check out your  needs</h2>
            <div className="d-flex">
                <img src={img} className="mt-5" alt="" />

                <div className='rounded p-5'>
                    <h2 className='mt-5'>The services are being shown which you have choosed.Just wait for a while.</h2>
                    <img src={gif} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CheckOut;