import React from 'react';
import Text from '../../components/text/text';
import Navbar from '../../components/navbar/navbar';
import style from "./home.module.css";


const Home = () => {
  return (
    <div>
      <div className={style.navContainer}>
        <Navbar/>
      </div>
    <div className={style.homeCont}>
      
      <div className={style.textContainer}>
        <div className={style.text}>
          <Text/>
        </div>
      </div>
    </div>
    <div className={style.section2}>
    </div>
    <div className={style.section3}>
    </div>
  </div>
  );
};

export default Home;







