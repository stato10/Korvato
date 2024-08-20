import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from "../components/variants"

const Cards = () => {
  return (
    <section className="cards  text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">עם קורבטו, אתה לא רק סוחר.</h2>

          <p className="mt-6 text-gray-300 ">
            אתה שולט בשווקים הפיננסיים עם אחת מתוכנות האלגוריתמים המתקדמות ביותר של בינה מלאכותית שקיימות. זהו מסחר אלגוריתמי, מזוקק לצורתו הטהורה ביותר.
          </p>
        </div>

        <motion.div
   
        
        className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__bounce">
          <motion.a
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.7}}

            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723671734/1_pqtii6.png"
              className="h-32 w-32 mx-auto"
              alt="Icon"
            />
            <h2 className="mt-4 text-xl font-bold text-white">תוכנית מסחר אלגוריתמית מהפכנית</h2>

            <p className="mt-1 text-sm text-gray-300">
              אמצו את פסגת המסחר האלגוריתמי, תוכנית המסחר הבלעדית של קורבטו. עם האלגוריתם המתקדם והקנייני שלנו, כדי להרחיב את אסטרטגיית המסחר שלך, ומאפשר תובנות והשפעות בזמן אמת עם כל עסקה.
            </p>
          </motion.a>

          <motion.a
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.7}}

          
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723671739/2_yqphcb.png"
              className="h-32 w-32 mx-auto"
              alt="Icon"
            />
            <h2 className="mt-4 text-xl font-bold text-white">אסטרטגיה - מאוחדת מסחר אלגוריתמי</h2>

            <p className="mt-1 text-sm text-gray-300">
              סחור עם ביטחון באמצעות המערכת של קורבטו. המשלבת קשת רחבה של אסטרטגיות מסחר במערכת חלקה. מתוכנן לקלות ויעילות, הוא מאפשר לך לעקוף ניתוח שוק נרחב ואת הטרחה של אחזקת כתבי עת מקצועיים. גלה את העידן החדש של המסחר היום.
            </p>
          </motion.a>

          <motion.a
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.7}}


            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <img
              src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723671738/3_z5enqu.png"
              className="h-32 w-32 mx-auto"
              alt="Icon"
            />
            <h2 className="mt-4 text-xl font-bold text-white">מסחר אלגוריתמי עם ניהול סיכונים משולב</h2>

            <p className="mt-1 text-sm text-gray-300">
              העלה את המסחר שלך לגבהים שאין שני להם. בעוד ביטול סיכונים לחלוטין הוא בלתי אפשרי, המערכת בנויה סביב ניהול סיכונים חכם, מתגאה במה שאנו מחשיבים כאחד האלגוריתמים הטובים ביותר בשוק. עלה לשליטה במסחר עם קורבטו ונווט בשוק המט"ח בדיוק מקסימלי.
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
