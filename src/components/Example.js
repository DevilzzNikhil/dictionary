import React from 'react'

function Example({ response  }) {
    return (
        < div className="text-white  bg-slate-600 my-4 normal-case py-2 px-2 rounded-md">
            <h1 className='uppercase font-bold text-2xl text-center'>Examples</h1>
            <hr className='h-1/2 bg-slate-900' />
            <ul className='my-3  list-inside list-decimal'>
                {response.meanings
                    .map(meaning => meaning.definitions
                    .filter(function(info){ return info.example !== undefined })
                    .map(info =>(
                        <li key={info.example} className=' py-2 '>{info.example}</li> 
                    )))}
            </ul>
        </div >
    )
}

export default Example