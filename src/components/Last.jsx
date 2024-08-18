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
    <Container  id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card data-aos="zoom-out-left"
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
            <img className='hoverr'
              src={img} 
              alt="גרף" 
              style={{ 
                
                borderRadius: '8px', 
                width: '100%', 
                height: 'auto', 
                objectFit: 'contain',  // שמירה על יחס הגובה-רוחב
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxHeight: '350px',  // מגבלת גובה כדי לשמור על חדות התמונה
              }} 
            />
          </Card>
        </Grid>
        <Grid  item xs={12} md={6}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ width: '100%' }}
          >
            <Typography data-aos="fade-right" variant="h4" color="white" fontWeight="bold" align="right">
              כעת, גם אתם יכולים לרכוש את הזמן, האנרגיה והמומחיות שלנו
            </Typography>
            <Typography data-aos="fade-right" variant="body1" color="white" align="right">
              • שימוש במערכות המתקדמות ביותר בשוק<br />
              • תמיכה של צוות מקצועי וזמין 24/7<br />
              • מתן גישה חופשית ללקוחות לפרמטרים המסחריים<br />
              • פיתוחים ועדכונים שוטפים בהתאם לשינויים בשוק
            </Typography>
            <Button2 data-aos="fade-right" onClick={scrollToEmailInput} />
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
            <Typography data-aos="zoom-out-left" variant="h5" color="white" fontWeight="bold" align="right">
              כעת, גם אתם יכולים להצטרף להצלחה שלנו
            </Typography>
            <Typography data-aos="zoom-out-left" variant="body1" color="white" align="right">
              • פלטפורמה חדשנית ומתקדמת<br />
              • כלים מותאמים אישית לניהול מסחר<br />
              • שילוב מערכות אוטומטיות ואינטגרציות חכמות
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
            <img data-aos="fade-right"
              src={img2} 
              alt="תמונה קטנה" 
              style={{ 
                borderRadius: '8px', 
                width: '50%',  // הקטנת רוחב התמונה השנייה יותר
                height: 'auto', 
                objectFit: 'cover', 
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
