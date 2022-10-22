import React from 'react'

function Error({ title, message }) {
    return (
        <>
            <h1 className='text-3xl text-red-700 font-extrabold mx-auto my-5 text-center'>{title}</h1>
            <p className='text-lg text-red-600 font-bold mx-auto my-5 text-center' >{message}</p>
        </>
    )
}

export default Error