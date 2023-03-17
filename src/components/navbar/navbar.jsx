import React from 'react';
import style  from './navbar.module.css';

const Navbar = () => {
    return(
        
        <div className={style.navbar}>
            <button className={style.bottAbout}>About</button>
            <button className={style.bottSkills}>Skills</button>
            <button className={style.bottLabs}>Labs</button>
            <button className={style.bottContact}>Contact</button>
        </div>

    )
}

export default Navbar;