import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    const data = useLoaderData()

    const element = <FontAwesomeIcon icon={faCoffee} ></FontAwesomeIcon>
    return (
        <div>
            
            <h1 className='text-4xl text-center text-green-800'>Hello world {data.length}
              {element}
            </h1>
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


const Cart = ({data}) =>{
    return(
       

        <div className='font-serif shadow-lg bg-slate-100 rounded-3xl p-4'>
            <p className='font-semibold text-xl'>{data.name}</p>
            <p className='text-wrap mt-2'>{data.article}</p>
        </div>
    )
}

export default Home;