import React from "react";
import style from "./landing.module.css";
import imgLanding from "../../img/imgLanding.png";
/* import mail from "../../img/mail.png";
import linkedin from "../../img/linkedin.png";
import githube from "../../img/githube.png";
import wpp from "../../img/wpp.png"; */

const Landing = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.imgLanding}>
          <img className={style.imgLand} src={imgLanding} alt="Imagen" />
          <div className={style.line}></div>
        </div>
        <h1 className={style.h1Landing}>Andrés Pérez Merello - WebDev</h1>
        <p className={style.pLanding}>
          JavaScript / HTML / CSS / React / Redux / PostgreSQL / Express / Node
        </p>
        
       {/*  <div className={style.iconos}>
          <img className={style.mail} height="50px" src={mail} alt="mail" />
          <img
            className={style.linkedin}
            height="50px"
            src={linkedin}
            alt="linkedin"
          />
          <img
            className={style.githube}
            height="50px"
            src={githube}
            alt="githube"
          />
          <img className={style.wpp} height="50px" src={wpp} alt="wpp" />
        </div> */}
      </div>
    </>
  );
};

export default Landing;
