import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const logo2 = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723662933/logo2_x8jjcl.png";
const urlTreader = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723568585/nsplsh_5654347278373735465434mv2_jnz7ww.webp";

const Main = () => {


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
        בואו לסחור איתנו!



        <br />
        *הצטרפו לאלפי לקוחות מרוצים*
        
      </button>
    );
  };



  return (
    <div className="pt-32">
      <div
        className="hero min-h-[80vh] text-center relative"
      
      >
        <div className="overlay absolute inset-0 bg-black opacity-25"></div>
        <div className="hero-content relative z-10 text-neutral-content text-center">
          <div className="max-w-4xl mx-auto pt-6">
          <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold text-white mt-10 ">
                ברוכים הבאים לקורבטו ישראל!
              </h1>
              <h3 data-aos="fade-up" className="mb-5 text-2xl font-bold text-teal-400">
                הצטרפו לעולם של בינה מלאכותית
              </h3>

            <div  className=" mb-16 mt-16 flex justify-center">
              <iframe
                width="75%"
                height="300px"
                src="https://www.youtube.com/embed/fWYYq76yExE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            

            <a
              className="inline-block rounded bg-[rgb(15,255,219)] px-8 py-3 text-2xl text-black font-bold transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href={urlTreader}
            >
             בואו לסחור איתנו!
              <br></br>
              <span className="text-base">*הצטרפו לאלפי לקוחות מרוצים*</span>
            </a>
          </div>
        </div>
      </div>

      <section data-aos="fade-up" className="contact costumerInput">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <div className="mb-20 mt-20">
              <img src={logo2} alt="Logo" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              צור איתנו קשר
            </h2>

            <p className="hidden text-white sm:mt-4 sm:block">
              אם ברצונכם ליצור איתנו קשר תשאירו את פרטי איימל ושמכם <br />
              ונחזור אליכם בהקדם
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
          <form action="https://api.web3forms.com/submit" method="POST" className="sm:flex sm:gap-4">
  <div className="sm:flex-1">
    <input type="hidden" name="access_key" value="1a5918af-36de-4a09-9815-a6437734592d" />
    <label htmlFor="email" className="sr-only">
      Email
    </label>
    <input
      type="email"
      name="email" // Add the name attribute here
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
    </div>
    
  );
};

<script>
  AOS.init();
</script>
export default Main;
