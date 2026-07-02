import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-[80vh]">
      {
        cart.length > 0 ? 
        (
          <div className="flex flex-col lg:flex-row justify-between gap-x-10">

            {/* Left Side View: Stacked Shopping Items List */}
            <div className="w-full lg:w-[60%] flex flex-col gap-y-2">
              {
                cart.map((item, index) => { 
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            {/* Right Side View: Checkout Metrics Summary Card */}
            <div className="w-full lg:w-[38%] flex flex-col justify-between p-8 mt-2 ml-5 rounded-xl border border-slate-100 h-fit bg-white
                            shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]
                            transition duration-300 ease-in">
              
              <div>
                <div className="text-green-700 font-bold uppercase tracking-wider text-sm">
                  Your Cart
                </div>
                <div className="text-green-700 font-black text-4xl uppercase tracking-wide -mt-1 mb-4">
                  Summary
                </div>
                <p className="text-gray-700 font-semibold text-md mt-5">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="mt-14 lg:mt-32">
                <p className="text-gray-700 font-bold text-xl flex justify-between items-center mb-6">
                  <span>Total Amount:</span>
                  <span className="text-green-600 font-bold">${totalAmount.toFixed(2)}</span>
                </p>
                <button className="w-full text-center text-white bg-green-600 border-2 border-green-600 rounded-lg font-bold
                                  text-sm py-3 px-6 uppercase tracking-wider
                                  hover:bg-white hover:text-green-600 transition-all duration-300 shadow-md">
                  Check Out Now
                </button>
              </div>

            </div>
            
          </div>
        ) : 
        (
          // Centered Empty State Frame
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-y-4">
            <h1 className="text-gray-700 font-semibold text-xl tracking-wide">
              Your cart is empty!
            </h1>
            <Link to="/">
              <button className="text-center text-white bg-gray-700 border-2 border-gray-700 rounded-full font-semibold
                                text-xs py-2 px-8 uppercase tracking-wider
                                hover:bg-white hover:text-gray-700 transition-all duration-300 shadow-sm">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart;