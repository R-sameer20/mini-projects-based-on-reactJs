import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
 
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
   
    function handleResizeOfWidth() {
      setWidth(window.innerWidth);
    }
    function handleResizeOfHeight() {
      setWidth(window.innerHeight);
    }

    
    window.addEventListener('resize', handleResizeOfWidth);
    window.addEventListener('resize', handleResizeOfHeight);

   
    return () => {
      window.removeEventListener('resize', handleResizeOfWidth);
      window.removeEventListener('resize', handleResizeOfHeight);
    };
  }, []);

  return (
    <div className="App">
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Window Width Tracker</h1>
       
        <h2>Width={width}px and height={height}px</h2>
      </div>
    </div>
  );
}

export default App;
