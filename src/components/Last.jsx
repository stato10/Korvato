import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button2 from './Button2';

const img = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723674354/%D7%92%D7%A8%D7%A3_i3no4v.jpg";
const img2 = "https://res.cloudinary.com/dpz2lh8hu/image/upload/v1723674362/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A7%D7%98%D7%A0%D7%94_hfd4bd.jpg";

export default function Features() {
  const scrollToEmailInput = () => {
    const emailInputSection = document.querySelector(".costumerInput");
    if (emailInputSection) {
      emailInputSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card
            
            sx={{
              borderRadius: '12px',
              border: '1px solid #2d2d2d',
              backgroundColor: '#181818',
              p: 3,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                borderColor: '#ec4899',
                boxShadow: '0 4px 6px rgba(236, 72, 153, 0.1)',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img
              src={img} 
              alt="גרף" 
              style={{ 
                borderRadius: '8px', 
                width: '100%', 
                height: 'auto', 
                objectFit: 'contain',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxHeight: '350px', 
              }} 
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ width: '100%' }}
          >
            <Typography  variant="h4" color="white" fontWeight="bold" align="right">
              כעת, גם אתם יכולים לרכוש את הזמן, האנרגיה והמומחיות שלנו
            </Typography>
            <Typography  variant="body1" color="white" fontWeight="bold" align="right">
            למי זה מתאים?
תוכנית זו מושלמת עבור אנשים שמוכנים להעלות את אסטרטגיית ההשקעה שלהם, ומעוניינים לגוון את ההכנסות וההשקעות שלהם. אין צורך בניסיון קודם במסחר. רבים מחברי הקהילה שלנו מעולם לא סחרו או השתמשו באלגוריתמים לפני כן. 
אם זה נשמע לכם, הנה מה שאנחנו מציעים:
            </Typography>
            <Typography  variant="body1" color="white" align="right">
              • שליטה מלאה על הכסף שלך: לשמור על 100% שליטה על החשבון שלך.<br />
              • תמיכה ייעודית: תיהנו מתמיכה מתמדת מהצוות המסור שלנו.<br />
              • חיבור לקהילה: הצטרפו לקהילה משגשגת של משקיעים וסוחרים.<br />
              • גישה לאלגוריתמים מרובים: גוון את תיק ההשקעות שלך באמצעות <br></br>&nbsp;&nbsp;אלגוריתמים עבור: נכסים, מסגרות זמן ואסטרטגיות שונות.
            </Typography>
            
            <Typography  variant="body2" color="white" fontWeight="bold" align="right">
            האלגוריתמים שלנו פועלים מסביב לשעון בכל פעם ששוק המט"ח פתוח, למעט סופי שבוע וחגים.
                        </Typography>
            <Button2  onClick={scrollToEmailInput} />
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={6} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ width: '100%' }}
          >
            <Typography  variant="h5" color="white" fontWeight="bold" align="right">
            איך האלגוריתם שלנו עובד?
            </Typography>
            <Typography  variant="body1" color="white" align="right">
         

תוכנת המסחר של קורבטו ממנפת אינדיקטורים מבוססים וכללים מתוחכמים לביצוע עסקאות מדויקות. צוות פיתוח המוצרים ברמה עולמית שלנו עובד ללא לאות מאחורי הקלעים כדי לחדד, לכוון ולמטב את התוכנה שלנו, תוך הבטחת עקביות וניהול סיכונים יעיל.
<br></br>
לדוגמה, אנו ממליצים לא לבצע עסקאות בתנאי שוק תנודתיים מאוד כדי להגן על ההשקעות שלך.
<br></br>
<br></br>
<Typography  variant="body2" color="white" fontWeight="bold" align="right">
הרקורד המרשים שלנו
            </Typography>
אלגוריתמי המסחר של קורבטו הוכיחו הצלחה יוצאת דופן, הן בתוך החברה והן עבור למעלה מאלפי לקוחות בעלי הכנסה גבוהה. התוכנה שלנו סיפקה באופן עקבי תוצאות משמעותיות בחשבונות שלנו, ויש לנו המלצות זוהרות מלמעלה מ -800 לקוחות שחוו תוצאות מדהימות באמצעות קורבטו בחשבונות המסחר שלהם.
<br></br>
הנה כמה תוצאות מרשימות מחשבונות המסחר האישיים שלי, המופעלים על ידי אותם אלגוריתמים מתקדמים שפותחו על ידי צוות המומחים שלנו.

            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Card
            sx={{
              borderRadius: '12px',
              border: '1px solid #2d2d2d',
              backgroundColor: '#181818',
              p: 3,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                borderColor: '#ec4899',
                boxShadow: '0 4px 6px rgba(236, 72, 153, 0.1)',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <img
              src={img2} 
              alt="תמונה קטנה" 
              style={{ 
                borderRadius: '8px', 
                width: '50%', 
                height: 'auto', 
                objectFit: 'cover', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </Card>
        </Grid>
      </Grid>
      <p className="mt-28 text-sm text-white">קורבטו אינה ישות ייעוץ פיננסי. או ייעוץ השקעות. אנו חלוצים בתוכנות מסחר, המציעים כלים המסייעים לסוחרים לנווט בשווקים. ההצלחה והצמיחה שהושגו על ידי חלק מהמשתמשים שלנו מושפעות ממספר רב של גורמים, ואיננו יכולים להבטיח תוצאות ספציפיות או רמות הצלחה עבור יישום תוכנה כלשהו. לקבלת מידע נוסף, עיין בכתב הוויתור המלא שלנו <a href="https://www.korvato.com/disclosure" className='underline'>כאן</a>.</p>

    </Container>
  );
}
