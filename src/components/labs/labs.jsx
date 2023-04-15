import React from "react";
import FlexAg from "../../img/FlexAg.png";
import Henry from "../../img/henryLogo.png";
import Pato from "../../img/PATOimg.png"
import style from "./labs.module.css";

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
        <div class={style.image}>
          <img src={Henry} alt="Henry" />
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
        <div class={style.imagePato}>
          <img src={Pato} alt="Pato" />
        </div>
        <div class={style.card_description}>
          <p class={style.text_title}> Proyecto Freelacer</p>
          <p class={style.text_body}>
          PATO Estimulación Temprana Centro de Estimulación Temprana
          </p>
        </div>
      </div>

      <div class={style.card}>
        <div class={style.image}>
          <img src={Henry} alt="Henry" />
        </div>
        <div class={style.card_description}>
          <p class={style.text_title}> Proyecto Grupal</p>
          <p class={style.text_body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Labs;
