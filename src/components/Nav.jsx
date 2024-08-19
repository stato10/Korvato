import React from 'react';
import Button from './Button';
import Button2 from './Button2';

const Nav = () => {

  // Scroll to email input
  const scrollToEmailInput = () => {
    const emailInputSection = document.querySelector(".costumerInput");
    if (emailInputSection) {
      emailInputSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-container z-50 w-full">
      <div className="navbar shadow-lg text-white p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: FX Blue Button */}
        <div className="order-2 md:order-1 flex items-center space-x-4 mt-4 md:mt-0">
          <Button2 onClick={scrollToEmailInput} />
        </div>

        {/* Center: Logo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-center">
          <a href="#">
            <img 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" 
              src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723562223/a8379c_fe66501a483849569d6c7aac42b037d0_mv2_1_zp9uoa.webp" 
              alt="Korvato Logo" 
            />
          </a>
        </div>

        {/* Right side: Button */}
        <div className="order-3 flex items-center space-x-4 mt-4 md:mt-0">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Nav;
