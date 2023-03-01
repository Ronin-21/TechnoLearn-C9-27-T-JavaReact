import React, { useEffect } from "react";
import { BsFillPlayCircleFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
import { FaStar, FaRegStar, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  usePutCursosUserMutation,
  useGetUserByIDQuery,
} from "../../store/api/apiSlice";
import { useModal } from "../../hook/useModal";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import "./Card.css";

const CardComponent = ({
  nombreCurso,
  miniaturaCurso,
  id,
  acceso,
  instructor,
}) => {
  const [putCursosUser, { isSuccess }] = usePutCursosUserMutation();

  const idUsuario = useSelector((state) => state.auth.id);
  const isLog = useSelector((state) => state.auth.isLoggedIn);
  const { data } = useGetUserByIDQuery(idUsuario);
  const [modalAlertLog, showModalAlertLog] = useModal();
  const [modalAlertPro, showModalAlertPro] = useModal();
  const [modalAlertSuccess, showModalAlertSuccess] = useModal();
  const [modalAlertCard, showModalAlertCard] = useModal();
  let filtroId = data?.cursosUsuario.some((e) => e.id === id);

  const handlePutCursos = () => {
    if (isLog === false) {
      showModalAlertLog();
    } else if (filtroId) {
      showModalAlertCard();
    } else if (acceso === "PRO" && data?.suscripto === 0) {
      showModalAlertPro();
    } else if (acceso === "FREE" && data?.suscripto === 0) {
      putCursosUser({ idUsuario, idCurso: id });
    } else if (acceso && data?.suscripto === 1) {
      putCursosUser({ idUsuario, idCurso: id });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      showModalAlertSuccess();
    }
  }, [isSuccess]);

  return (
    <div className="card-container">
      <div className="card-img-container">
        <BsFillPlayCircleFill className="btn-play" />
        <img src={miniaturaCurso} alt="FOTO" />
      </div>
      <h5 className="card-title">{nombreCurso}</h5>
      <p className="card-text">
        <span className="font-bold text-2xl">Instructor: </span>
        {instructor}
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
          <div
            className="flex flex-col items-center text-center font-bold cursor-pointer"
            onClick={handlePutCursos}
          >
            {filtroId ? (
              <BsHeartFill className="card-btn-heart" />
            ) : (
              <BsHeart className="card-btn-heart" />
            )}
            <p>Agregar a tu lista de favoritos</p>
          </div>
        </div>
        <div className="card-btn-text">
          <p>CURSO {acceso}</p>
          <Button fontSize={"24px"}>
            <Link to={`/courses/${id}`} className="flex items-center gap-3">
              Ir al curso <FaAngleRight />
            </Link>
          </Button>
        </div>
      </div>
      <Modal isActive={modalAlertLog} showModal={showModalAlertLog}>
        <h1 className="modal-title">No has iniciado sesion!</h1>
        <p className="modal-data">
          Debes iniciar sesion para disfrutar tus cursos
        </p>
      </Modal>
      <Modal isActive={modalAlertPro} showModal={showModalAlertPro}>
        <h1 className="modal-title">Sin suscripcion no hay exito</h1>
        <p className="modal-data">
          Necesitas suscribirte para poder ver este curso
        </p>
        <p className="modal-title"><TfiFaceSad/></p>
      </Modal>
      <Modal isActive={modalAlertSuccess} showModal={showModalAlertSuccess}>
        <h1 className="modal-title">Agregado con exito</h1>
        <p className="modal-data">Disfruta de tu curso en tu perfil</p>
      </Modal>
      <Modal isActive={modalAlertCard} showModal={showModalAlertCard}>
        <h1 className="modal-title">No es necesario</h1>
        <p className="modal-data">Ya tienes este curso en tu perfil</p>
      </Modal>
    </div>
  );
};

export default CardComponent;
