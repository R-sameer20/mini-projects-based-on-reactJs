import React from "react";
import data from './data';
import Tours from './components/Tours'
import {useState} from 'react'
import "./App.css";

function App() {

  const [tours , setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length ===0 ){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>

        <button className="btn-white" onClick ={() => setTours(data)}>
          ReFresh
        </button>
      </div>
    )
  }
  return (
    <div className="App">
        <Tours tours={tours} removeTour = {removeTour}></Tours>
    </div>
  );
}

export default App;
