import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';



const Sec = () => {
  return (
    <div className="welcome py-12 px-6 bg-gray-900 text-white ">
      <div className="max-w-5xl mx-auto text-right">
        <h2 className="text-4xl font-bold mb-4">
         ברוכים הבאים לקורבטו
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          הצטרפו ל-3,000+ משתמשים שרשומים למערכת המסחר האלגוריתמי של קורבטו כדי להשיג תשואות יוצאות דופן
          ללא צורך בכישורי מסחר מקצועיים או בהשקעת זמן משמעותית.
        </p>

        <h3 className="text-lg font-semibold mb-6"  style={{ direction: "rtl" }}>

        <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />

         3 שנים של תוצאות מוכחות
         
          <p className="text-lg leading-relaxed mb-6" style={{ direction: "ltr" }} >
           FX BLUE צד שלישי מאומת על ידי 
        </p>
        </h3>
        <p className="text-lg leading-relaxed mb-6">
         
          צמיחה חודשית ממוצעת של : 14%-8%
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
          <br />
          
          
          מבוסס על נתוני משתמשים פעילים
        </p>
        <p className="text-lg leading-relaxed mb-6">

          
          מאומת על ידי אלפי משתמשי קורבטו
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
          
          <br />

          
          .יותר מ-10 מיליון דולר בהפקדות משתמשים
        </p>
        <p className="text-lg leading-relaxed mb-6">
        !רווחים מוכחים גם בירידת השוק
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </p>
        <p className="text-lg leading-relaxed mb-6">
        .השליטה המלאה בתיק תמיד נשאר בידי הלקוח
        <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </p>
        <p className="text-lg leading-relaxed mb-6">
        .זו לא השקעה, זו התחברות לתוכנה 
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </p>
        <p className="text-lg leading-relaxed mb-6">
        .הכסף לא עוזב את חשבון הברוקר של המתחבר
          <FontAwesomeIcon icon={faCheckCircle} className="text-teal-400 ml-2" />
        </p>
      </div>
    </div>
  );
};

export default Sec;

