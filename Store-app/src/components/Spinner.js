import React from 'react';

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-50 font-sans">
      <div className="relative w-[100px] h-[150px] flex flex-col justify-end items-center">
        
        {/* Floating Items Container */}
        <div className="absolute top-0 w-full h-[90px]">
          
          {/* Book */}
          <svg 
            className="absolute w-6 h-6 text-sky-500 left-[20%] opacity-0 animate-fall-item [animation-delay:0s]" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          
          {/* T-Shirt/Clothes */}
          <svg 
            className="absolute w-6 h-6 text-pink-500 left-[40%] opacity-0 animate-fall-item [animation-delay:0.6s]" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M20.38 3.46L16 6.14V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.14L3.62 3.46a1 1 0 0 0-1.44.54l-1.5 4.5a1 1 0 0 0 .54 1.25L4 10.7V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10.7l2.78-1a1 1 0 0 0 .54-1.25l-1.5-4.5a1 1 0 0 0-1.44-.54z"></path>
          </svg>
          
          {/* Star */}
          <svg 
            className="absolute w-6 h-6 text-yellow-500 left-[60%] opacity-0 animate-fall-item [animation-delay:1.2s]" 
            viewBox="0 0 24 24" fill="currentColor"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>

        {/* The Shopping Cart Wrapper */}
        <div className="animate-cart-gobble">
          <svg 
            className="w-[65px] h-[65px] stroke-indigo-600" 
            viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>

      </div>
      <p className="mt-4 text-base font-semibold text-gray-600 tracking-wider">
        Filling your cart...
      </p>
    </div>
  );
};

export default Spinner;