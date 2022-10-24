import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import '../css/style.css'
import Context from '../context/context'

function Header() {

  // eslint-disable-next-line
  const [word, setWord, loading, setLoading, submit, setSubmit] = useContext(Context);

  const handleChange = (e) => {
    setSubmit(false)
    let wd = e.target.value ;
    let wordArray = wd.split(' ');
    if( wordArray.length > 1)
    {
      alert("Please Enter One Word Only")
    }
    wd = wordArray[0];
    setWord(wd);
  }

  const handleSubmit = (e) => {

    if(!word)
    {
      alert("word not found");
      return ;
    }
    setSubmit(true) ;
    setLoading(true);

  }


  return (
    <>
      <header className='h-[30vh] bg-teal-600  flex items-center my-0 md:h-[40vh]'>
        <div className="mx-auto text-center" >
          <h1 className='heading text-white  text-3xl font-bold transition ease-in md:text-6xl'>URBAN DICTIONARY</h1>
          <div className='bg-indigo-500 mx-auto flex items-center h-8 rounded-lg my-6 text-white md:h-12'>
            <input type="text" value={word} onChange={handleChange} className='flex text-black flex-grow flex-shrink rounded-l-md h-full px-4 focus:outline-none ' />
            <FaSearch className='h-17 p-4 cursor-pointer' size={50} onClick={handleSubmit} />
          </div>
          <p className='text-white font-extrabold'> &#123; Search For A Word : {word ? word : 'eg-HELLO'} &#125;</p>
          
        </div>
      </header>
      

    </>


  )
}

export default Header