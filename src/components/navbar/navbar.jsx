import React from 'react';
import style from './navbar.module.css';

const Navbar = ({ aboutRef, skillsRef, labsRef, contactRef, scrollToSection }) => {
  return (
    <div className={style.navbar}>
      <button className={style.bottAbout} onClick={() => scrollToSection(aboutRef)}>
        About
      </button>
      <button className={style.bottSkills} onClick={() => scrollToSection(skillsRef)}>
        Skills
      </button>
      <button className={style.bottLabs} onClick={() => scrollToSection(labsRef)}>
        Labs
      </button>
      <button className={style.bottContact} onClick={() => scrollToSection(contactRef)}>
        Contact
      </button>
    </div>
  );
};

export default Navbar;
