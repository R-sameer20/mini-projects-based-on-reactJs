import './App.css';
import { filterData, apiUrl } from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {useEffect , useState} from 'react'
import {toast} from "react-toastify"



function App() {

  const [courses , setCources] = useState(null);

  const[loading ,setLoading] = useState(true);

  const[category , setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCources(output.data);
      }
    
    catch(error){
      toast.error("Error in Network");
    }
    setLoading(false);
  }

  

  useEffect ( ()=> {
    fetchData();
  },[]);

  
  return (
    <div className="min-h-screen flex flex-col" >
      
      <div >
        <Navbar/>
      </div>

      <div>
        <Filter filterData = {filterData}
                category = {category}
                setCategory = {setCategory}/>
      </div>    
         
        <div>
          
        </div>
        
      <div>
        {
          loading ? 
            (<Spinner/>) :
            (<Cards courses={courses} category = {category}/>) 

        }
      </div> 
    </div>
  );
}

export default App;
