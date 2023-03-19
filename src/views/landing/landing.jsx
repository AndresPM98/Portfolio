import React from "react";
import style from "./landing.module.css";
import imgLanding from "../../img/imgLanding.png";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  const goToPortfolio = () => {
    history.push("/home");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.imgLanding}>
          <img className={style.imgLand} src={imgLanding} alt="Imagen" />
        </div>
        <h1 className={style.h1Landing}>Andrés Pérez Merello - WebDev</h1>
        <p className={style.pLanding}>
          JavaScript / HTML / CSS / React / Redux / PostgreSQL / Express / Node
        </p>
        <div className={style.line}></div>
        <div className={style.botton}>
          <button className={style.goPorfolio} onClick={goToPortfolio}>
            Home
            <span class="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
