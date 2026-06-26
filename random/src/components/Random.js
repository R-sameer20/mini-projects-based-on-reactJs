import React from 'react'
import Spinner from './Spinner'
import { useGif } from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
    const {gif , loading , fetchData } =  useGif();

    function clickHandler(){
        fetchData();

    }
  return (
    <div  className="w-1/2  bg-green-500 rounded-md border border-black  
           flex flex-col items-center gap-y-5 mt-[15px] "  >
        <h1 className=" mt-[15px]  text-2xl underline uppercase font-bold ">A Rondom GIF's</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} width={450} alt="random gif"></img>)
        }

        

        <button onClick={clickHandler}
            className=" mb-[20px] w-10/12 bg-white opacity-75 text-lg py-2 rounded-lg "
        >
            Generate
        </button>
    </div>
  )
}

export default Random