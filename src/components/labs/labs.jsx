import React from "react";
import Henry from "../../img/henryLogo.png";
import Pato from "../../img/PATOimg.png";
import style from "./labs.module.css";
import Pf from "../../img/PF1.png";
import Next from "../../img/gifProgramacion.gif";
import ReactPng from "../../img/React.png";
import PostgreSQL from "../../img/PostgreSQL.png";
import Tech from "../tech/tech";

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
              Este fue mi primer proyecto final para el bootcamp de Henry,
              consistía en el diseño y desarrollo de una App de países que
              incluía: búsqueda de paises, filtros combinados, ordenamientos e
              incorporacion de nueva información.
            </p>

              <div className={style.tech}>
                <strong>PRINCIPALES TECNOLOGIAS:</strong>
              <div className={style.icons}>
                <Tech />
              </div>
              </div>
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
            <div className={style.tech}>
                <strong>PRINCIPALES TECNOLOGIAS:</strong>
              <div className={style.icons}>
                <Tech />
              </div>
              </div>
          </div>
        </div>

        <div class={style.card}>
          <div class={style.imagePato2}>
            <img src={Pato} alt="Henry" />
          </div>
          <div class={style.imagePato}>
            <img src={Pato} alt="Henry" />
          </div>
          <div class={style.card_description}>
            <p class={style.text_title}> Proyecto Freelancer</p>
            <p class={style.text_body}>
              Este Proyecto fue diseñado a beneficio con el objetivo de apoyar y
              difundir la labor del centro PATO Estimulación Temprana, una
              organización que brinda atención y servicios especializados a
              niños y niñas con discapacidades o necesidades especiales en su
              desarrollo temprano. La página web consta de 6 secciones que
              incluyen una presentación detallada del centro, su misión y
              visión, testimonios de padres y familiares, información sobre los
              servicios y programas que ofrecen, localización del centro a
              través de Google Maps, entre otras.
            </p>
            <div className={style.tech}>
                <strong>PRINCIPALES TECNOLOGIAS:</strong>
              <div className={style.icons}>
                <Tech />
              </div>
              </div>
          </div>
        </div>

        <div class={style.card}>
          <div class={style.imageNext}>
            <img src={Next} alt="Next" />
          </div>
          <div class={style.card_description}>
            <p class={style.text_title}>Próximamente</p>
            <p class={style.text_body}>..........</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;
