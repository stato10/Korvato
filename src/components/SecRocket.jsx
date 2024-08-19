import React from 'react';
import {fadeIn} from '../components/variants';
import {motion} from 'framer-motion';



function Component() {
  const { scrollYProgress } = useScroll();
}



const scaleImage = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723667851/%D7%AA%D7%9E%D7%95%D7%A0%D7%944_t0bugl.png";
const rocketImage = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723667866/rocket_mklnnn.png";

const SecRocket = () => {
  return (
    <div className="  rocket py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-right">
        <img src={scaleImage} alt="Scale Image" className="mx-auto mb-8" />
        <h2 className="text-4xl font-bold mb-4">
          הכירו את קורבטו
        </h2>
        <p className="text-lg leading-relaxed mb-6 ">
          היכנסו לעולם המסחר עם קורבטו, 
          תוכנת המסחר שלנו מופעלת ע''י בינה מלאכותית רבת עוצמה שמשנה את הדרך שבה המשתמשים שלנו מתקשרים עם שווקים פיננסיים. מיועד הן למתחילים והן לסוחרים מנוסים, קורבטו הוא המפתח שלך למצוינות במסחר.
        </p>

        <div className="flex flex-col md:flex-row items-center mb-6">
          <motion.div 
          variants={fadeIn("left",0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.2}}
          
          className="md:w-1/2 md:pr-6">
            <ul className="list-disc list-inside">
              <li className="text-lg leading-relaxed mb-3">
                בינה מלאכותית ייחודית למסחר בעלת ביצועים גבוהים הניצבת בחזית הטכנולוגיה הפיננסית.
              </li>
              <li className="text-lg leading-relaxed mb-3">
                ממשק אינטואיטיבי שמקבל בברכה משתמשים בכל הרמות, ומבטל את הצורך במומחיות מסחר קודמת.
              </li>
              <li className="text-lg leading-relaxed mb-3">
                מוותר על הצורך בתוכנת יומן מסחרי, מייעל את חוויית המסחר שלך.
              </li>
              <li className="text-lg leading-relaxed mb-3">
                מתוכנן להשקעה מינימלית בזמן אך מספק יעילות מסחר אופטימלית.
              </li>
              <li className="text-lg leading-relaxed mb-3">
                מציע גישה פשוטה למסחר אלגוריתמי, תוך התמקדות אך ורק בביצועים.
              </li>
            </ul>
          </motion.div>
          <motion.div  
          variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount:0.2}}


            className="md:w-1/2 md:pl-6 ">
            <img  src={rocketImage} alt="Rocket Image" className="mx-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};



export default SecRocket;
