import { faRepublican, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-96 w-69 mt-20 bg-cyan-600 opacity-8 grid grid-flow-col p-16 grid-cols-4'>


          <div className='m-5'>
                <div className='flex gap-5 text-2xl ml-5'>
                    <FontAwesomeIcon className='text-4xl text-cyan-300' icon={faRepublican}></FontAwesomeIcon>
                    <h3 className='text-cyan-100 font-mono'>KinderKind</h3>
                </div> 
                <div className='m-5 text-white'>
                    <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, 
                        elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                </div>
          </div>


          <div className='m-5 ml-16'>
            <h2 className='text-2xl font-mono text-cyan-100'>Get In Touch</h2>

            <div className='mt-3'>
            <div className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <p className='text-white'>Address</p>
            </div>
            <p className='text-white'>Khaja Dawon 1st lane, Lalbag, Dhaka</p>
            </div>
            <div className='mt-3'>
            <div className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p className='text-white'>Email</p>
            </div>
            <p className='text-white'>kinderkind@gmail.com</p>
            </div>
            <div className='mt-3'>
            <div className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <p className='text-white'>Phone</p>
            </div>
            <p className='text-white'>+8801789568440</p>
            </div>

            
          </div>


          
          <div>dada</div>
        </div>
    );
};

export default Footer;