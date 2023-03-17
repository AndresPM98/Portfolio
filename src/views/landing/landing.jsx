import React from "react";
import style from "./landing.module.css"
import imgLanding from "../../img/imgLanding.png";


  const Landing = ()=>{

    return(
        <>
            <div className={style.container}>
                <div className={style.imgLanding}>
                    <img className={style.imgLand} src={imgLanding} alt="Imagen" />
                </div>
                <h1 className={style.h1Landing}>Andrés Pérez Merello - WebDev</h1>
                <p className={style.pLanding}>JAVASCRIPT / HTML / CSS / REACT / REDUX / SQL / EXPRESS </p>
                <div className={style.line}></div>
            </div>
        </>
    ) 
}
export default Landing; 