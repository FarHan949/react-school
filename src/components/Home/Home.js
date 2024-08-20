import React from 'react';
import header from '../../img/header.png'
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    const data = useLoaderData()

    return (
        <div>

            <div>
                <HeaderCart></HeaderCart>
            </div>
              <div className='grid grid-cols-3 gap-5 m-8 p-5'>

            {
                data.map( data => <Cart
                    key={data.id}
                    data={data}></Cart>)
            }
              </div>
        </div>
    );
};



const HeaderCart = () =>{

    return (
        <div className='flex justify-between bg-cyan-600 h-screen'>
             <div className='ml-14 mt-20 font-sans'>
                 <h3 className='text-white text-2xl font-bold m-4'>Kids Learning Center</h3>
                 <h1 className='text-white text-5xl font-bold m-4'>New Approach to Kids Education</h1>
                 <p className='text-white text-wrap m-4 text-xl'>Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit. Ipsum dolor no justo
                     dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet 
                     et est justo dolore.</p>
             </div>
             <img className='w-2/5' src={header}></img>
        </div>
    )
}



const Cart = ({data}) =>{
    return(
       

        <div className='font-serif shadow-lg bg-slate-100 rounded-3xl p-4'>
            <p className='font-semibold text-xl'>{data.name}</p>
            <p className='text-wrap mt-2'>{data.article}</p>
        </div>
    )
}



export default Home;