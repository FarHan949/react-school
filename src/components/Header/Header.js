import React from 'react';
import './Header.css'
import { NavLink, Link } from 'react-router-dom';
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
                
               <NavLink to='/home' className={({isActive})=>`hover:bg-cyan-400 ${isActive ? "text-cyan-400" : "text-black"} p-1 rounded-xl text-black`}>Home</NavLink>
               <NavLink to='/classes' className={({isActive})=>` hover:bg-cyan-400 ${isActive ? "text-cyan-400" : "text-black"} p-1 rounded-xl  text-black`}>Classes</NavLink>
               <NavLink to='/about' className={({isActive})=> ` hover:bg-cyan-400 ${isActive ? "text-cyan-400" : "text-black"}  p-1 rounded-xl  text-black`}>About</NavLink>
               <NavLink to='/contact' className={({isActive})=> `hover:bg-cyan-400 ${isActive ? "text-cyan-400" : "text-black"} p-1 rounded-xl  text-black`}>Contact</NavLink>
           </nav>
        </div>    
    );
};





export default Header;