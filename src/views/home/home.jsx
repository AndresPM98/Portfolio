import React from 'react';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Labs from '../../components/labs/labs';
import Navbar from '../../components/navbar/navbar';
import Skills from '../../components/skills/skills';
import style from "./home.module.css";


const Home = () => {
  return (
    <div>
      <div className={style.navbarCont}>
        <Navbar/>
      </div>
    <div className={style.aboutCont}>
      <About/>
    </div>
    <div className={style.skillsCont}>
      <Skills/>
    </div>
    <div className={style.labsCont}>
      <Labs/>
    </div>
    <div className={style.contactCont}>
      <Contact/>
    </div>
  </div>
  );
};

export default Home;







