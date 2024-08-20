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
    <div className="navbar-container">
      <div className="navbar shadow-lg text-white p-4 flex justify-between items-center">
        
        {/* Left side: FX Blue Button */}
        <div className="flex items-center space-x-2">
          <Button2 onClick={scrollToEmailInput} />
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center flex-1 my-2">
          <a href="#">
            <img width={77} height={87} src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723562223/a8379c_fe66501a483849569d6c7aac42b037d0_mv2_1_zp9uoa.webp" alt="Korvato Logo" />
          </a>
        </div>

        {/* Right side: Button */}
        <div className="flex items-center space-x-2">
          <Button />
        </div>

      </div>
    </div>
  );
}

export default Nav;
