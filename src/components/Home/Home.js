import React from 'react';
import header from '../../img/header.png'
import { useLoaderData } from 'react-router-dom';
import HomeCart from '../HomeCart/HomeCart';



const HeaderCart = () =>{

    return (
        <div className='flex justify-between bg-cyan-600 h-screen'>
             <div className='ml-14 mt-20 font-sans'>
                 <h3 className='text-white text-3xl font-bold m-7'>Kids Learning Center</h3>
                 <h1 className='text-white text-5xl font-bold m-7'>New Approach to Kids Education</h1>
                 <p className='text-white text-wrap m-4 text-xl m-7'>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit. Ipsum dolor no justo
                     dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet 
                     et est justo dolore.</p>
             </div>
             <img className='w-2/5' src={header}></img>
        </div>
    )
}





const Home = () => {

    const data = useLoaderData()

    return (
        <div>

            <div>
                <HeaderCart></HeaderCart>
            </div>
              <div className='grid grid-cols-3 gap-5 m-8 p-5'>

            {
                data.map( data => <HomeCart
                    key={data.id}
                    data={data}></HomeCart>)
            }
              </div>
        </div>
    );
};



export default Home;