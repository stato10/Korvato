import React from 'react';





const Button2 = ({ onClick }) => {
    return (
      <button
        className="bg-[rgb(15,255,219)] text-black font-bold py-2 px-4 rounded transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring flex items-center gap-2"
        onClick={onClick}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M16 12l4-4m0 0l-4-4m4 4H8m-4 4l-4 4m0 0l4-4m-4 4h16m4-4l-4 4"
          />
        </svg>
        צור קשר
      </button>
    );
  };

  export default Button2;