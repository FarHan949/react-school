import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { faRepublican } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = () => {
    
    return (
        
         <div className=' pr-20 pl-20 flex justify-between items-center'>
               
              <div className='flex gap-3 justify-center items-center'>
                   <FontAwesomeIcon className='text-cyan-600  h-14' icon={faRepublican}></FontAwesomeIcon>
                   <h1 className='text-4xl text-cyan-600 font-mono font-semibold'>KinderKind</h1>
              </div>

             <nav className='m-0 p-8 gap-16 flex text-lg justify-center text-white'>
                
               <Link to='/home' className={'hover:bg-cyan-400 active:bg-cyan-400 p-1 rounded-xl text-black'}>Home</Link>
               <Link to='/services' className=' hover:bg-cyan-400 active:after:bg-cyan-400 p-1 rounded-xl  text-black'>Services</Link>
               <Link to='/about' className=' hover:bg-cyan-400 active:after:bg-cyan-400 p-1 rounded-xl  text-black'>About</Link>
               <Link to='/contact' className=' hover:bg-cyan-400 active:after:bg-cyan-400 p-1 rounded-xl  text-black'>Contact</Link>
           </nav>
        </div>    
    );
};





export default Header;