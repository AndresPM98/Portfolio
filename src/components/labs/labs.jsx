import React from "react";
import FlexAg from "../../img/FlexAg.png";
import Henry from "../../img/henryLogo.png";
import style from "./labs.module.css";

const Labs = () => {
  return (
    <div className={style.contImg}>
      <div class={style.book}>
      <p>Hover Me</p>
        <div class={style.cover}>
          
          <img src={Henry} alt="Henry" className={style.imgHenry}/>
        </div>
      </div>
    </div>
  );
};

export default Labs;
