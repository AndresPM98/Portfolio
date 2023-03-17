import React from 'react';
import style from "./text.module.css"

const Text = () => {
    return(
        
        <div className={style.text}>
            <h1 className={style.about}>SOBRE MI:</h1>
            <p className={style.pText}>Soy un Desarrollador Full-Stack graduado en el Bootcamp de Henry y con estudios en Diseño Industrial. Combino la funcionalidad con el diseño estético, creando productos digitales y físicos desde una perspectiva interesante y multidisciplinaria. Mi experiencia en programación Full-Stack me ha permitido desarrollar habilidades en diversas tecnologías, incluyendo Javascript, HTML, CSS, React, Redux, Node.js, entre otras. Mi formación en Diseño Industrial me ha brindado una sólida base en el análisis de necesidades del usuario, el pensamiento creativo y la resolución de problemas. Busco siempre encontrar el equilibrio entre el diseño y la funcionalidad para crear productos atractivos, intuitivos y eficientes. Como Desarrollador Full-Stack, estoy capacitado para trabajar en todas las capas de una aplicación web, desde el front-end hasta el back-end, teniendo una visión completa del proceso de creación y ejecución de un producto digital.</p>
        </div>

    )
}

export default Text;