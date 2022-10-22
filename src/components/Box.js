// importing components and libraries 
import React, { useContext } from 'react'
import Context from '../context/context';
import Example from './Example';
import Defination from './Defination';
import Error from './Error';
//import Synonyms from './Synonyms';

function Box() {

  // importing data, error, audio from context 
  const data = useContext(Context)[6];
  const error = useContext(Context)[7];
  const audio = useContext(Context)[8];

  return (

    <div className=" w-11/12  overflow-y-auto mx-auto p-4 bg-slate-300 h-[70vh]  rounded-md md:w-9/12 md:h-[60vh] lg:w-1/2  ">

      {/* if error is there show error page */}

      {error.title && (
        <Error title={error.title} message={error.message} />
      )}

      {/* if no error is there show audio, defination and examples component  */}

      {!error.title && data.map((response, index) => (
        <div key={index}>
          <audio className='w-full' controls src={audio}></audio>
          <Defination key={response.meanings} response={response} />
          <Example response={response} />
          {/* <Synonyms response={response}/> */}
        </div>
      ))}

    </div>
  )
}

export default Box