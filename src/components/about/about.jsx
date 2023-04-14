import React from "react";
import Text from "../text/text";
import Yo from "../../img/yo.png";
import style from "./about.module.css";


const About = () => {
  return (
    <div>
      <Text />
      <div className={style.recuadro}></div>
      <div className={style.recuadro2}></div>
      <div className={style.imgYo}>
        <img src={Yo} alt="Yo" />
      </div>
    </div>
  );
};

export default About;
