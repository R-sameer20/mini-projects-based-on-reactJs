import React, { useContext, useEffect } from 'react'
import "./App.css";
import Headers from './components/Headers'
import Blogs from './components/Blogs'
import Pageination from './components/Pageination'
import { AppContext } from './context/AppContext';

const App = () => {
  const { fetchBlogPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost(); 
  }, []);

  return (
    <div className="   w-full min-h-screen flex flex-col gap-y-1 justify-center items-center " >
      <Headers />
      <Blogs/>
      <Pageination/>
    </div>
  )
}

export default App;