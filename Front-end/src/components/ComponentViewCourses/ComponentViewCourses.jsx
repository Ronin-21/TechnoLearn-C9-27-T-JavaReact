import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import './ComponentViewCourses.css'

export const ComponentViewCourses = ({data, idCard}) => {
  /* creo que tiene que ver con el problema de por que trae un undefined
  al principio y por lo que hay que hacer la variable inferior */
  const datosUsuario = JSON.parse(localStorage.getItem("userInfo"));
  const [currentVideo, setCurrentVideo] = useState(0);
  const lenght = datosUsuario?.length;
/* seccion donde permite setear que video ver recorrer un array a travez
de un boton tipo flecha */
  const handlePrevSlide = () =>
    setCurrentVideo(currentVideo === 0 ? lenght - 1 : currentVideo - 1);

  const handleNextSlide = () =>
    setCurrentVideo(currentVideo === lenght - 1 ? 0 : currentVideo + 1);

/* esta variable lo que hace es juntar todas las id relacionadas con el key
que viene de youtube como codigo para reproducir el curso o recurso pedido */
let prueba = data?.cursosUsuario[idCard]?.urls.map((e)=>{
              return e.id_video
})
if(prueba === undefined) {
  prueba = [""]
}


  return (
    <div className="slider-container-video">
    {/* hacer un tope en los videos por que sino se rompen,
    flecha identificatoria para mover el slider */}
      <div className="slider-btn-video prev" onClick={handlePrevSlide}>
      <FaAngleLeft />
      </div>
    <div>
      <div className="slider-video-container">
      <iframe
						src={`https://www.youtube.com/embed/${prueba[currentVideo]}`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>
      </div>
    </div>
    {/* hacer un tope en los videos por que sino se rompen,
    flecha identificatoria para mover el slider  */}
      <div className="slider-btn-video next" onClick={handleNextSlide}>
      <FaAngleRight />
      </div>
    </div>
  );
};
