import React , {useContext  } from 'react'
import {AppContext} from '../context/AppContext';


const Pageination = () => {
    const {page , handlePageChange , totalPages} = useContext(AppContext)
  return (
    <div className=" w-full flex justify-center items-center border border-blue-200 py-2 fixed bottom-0 bg-white " >
        <div className = "flex justify-between w-11/12 max-w-[650px] "  >

        <div className=" flex gap-x-2 ">
            {page > 1 && 
                <button onClick = { () =>( handlePageChange(page - 1))}
                        className=" w-[100px] mx-2 rounded-md border border-blue-200 px-2 py-1
                        hover:bg-blue-100 hover:border-black hover:text-green-900 transition-all duration-300"
                   > Previous
                </button>
            }

            {
                page < totalPages && 
                <button onClick = { () =>( handlePageChange(page + 1))}
                        className=" bh-white w-[100px] mx-2 rounded-md border border-blue-200 px-2 py-1
                        hover:bg-blue-100 hover:border-black hover:text-green-900 transition-all duration-300"
                   

                > Next
                    
                </button>

            }
        </div>
            
            <p
                className=" font-bold text-sm  py-1.5"
            >
                Page {page} of {totalPages}
            </p>

        </div>



    </div>
  )
}

export default Pageination