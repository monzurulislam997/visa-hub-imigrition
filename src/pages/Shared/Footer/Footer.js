import React from 'react';
import './Footer.css'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className='footer w-100' style={{ backgroundColor: '#008080' }}>
            <p className='text-light text-center py-3' >Copyright &copy; {year}</p>
        </div>
    );
};

export default Footer;