import React from "react";
import Text from "../text/text";
import style from "./about.module.css"
import aboutMe2 from "../../img/aboutMe2.png"

const About = () => {
  return (
    <div>
      <div >
        <Text />
      </div>
      <div className={style.imgAbout}>
        <img src={aboutMe2} alt="abotMe2" />
      </div>
    </div>
  );
};

export default About;
