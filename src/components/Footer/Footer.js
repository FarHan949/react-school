import { faRepublican } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-96 w-69 bg-cyan-600 opacity-8 grid grid-flow-col p-16 grid-cols-4'>


          <div className='m-5'>
                <div className='flex gap-5 text-2xl ml-5'>
                    <FontAwesomeIcon className='text-4xl text-cyan-300' icon={faRepublican}></FontAwesomeIcon>
                    <h3 className='text-white font-mono'>KinderKind</h3>
                </div> 
                <div className='m-5 text-white'>
                    <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, 
                        elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                </div>
          </div>


          <div>asda</div>


          
          <div>dada</div>
        </div>
    );
};

export default Footer;