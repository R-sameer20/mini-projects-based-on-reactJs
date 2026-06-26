import "./App.css";
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className=" relative background w-full min-h-screen flex flex-col overflow-hidden items-center ">
      <h1 className=" flex  w-11/12 text-center bg-white rounded-md mt-[40px] 
          mpx-10 py-2 justify-center text-4xl " >
        RONDOM GIF'S
      </h1>

      <div className=" flex flex-col w-full items-center gap-y-10 mt-[30px] ">
        
        <Random></Random>

        <Tag></Tag>

      </div>
    </div>
  );
}

export default App;
