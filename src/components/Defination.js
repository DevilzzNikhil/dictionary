import React from 'react'

function Defination({ response }) {
    return (
        <>
            {response.meanings.map((meaning,index) => (
                <div key={index}>
                    <div className="text-white  bg-slate-600 my-4 normal-case py-2 px-2 rounded-md">
                        <h1 className='uppercase font-bold text-xl text-center md:text-2xl'>{meaning.partOfSpeech}</h1>
                        <hr className='h-1/2 bg-slate-900' />
                        <ul className='my-1  list-inside list-decimal md:my-2 lg:my-3'>
                            {meaning.definitions.map((info,index) => (
                                <li key={index} className=' text-md py-2 md:text-lg '>{info.definition}</li>
                            ))}
                        </ul>

                    </div>
                    <hr className='h-[2px] bg-black' />
                </div>
            ))}
        </>
    )
}

export default Defination