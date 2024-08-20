import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from "../components/variants";

const logo2 = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723662933/logo2_x8jjcl.png";
const urlTreader = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723568585/nsplsh_5654347278373735465434mv2_jnz7ww.webp";

const Main = () => {
  const scrollToEmailInput = () => {
    const emailInputSection = document.querySelector(".costumerInput");
    if (emailInputSection) {
      emailInputSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Button2 = ({ onClick }) => {
    return (
      <button
        className="bg-[rgb(15,255,219)] text-black font-bold py-2 px-4 rounded transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring flex items-center gap-2 text-center"
        onClick={onClick}
      >
        בואו לסחור איתנו! 
        <br />
        *הצטרפו לאלפי לקוחות מרוצים*
      </button>
    );
  };

  return (
    <div className="">
      <div className="hero min-h-[70vh] sm:min-h-[80vh] text-center relative">
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content relative z-10 text-neutral-content text-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-2xl sm:max-w-4xl mx-auto pt-6 px-4 sm:px-6 lg:px-8"
          >
            <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-white mt-10">
              ברוכים הבאים לקורבטו ישראל!
            </h1>
            <h3 className="mb-5 text-xl sm:text-2xl font-bold text-teal-400">
              הצטרפו לעולם של בינה מלאכותית
            </h3>

            <div className="mb-12 sm:mb-16 mt-10 flex justify-center">
              <iframe
                className="w-full max-w-lg sm:max-w-3xl h-48 sm:h-64 lg:h-80"
                src="https://www.youtube.com/embed/fWYYq76yExE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="startButton flex justify-center">
              <Button2 onClick={scrollToEmailInput} />
            </div>
          </motion.div>
        </div>
      </div>

      <section className="contact costumerInput p-8 sm:p-12 lg:px-16 lg:py-24 bg-gray-900 text-white">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-10 sm:mb-20">
            <img src={logo2} alt="Logo" className="mx-auto w-32 sm:w-48" />
          </div>
          <h2 className="text-2xl font-bold md:text-3xl">
            צור איתנו קשר
          </h2>
          <p className="mt-4 hidden sm:block">
            אם ברצונכם ליצור איתנו קשר תשאירו את שמכם ומספר הטלפון <br />
            ונחזור אליכם בהקדם
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 sm:flex sm:space-y-0 sm:gap-4">
            <input type="hidden" name="access_key" value="1a5918af-36de-4a09-9815-a6437734592d" />

            <div className="sm:flex-1">
              <label htmlFor="name" className="sr-only">שם פרטי</label>
              <input
                type="text"
                name="name"
                placeholder="שם פרטי :"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-black shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>

            <div className="sm:flex-1">
              <label htmlFor="phone" className="sr-only">מספר טלפון</label>
              <input
                type="text"
                name="phone"
                placeholder="מספר טלפון :"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-black shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="group mt-4 sm:mt-0 w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-[rgb(15,255,219)] px-5 py-3 text-black transition focus:outline-none focus:ring focus:ring-blue-400"
            >
              <span className="font-medium">צור קשר</span>
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
      </section>
    </div>
  );
};

export default Main;
