import React from 'react';
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Sec from "../components/Sec";
import Sec2 from "../components/Sec2";
import SecRocket from '../components/SecRocket';
import Cards from '../components/Cards';
import Sec3 from '../components/Sec3';
import Last from '../components/Last';


function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <Sec />
      <Sec2 />
      <SecRocket />
      <Cards></Cards>
      <Last></Last>
      <Sec3/>
    
      <Footer />
    </div>
  );
}

export default Home;