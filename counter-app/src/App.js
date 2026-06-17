import {useState} from 'react';
import "./App.css";

function App() {

  

  const [count , setCount] = useState(0);

  function decreaseHandler(){
    setCount( count-1);
  }

  function increaseHandler(){
    setCount( count+1);
  }
  function resteHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#244151]
          flex-col gap-10 ">
      <div className="text-[#0398d4] font-size-medium text-2xl">Increment and Decrement</div>

      <div className=" bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} 
          className="border-r-4 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="fomt-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={  increaseHandler}
          className="border-l-4 text-center w-20 border-[#bfbfbf] text-5xl">
            +
        </button>
      </div>

      <div onClick={resteHandler}
      className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg cursor-pointer">
        Reset
      </div>
    </div>

  );
}

export default App;
