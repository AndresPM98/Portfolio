import React, { useState, useEffect, useRef } from 'react';
import style from './navbar.module.css';

const Navbar = ({ landingRef, aboutRef, skillsRef, labsRef, contactRef, scrollToSection }) => {
  const [currentSection, setCurrentSection] = useState(null);
  useEffect(() => {
    
    const handleScroll = () => {
      
      const sections = [
        { id: 'landing', ref: landingRef },
        { id: 'about', ref: aboutRef },
        { id: 'labs', ref: labsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'contact', ref: contactRef },
      ];
      const positions = sections.map(({ id, ref }) => ({
        id,
        position: ref.current.offsetTop - 100, 
      }));
  
      const currentPos = window.scrollY;
      const currentSection = positions.reduce((prev, curr) => {
        if (curr.position <= currentPos && curr.position > prev.position) {
          return curr;
        } else {
          return prev;
        }
      }, positions[0]).id;
  
      
      setCurrentSection(currentSection);
    };
  
    
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={style.navbar}>
      <button className={`${style.bottHome} ${currentSection === 'landing' ? style.active : ''}`} onClick={() => scrollToSection(landingRef)}>
        Home
      </button>
      <button className={`${style.bottAbout} ${currentSection === 'about' ? style.active : ''}`} onClick={() => scrollToSection(aboutRef)}>
        About
      </button>
      <button className={`${style.bottLabs} ${currentSection === 'labs' ? style.active : ''}`} onClick={() => scrollToSection(labsRef)}>
        Labs
      </button>
      <button className={`${style.bottSkills} ${currentSection === 'skills' ? style.active : ''}`} onClick={() => scrollToSection(skillsRef)}>
        Skills
      </button>
      <button className={`${style.bottContact} ${currentSection === 'contact' ? style.active : ''}`} onClick={() => scrollToSection(contactRef)}>
        Contact
      </button>
    </div>
  );
};


export default Navbar;
