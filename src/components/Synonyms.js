import React from 'react'

function Synonyms({ response  }) {
    return (
        < div className="text-white  bg-slate-600 my-4 normal-case py-2 px-2 rounded-md">
            <h1 className='uppercase font-bold text-2xl text-center' id='synonyms'>Synonyms</h1>
            <hr className='h-1/2 bg-slate-900' />
            <ul className='my-3  list-inside list-disc'>
                {response.meanings
                    .map(meaning => { 
                        
                        return meaning.synonyms?.map((syn, index)=>(
                            <li className='inline-grid px-3' key={index+1}>{syn}</li>
                    ))})}
            </ul>
        </div >
    )
}

export default Synonyms