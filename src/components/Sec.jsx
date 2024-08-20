import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import { fadeIn } from "../components/variants"



const Sec = () => {
  return (
    <div className="welcome py-12 px-6 bg-gray-900 text-white ">
      <motion.div
    
      
      className="max-w-5xl mx-auto text-right">
        <h2 className="text-4xl font-bold mb-4">
         ברוכים הבאים לקורבטו
        </h2>
        <motion.p
        
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}
        className="text-lg leading-relaxed mb-6">
          הצטרפו ל-3,000+ משתמשים שרשומים למערכת המסחר האלגוריתמי של קורבטו כדי להשיג תשואות יוצאות דופן
          ללא צורך בכישורי מסחר מקצועיים או בהשקעת זמן משמעותית
        </motion.p>

        <motion.h3 
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}
        className="text-sm font-semibold mb-6"  style={{ direction: "rtl" }}>

        <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />

         3 שנים של תוצאות מוכחות
         
          <p className="text-md leading-relaxed mb-6" style={{ direction: "ltr" }} >
           FX BLUE צד שלישי מאומת על ידי &nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        </motion.h3>
        <motion.p
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.7}}

         className="text-sm leading-relaxed mb-6" >
         
          צמיחה חודשית ממוצעת של : 14%-8%
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
          <br />
          
          
          .מבוסס על נתוני משתמשים פעילים&nbsp;&nbsp;&nbsp;&nbsp;
        </motion.p>
        <motion.p
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}

        className="text-sm leading-relaxed mb-6">

          
          מאומת על ידי אלפי משתמשי קורבטו
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
          
          <br />

          
          .יותר מ-10 מיליון דולר בהפקדות משתמשים&nbsp;&nbsp;&nbsp;&nbsp;
        </motion.p>
        <motion.p 
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}

        className="text-sm leading-relaxed mb-6">
        !רווחים מוכחים גם בירידת השוק
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </motion.p>
        <motion.p 
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}

        className="text-sm leading-relaxed mb-6">
        .השליטה המלאה בתיק תמיד נשאר בידי הלקוח
        <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </motion.p>
       
        <motion.p
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}

        className="text-sm leading-relaxed mb-6">
        .זו לא השקעה, זו התחברות לתוכנה 
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </motion.p>
       
        <motion.p
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.7}}

        className="text-sm leading-relaxed mb-6">
        .הכסף לא עוזב את חשבון הברוקר של המתחבר
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Sec;

