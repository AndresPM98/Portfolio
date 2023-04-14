import React from 'react';
import style from "./text.module.css"

const Text = () => {
    return(
        
        <div className={style.text}>
            <h1 className={style.about}>SOBRE MI:</h1>
            <p className={style.pText}>Hola! Me alegro que estés dando un vistazo a mi Portafolio, espero que te guste! <br/> Me presento, me llamo <strong>Andrés Pérez Merello</strong> y soy Desarrollador Web Full-Stack, graduado en el Bootcamp de Henry y con estudios en Diseño Industrial alcanzando un Bachiller Universitario en Ciencias Aplicadas. Mi enfoque multidisciplinario me ha brindado una sólida base en el análisis de las necesidades del usuario, el pensamiento creativo y la resolución de problemas.Busco siempre encontrar el equilibrio entre el diseño y la funcionalidad, creando productos digitales y físicos muy completos desde distintos puntos de vista . Mi experiencia en programación me ha permitido desarrollar habilidades en diversas tecnologías, incluyendo <strong>Javascript, HTML, CSS, React, Redux, Node.js, </strong>entre otras. {/* Mi formación en Diseño Industrial me ha ayudado a desarrollar una gran capacidad para el trabajo en equipo, sabiendo escuchar y manejarme en la toma de desiciones que afectan al desarrollo del trabajo. Busco siempre encontrar el equilibrio entre el diseño y la funcionalidad para crear productos atractivos, intuitivos y eficientes.*/}  Como Desarrollador Full-Stack, estoy capacitado para trabajar en todas las capas de una aplicación web, desde el front-end hasta el back-end, teniendo una visión completa del proceso de creación y ejecución de un producto digital.</p>
        </div>

    )
}

export default Text;