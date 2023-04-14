import React from 'react';
import style from "./text.module.css"

const Text = () => {
    return(
        
        <div className={style.text}>
            <h1 className={style.about}>SOBRE MI:</h1>
            <p className={style.pText}>
            <strong>¡Bienvenido a mi portafolio!</strong> Me alegra que estés aquí para conocer más sobre mi trabajo como Desarrollador Web Full-Stack. Me llamo <strong>Andrés Pérez Merello</strong> y soy graduado del Bootcamp de Henry, con estudios en Diseño Industrial.  Mi enfoque multidisciplinario me ha proporcionado una sólida base en el análisis de las necesidades del usuario y la generación de soluciones creativas que combinan estética y funcionalidad, creando así productos digitales y físicos muy completos y acabados desde distintos puntos de vista.  Mi experiencia en programación me ha permitido desarrollar habilidades en diversas tecnologías, incluyendo <strong>Javascript, HTML, CSS, React, Redux, Node.js, </strong>entre otras. Como Desarrollador Full-Stack, estoy capacitado para trabajar en todas las capas de una aplicación web, desde el front-end hasta el back-end, teniendo una visión completa del proceso de creación y ejecución de un producto digital.
            En este portafolio, podrás ver algunos de los proyectos que he desarrollado y conocer más acerca de mi enfoque multidisciplinario y habilidades técnicas.
            ¡Gracias por visitar mi portafolio!    
            </p>
        </div>

    )
}

export default Text;