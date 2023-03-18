import React, { useRef } from 'react';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Labs from '../../components/labs/labs';
import Navbar from '../../components/navbar/navbar';
import Skills from '../../components/skills/skills';
import style from './home.module.css';

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const labsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={style.navbarCont}>
        <Navbar
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          labsRef={labsRef}
          contactRef={contactRef}
          scrollToSection={scrollToSection}
        />
      </div>
      <div className={style.aboutCont} ref={aboutRef}>
        <About />
      </div>
      <div className={style.skillsCont} ref={skillsRef}>
        <Skills />
      </div>
      <div className={style.labsCont} ref={labsRef}>
        <Labs />
      </div>
      <div className={style.contactCont} ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
