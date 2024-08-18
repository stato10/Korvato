import React from 'react';
import Button2 from './Button2';

const Sec3 = () => {

  const scrollToEmailInput = () => {
    const emailInputSection = document.querySelector(".costumerInput");
    if (emailInputSection) {
      emailInputSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center text-right">
          <h2 className="text-2xl font-bold sm:text-3xl text-white">
            מהו מסחר אלגוריתמי?
          </h2>
          <p className="mt-2 text-white">
            אלגוריתם מסחר הוא מערכת נתונים עצבנית, המבצעת עסקאות המבוססות על אסטרטגיות מוגדרות מראש. 
            טכנולוגיה זו מהווה אבן פינה להצלחה של הקרנות הגדולות והמצליחות בעולם, ומאפשרת להן לעלות בעקביות על ביצועי השוק.
          </p>
          <p className="mt-2 text-white">
            קרנות גידור הן לא רק הכמות – הן מתמקדות באלגוריתמים מתקדמים! מה שהצלחתם תלויה במגוון מערכות 
            המסחר המתוחכמות הללו, המפותחות בהתמדה כדי לספק תוצאות מרשימות.
          </p>
          <p className="mt-2 text-white">
            קחו לדוגמה את קרן מדליין, הנתמכת על ידי ג'ים סיימונס, המשתמשת במסחר אלגוריתמי כדי לרשום רווח מדהים 
            של 66.1% בין 1988 ל-2018 אחרי עמלות, וצבירה רווח כולל מרשים של 105.5 מיליארד דולר.
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl mt-8 text-white">
            איך בנינו את האלגוריתמים?
          </h2>
          <p className="mt-2 text-white">
            הצוות שלנו השקיע חודשים בפיתוח, ששילב את האלגוריתמים שלנו, תוך שימוש באינדיקטורים רבים 
            כדי להבטיח את הצלחתכם. התוצאה? 
          </p>
          <p className="mt-2 text-white">
            כלי שמסוגל לעקוב ולבצע עסקאות שוק בדיוק כמו המשקיעים היותר תעשייתיים. צוות הפיתוח שלנו מנה 25 חברים מאחורי זה לצד זה במשך יותר מחצי שנה. 
            תוך כדי דחיית נתונים למערכת הבינה המלאכותית ובנה אסטרטגיות ייחודיות ששיפרו את עצמן במשך מעל ל-2 שנים.
          </p>
          <p className="mt-2 text-white">
            הצוות כולל גם מפתחים ישראלים בעלי תארים בהנדסת חשמל <a href="#" className="text-blue-400 underline">PHD +POST DOC PHYSICK</a>.
          </p>
          <div className="flex justify-center">
            <Button2 onClick={scrollToEmailInput} />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
            <img
              className="object-cover object-center rounded"
              alt="אנשים"
              src="https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723673651/%D7%90%D7%A0%D7%A9%D7%99%D7%9D_gbehvz.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
