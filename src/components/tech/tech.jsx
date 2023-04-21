import React from 'react';
import ReactPng from "../../img/React.png";
import PostgreSQL from "../../img/PostgreSQL.png";
import style from "./tech.module.css"

const Tech = () => {
    return(
        
        <div className={style.icons}>
          
          <img
            className={style.javascript}
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"
            height="50rem"
            width="50rem"
            alt="javascript"
          />
        
          <img
            className={style.html}
            src="https://camo.githubusercontent.com/bfa71fe5e1eb3ca57a7e4ef9c6b2ca21414c4fdab27ac6861e211e7cfe8f7d9f/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f68746d6c352d6f726967696e616c2d776f72646d61726b2e737667"
            height="50rem"
            alt="HTML"
            style={{ marginLeft: "2rem" }}
          />
         
          <img
            className={style.css}
            src="https://camo.githubusercontent.com/1f14c9c472b21cf8790a4fb6914be3a3181e957ecc2b397775f06a989d20cb37/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f637373332d6f726967696e616c2d776f72646d61726b2e737667"
            height="50rem"
            alt="CSS"
            style={{ marginLeft: "2rem" }}
          />
        
          <img
            className={style.react}
            src={ReactPng}
            height="50rem"
            alt="react"
            style={{ marginLeft: "2rem" }}
          />
          
          <img
            className={style.redux}
            src="https://camo.githubusercontent.com/b81456c0e15928e93c1e5f4d06b6a6938718d8f106a8169a570cd42b5e32f608/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656475782d6f726967696e616c2e737667"
            height="50rem"
            alt="redux"
            style={{ marginLeft: "2rem" }}
          />
         
          <img
            className={style.psql}
            src={PostgreSQL}
            height="50rem"
            alt="PostgreSQL"
            style={{ marginLeft: "2rem" }}
          />
        
        </div>

    )
}

export default Tech;