import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=' mx-auto mt-5  bg-dark text-white text-center p-4 footer' >
            <div className='row d-flex justify-content-between align-items-center '>
                <div className='col-sm-6'>
                    <h4>Contact Us</h4>
                    <p>+8801671627637</p>
                </div>
                <div className='col-sm-6'>
                    <h4>Address</h4>
                    <p>House: 65, Hilali king, Bangladesh</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;