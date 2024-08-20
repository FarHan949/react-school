import React from 'react';

const HomeCart = ({data}) => {

    return(

        <div className='font-serif shadow-lg bg-slate-100 rounded-3xl p-4'>
            <p className='font-semibold text-xl'>{data.name}</p>
            <p className='text-wrap mt-2'>{data.article}</p>
        </div>
    )
};

export default HomeCart;