import React from 'react'
import {useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch , useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({post}) => {
  const { cart } = useSelector((state) => state )
  const dispatch = useDispatch();
  const[selected ]=useState(false);

  const addtoCart = () => {
    dispatch(add(post))
    toast.success("Item added to Cart ")
  }

  const removeFromCart  = () => {
    dispatch(remove(post.id))
    toast.error("Item removed from Cart ")

  }

  return (
    <div className="flex flex-col items-center justify-between 
                  gap-3 p-4 mt-10 ml-5  rounded-xl border border-slate-100
                  shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
                  hover:scale-110 transition duration-300 ease-in" 
    >

      <div  >
        <p
          className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 "
        >
          {post.title}
        </p>
      </div>

      <div>
        <p
          className=" w-40 text-gray-400 font-normal text-[10px] text-left "
        >
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>

      <div
        className="h-[180px]"
      >
        <img src = {post.image} alt={post.title}
          className=" h-full w-full "
        ></img>
      </div>

      <div className=" flex justify-between gap-12 items-center " >

        <div className=" flex items-center justify-between gap-12 mt-5 w-full  " >
          <p
            className=" text-[16px] mb-4 text-green-600 font-semibold "
          >${post.price}</p>
        </div>

        <div
          className="  "
        >
          {
            cart.some( (p) => p.id === post.id) ? 
            (
              <button 
                className=" text-center w-[90px] text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                           text-[9px] py-1 px-3  uppercase
                           hover:bg-gray-700 hover:text-white transition-all duration-300 "     
                onClick={removeFromCart}
              >
                Remove Item </button>
            ) :
            (
              <button
                className=" text-center w-[90px]  text-gray-700 border-2 border-gray-700 rounded-full font-semibold
                           text-[9px] p-1 px-1 uppercase
                           hover:bg-gray-700 hover:text-white transition-all duration-300 "

                onClick={addtoCart}
              >
                Add to Cart
              </button>
            )
          }
        </div>


      </div>




      
      


    </div>
  )
}

export default Product