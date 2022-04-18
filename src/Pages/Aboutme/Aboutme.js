import React from 'react';
import pic from '../../images/mypic.JPG'

const Aboutme = () => {
    return (
        <div>
            <img className='d-flex justify-content-center mx-auto mt-3 w-25' src={pic} alt="" />
            <h4 className='text-center mt-3'>Ashraful Islam Alif</h4>

        </div>
    );
};

export default Aboutme;