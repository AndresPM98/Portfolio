import React from "react";
import style from "./skills.module.css"
import Node from "../../img/Node.png"
import Express from "../../img/Express.png"
import SolidW from "../../img/SolidW.png";
import Sequelize from "../../img/Sequelize.png";
import ReactPng from "../../img/React.png";
import PostgreSQL from "../../img/PostgreSQL.png"
const Skills = () => {
  return (

      <div className={style.iconCont}>
        <div className={style.icons}>
        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png" height="145rem" alt="javascript shield logo icon"/>
       <img src="https://camo.githubusercontent.com/bfa71fe5e1eb3ca57a7e4ef9c6b2ca21414c4fdab27ac6861e211e7cfe8f7d9f/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f68746d6c352d6f726967696e616c2d776f72646d61726b2e737667" height="140rem" alt="HTML" />
       <img src="https://camo.githubusercontent.com/1f14c9c472b21cf8790a4fb6914be3a3181e957ecc2b397775f06a989d20cb37/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f637373332d6f726967696e616c2d776f72646d61726b2e737667" height="140rem" alt="CSS" />
        <img src={ReactPng} height="140rem" alt="react" />
        <img src="https://camo.githubusercontent.com/b81456c0e15928e93c1e5f4d06b6a6938718d8f106a8169a570cd42b5e32f608/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f72656475782d6f726967696e616c2e737667" height="140rem" alt="redux" />
        <img src={PostgreSQL} height="140rem" alt="PostgreSQL" />
        <img src="https://camo.githubusercontent.com/b7ea09b0c030ae14623cfc3a52ab3ee0d07e0259a1b230139e65ba00454327c9/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6769742d73636d2d69636f6e2e737667" height="140rem" alt="Git" />
        <img src="https://camo.githubusercontent.com/db639beaeee1c24ed7979a95becbfb0e8067e8e0526d7ce3a74dcb488e6d41fc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6669676d612d69636f6e2e737667" height="140rem" alt="Figma" />
        <img src="https://camo.githubusercontent.com/4139e3f1661018381e0961baa746518f0e394103f0261c8b191474c6f7694a78/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6a71756572792e706e67" height="140rem" alt="JQuery" />
        <img src={Node} height="140rem" alt="Node Js"/>
        <img src={Express} height="140rem" alt="Express" />
        <img src={Sequelize} height="140rem" alt="SolidWorks" />
        <img src={SolidW} height="140rem" alt="SolidWorks" />
        </div>
      </div>
  );
};

export default Skills;