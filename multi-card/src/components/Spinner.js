import React from 'react'
import './Spinner.css'

const Spinner = ()=> {
    return (
  <div className="spinner-container">
    <div className="custom-loader"></div>
    <p>Loading....</p>
  </div>
);
}

export default Spinner;