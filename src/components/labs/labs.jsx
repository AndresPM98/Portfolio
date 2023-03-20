import React from "react";
import FlexAg from "../../img/FlexAg.png";
import Country from "../../img/Country.png"
import style from "./labs.module.css"


const Labs = () => {
  return (
    <div className={style.contImg}>
      <div className={style.img1}>
     {/*  <img src={FlexAg} alt="FlexAg" /> */}
      </div>
      <div className={style.img2}>
{/*       <img src={Country} alt="Country" />
 */}      </div>
    </div>
  );
};

export default Labs;