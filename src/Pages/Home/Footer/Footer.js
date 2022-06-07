import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer style={{ width: "100%", height: "200px" }} className=' '>
            <div className=' mx-auto mt-5  bg-dark text-white text-center p-4 '>
                <h2>Halal HomeMade Dishes</h2>
                <div className='row d-flex justify-content-between align-items-center '>
                    <div className='col-sm-6'>
                        <h4>Contact Us</h4>
                        <p>+8801671627637</p>
                        <p>+8801371627637</p>
                    </div>
                    <div className='col-sm-6'>
                        <h4>Address</h4>
                        <p>House: 65, Hilali king, Bangladesh</p>
                    </div>

                    <p>Copyright Ashraful Islam Alif @2022</p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;