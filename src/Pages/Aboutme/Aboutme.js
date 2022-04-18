import React from 'react';
import pic from '../../images/mypic.JPG'

const Aboutme = () => {
    return (
        <div>
            <img className='d-flex justify-content-center mx-auto mt-3 w-25' src={pic} alt="" />
            <h4 className='text-center mt-3'>Ashraful Islam Alif</h4>
            <p className='container text-center'>I had a dream last 2-3 years to become a Full-stack developer. But some I couldn't get such mentor to guide me. Alhamdulillah, with programming team my dream is stepping forward. My hard time already passed still passing my hard time. But my goal is to be a web developer without any excuse. InshaAllah I will do that if Allah wishes, how much hardwork I need to give I will give, I will see last. Beside that that, I have small dream, will learn app development next and give a good APP which will help to every people. Many things to, lets see what can achieve and what other waits.</p>
        </div>
    );
};

export default Aboutme;