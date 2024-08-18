import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
