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
             <div className='ml-14 mt-20'>
                 <h3 className='text-white text-xl font-serif m-4'>Kids Learning Center</h3>
                 <h1 className='text-white text-4xl font-serif font-bold m-2'>New Approach to Kids Education</h1>
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