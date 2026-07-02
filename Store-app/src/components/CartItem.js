import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex items-center justify-between p-5 justify-between 
                    mt-2 mb-2 mx-5 border-b-2 border-slate-200 gap-10
                    hover:scale-[1.02] transition duration-300 ease-in-out">
      
      {/* Left: Product Image Box */}
      <div className="w-[30%] min-w-[120px] max-w-[150px] flex justify-center items-center">
        <img src={item.image} alt={item.title} className="object-contain h-[140px] w-full" />
      </div>

      {/* Right: Info Details & Actions */}
      <div className="w-[70%] flex flex-col gap-y-3 self-start">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-60 md:w-80">
          {item.title}
        </h1>
        
        <p className="text-gray-400 font-normal text-xs text-left">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-[16px] text-green-600 font-semibold">
            ${item.price}
          </p>
          
          {/* Circular Red Interactive Delete Icon */}
          <div 
            onClick={removeFromCart}
            className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 
                       flex items-center justify-center cursor-pointer 
                       text-red-800 transition duration-300"
          >
            <MdDelete size={20} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem;