

import React from 'react'
import {useState} from 'react'
import Spinner from './Spinner'
import { useGif } from '../hooks/useGif';

const Tag = () => {
    const [tag , setTag ] = useState("car");
        
  
    const {gif , loading , fetchData } = useGif(tag); 
 
    function clickHandler(){
        fetchData(tag);

    }

    function changeHandler(event){
        setTag(event.target.value);
    }

  return (
    <div  className="w-1/2  bg-blue-500 rounded-md border border-black  
           flex flex-col items-center gap-y-5 mt-[15px] "  >
        <h1 className=" mt-[15px]  text-2xl underline uppercase font-bold "
        >
        Rondom {tag} GIF's
        </h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} width={450} alt="random gif"></img>)
        }

        <input
            className="w-10/12 mb-[3px] text-center text-lg py-2 rounded-lg "
            onChange = {changeHandler}
            value = {tag}
        >
        </input>

        <button onClick={clickHandler}
            className=" mb-[20px] w-10/12 bg-white opacity-75 text-lg py-2 rounded-lg "
        >
            Generate
        </button>
    </div>
  )
}

export default Tag