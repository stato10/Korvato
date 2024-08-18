import React from 'react';
const img = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723562223/a8379c_fe66501a483849569d6c7aac42b037d0_mv2_1_zp9uoa.webp";

const Footer = () => {
  return (
    <footer className="footer w-full" style={{ backgroundColor: 'rgb(21,21,23)' }}>
      <div className="container h-[200px] flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        
        {/* Left side: Logo */}
        <div className="flex flex-col items-center md:items-start text-center mb-8 md:mb-0">
          <img src={img} alt="Logo" className="mb-4" />
        </div>

        {/* Middle: Contact Form */}
        <section className="contact border-1 border-black costumerInput mb-8 md:mb-0">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24 text-center">
            <div className="mb-8 mt-8">
           
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              צור איתנו קשר
            </h2>
            <p className="text-white sm:mt-4">
              אם ברצונכם ליצור איתנו קשר תשאירו את פרטי איימל ושמכם <br />
              ונחזור אליכם בהקדם
            </p>
            <div className="mx-auto mt-8 max-w-xl">
              <form action="https://api.web3forms.com/submit" method="POST" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <input type="hidden" name="access_key" value="1a5918af-36de-4a09-9815-a6437734592d" />
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="כתובת המייל :"
                    className="w-full rounded-md border-gray-200 bg-white p-3 text-black shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[rgb(15,255,219)] px-5 py-3 text-black transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
                >
                  <span className="text-bold font-medium"> צור קשר </span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Right side: Social Media Icons */}
        <div className="links flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0 ">
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube.png" alt="YouTube" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/tiktok.png" alt="TikTok" />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>© 2024 Korvato כל הזכויות שמורות</p>
      </div>
    </footer>
  );
}

export default Footer;
