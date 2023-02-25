import React from "react";
import { BsFillPlayCircleFill, BsHeart } from "react-icons/bs";
import { FaStar, FaRegStar, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  usePutCoursesUserMutation,
} from "../../store/api/apiSlice";
import "./Card.css";

const CardComponent = ({
  nombreCurso,
  miniaturaCurso,
  id
}) => {
  //...........Ingreso email en login y trae en este estado...................//
  const userEmail = useSelector((state) => state.auth.userEmail);
  //...........se supone que deberia hacer traerme el id de usuario............//
  const userId = useSelector((state) => state.auth.id);
  /* console.log(datosUsuarioFromCard); */

  /* constante que contiene el id de los cursosUsuario */

  /*  console.log(usuarioDataId);
  console.log(cursosUsuarioId); */

  const [putCoursesUser, { isError, error, isSuccess }] =
    usePutCoursesUserMutation();
  const cursoAgregar = { idUsuario: userId, idCurso: id };
  /* console.log(cursoAgregar) */
  return (
    <div className="card-container">
      <div className="card-img-container">
        <BsFillPlayCircleFill className="btn-play" />
        <img src={miniaturaCurso} alt="" />
      </div>
      <h5 className="card-title">{nombreCurso}</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.
      </p>
      <div className="card-btn-container">
        <div className="card-btn-fav">
          <div className="card-btn-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <div className="flex flex-col items-center text-center font-bold">
            <BsHeart className="card-btn-heart" />
            <p>Agregar a tu lista de favoritos</p>
          </div>
        </div>
        <div className="card-btn-text">
          <p>CURSO FREE</p>
          <Button fontSize={"2xl"} padX={4} padY={2}>
            <Link to={`/courses/${id}`} className="flex items-center gap-3">
              Ir al curso <FaAngleRight />
            </Link>
          </Button>
          <button
            fontSize={"2xl"}
            padX={4}
            padY={2}
            onClick={() => putCoursesUser(cursoAgregar)}
          >
            <Link to={`/`} className="flex items-center gap-3">
              Agregar <FaAngleRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
