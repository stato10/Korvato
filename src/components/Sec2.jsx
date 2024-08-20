import React from 'react';
import Button2 from './Button2';
import Main from './Main';

const logo2 = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723662933/logo2_x8jjcl.png";

const Sec2 = () => {

    const scrollToEmailInput = () => {
        const emailInputSection = document.querySelector(".costumerInput");
        if (emailInputSection) {
          emailInputSection.scrollIntoView({ behavior: "smooth" });
        }
      };



  return (
    <div className="sec2 py-12 px-6 text-white text-right">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          אין לך ניסיון במסחר? אין בעיה.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          אין לך זמן? אין בעיה.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          לא בקטע של טכנולוגיה? אין בעיה.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          צעד אל העתיד של AI TRADING עם תגמול גבוה עוד היום.
        </p>
            
        <Button2 onClick={scrollToEmailInput}> </Button2>
        <div className="mt-12 mb-6">
          <img src={logo2} alt="Korvato Logo" className="mx-auto" />
        </div>
        
        <h3 className="text-3xl font-semibold mb-4">
          מי אנחנו בעצם?
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          אנחנו עוזרים לאנשים להרוויח כסף בזמן שהם ישנים.
        </p>
        <h4 className="text-2xl font-semibold mb-4">
          טוב מכדי להיות אמיתי?
        </h4>
        <p className="text-lg leading-relaxed mb-6">
          תמשיכו לקרוא...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          בעיקרון, יש לנו תוכנת AI שיצרנו כדי להרוויח לעצמנו יותר כסף, ועכשיו, אנחנו חולקים אותה איתכם.
          בין אם אתם מכירים מסחר מקוון או לא. זה כבר לא משנה. תכירו את קורבטו, 
          תוכנת בינה מלאכותית שאוהבת לסחור.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          למעשה, קורבטו סוחר כל כך טוב שהוא יכול להתחיל לעשות את זה בשבילך. 
          איך? קל. 
          <br></br>
          אתה מעניק רשות לתוכנת המסחר שלנו בבינה מלאכותית 
          ומצרף אותה לחשבון הברוקר שלך. 
        </p>
        <p className="text-lg leading-relaxed mb-6">
          לאחר מכן, שבו, והירגעו. תנו לתוכנה שלנו לעשות את כל העבודה הקשה.
          אבל לא מדובר רק בתוכנה שלנו, יש לנו צוות מקצועי. הצוות כולל 12 מפתחים מישראל וארצות הברית בעלי תואר בהנדסת חשמל + PHD +POST DOC PHYSICK
          ששמו להם מטרה לגייס את המוחות הטובים ביותר בתחום הפיננסים והטכנולוגים.
        </p>

        <h4 className="text-2xl font-semibold mb-4">
          איך נראה העתיד עבור קורבטו?
        </h4>
        <p className="text-lg leading-relaxed mb-6">
          זה אינסופי! ממט''ח וקריפטו ועד מניות וסחורות... אנחנו שם.
          אנחנו מגדירים מחדש את עולם הפיננסים, וזו רק ההתחלה. 
          <br></br>
          מוכנים להצטרף אלינו?
        </p>
        <Button2 onClick={scrollToEmailInput}> </Button2>
      </div>
    </div>
  );
};

export default Sec2;
