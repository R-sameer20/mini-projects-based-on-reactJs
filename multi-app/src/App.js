import './App.css';
import { filterData, apiUrl } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter'
import Cards from './components/Cards'
import {useEffect , useState} from 'react'
import {toast} from "react-toastify"



function App() {

  const [cources , setCources] = useState(null)

  useEffect ( ()=> {
     const fetchData = async () => {
        try{
          const result = await fetch(apiUrl);
          const output = await result.json();

          // save data
          setCources(output.data);

        }
        catch(err){
          toast.error("something went wrong")
        }
     }

     fetchData();
  },[]);

  
  return (
    <div>
      <Navbar/>

      <Filter 
          filterData = {filterData}/>

      <Cards cources = {cources}/>
    </div>
  );
}

export default App;
