import React from "react";
import Henry from "../../img/henryLogo.png";
import Pato from "../../img/PATOimg.png";
import style from "./labs.module.css";
import Pf from "../../img/PF1.png";
import Next from "../../img/gifProgramacion.gif"

const Labs = () => {
  return (
    <div className={style.contImg}>
      <div className={style.cards}>
        <div class={style.card}>
          <div class={style.image}>
            <img src={Henry} alt="Henry" />
          </div>
          <div class={style.card_description}>
            <p class={style.text_title}> Proyecto Individual</p>
            <p class={style.text_body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div class={style.card}>
          <div class={style.imagePf}>
            <img src={Pf} alt="Pf" />
          </div>
          <div class={style.card_description}>
            <p class={style.text_title}>Proyecto Grupal</p>
            <p class={style.text_body}>
              FLEXAGENDA es una agenda virtual que simplifica la programación de
              turnos para los profesionales. La aplicación incluye una
              plataforma de pago integrada, un calendario de visualización de
              turnos, una agenda para gestionar las citas, inicio de sesión y
              registro de usuario, envío de correos electrónicos de confirmación
              y autenticación de terceros para mejorar la seguridad. Tecnologías
              utilizadas: React, Redux, CSS, Bootstrap, librerías. Node Js,
              Express. PostgreSQL, Firebase.
            </p>
          </div>
        </div>

        <div class={style.card}>
          <div class={style.imagePato}>
            <img src={Pato} alt="Henry" />
          </div>
          <div class={style.card_description}>
            <p class={style.text_title}> Proyecto Grupal</p>
            <p class={style.text_body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div class={style.card}>
          <div class={style.imageNext}>
            <img src={Next} alt="Next" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Labs;
