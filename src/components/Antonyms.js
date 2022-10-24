import React from 'react'

function Antonyms({ response  }) {
    return (
        < div className="text-white  bg-slate-600 my-4 normal-case py-2 px-2 rounded-md">
            <h1 className='uppercase font-bold text-2xl text-center' id='synonyms'>Antonyms</h1>
            <hr className='h-1/2 bg-slate-900' />
            <ul className='my-3  list-inside list-decimal'>
                {response.meanings
                    .map(meaning => { 
                        
                        return meaning.antonyms?.map((ant, index)=>(
                            <li className='inline-grid px-3' key={index+1}>{ant}</li>
                    ))})}
            </ul>
        </div >
    )
}

export default Antonyms