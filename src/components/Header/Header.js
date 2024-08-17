import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
         <div className='bg-cyan-600 pr-20 pl-20 flex justify-between items-center'>

              <div>
                   <h1 className='text-4xl text-yellow-100'>KinderKind</h1>
              </div>

             <nav className='m-0 p-8 gap-16 flex text-lg justify-center text-white'>
               <Link to='/home' className=' hover:bg-black p-1 rounded-xl text-yellow-200'>Home</Link>
               <Link to='/services' className=' hover:bg-black p-1 rounded-xl text-yellow-200'>Services</Link>
               <Link to='/about' className=' hover:bg-black p-1 rounded-xl text-yellow-200'>About</Link>
               <Link to='/contact' className=' hover:bg-black p-1 rounded-xl text-yellow-200'>Contact</Link>
           </nav>

        </div>    
    );
};

export default Header;