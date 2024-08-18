import React from 'react';

const Button = React.memo(() => {
  const handleClick = () => {
    window.open("https://www.fxblue.com/users/korvatonapoleon", "_blank");
  };

  return (
    <div>
      <button
        className="bg-[rgb(15,255,219)] text-black font-bold py-2 px-4 rounded transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring flex items-center gap-2"
        onClick={handleClick}
      >
        FX BLUE
      </button>
    </div>
  );
});

export default Button;
