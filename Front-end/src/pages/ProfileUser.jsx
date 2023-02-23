import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import "../styles/profileUser.css";
import { BsFillPlayCircleFill} from "react-icons/bs";
import Button from "../components/Button/Button";

const ProfileUser = ({id}) => {
  // Trae datos del usuario desde el store
  const datosUsuario = useSelector((state) => state.auth);
   console.log(datosUsuario);

  //Proteccion de la ruta si no esta logueado
  const idPerfilUsuario = Math.floor(Math.random() * 100);

  const navigate = useNavigate();

  useEffect(() => {
    if (!datosUsuario.isLoggedIn) {
      return navigate("/login");
    }
  }, []);

  /* console.log(usuarioData);
  console.log(usuarioData[0].nombre) */
  /* console.log(data.usuarios[0].nombre); */
  /* console.log(e.nombre) */
  return (
    <div className="profile-container">
      <div className="title-welcome">
        <h2>
          BIENVENIDO <p>{datosUsuario.nombre}</p>
        </h2>
      </div>
      
          <div className="deatils-profile" >
            <div className="profile-center">
              <div className="img-profile-container">
                <img
                  className="img-profile"
                  src={`https://randomuser.me/api/portraits/men/${idPerfilUsuario}.jpg`}
                  alt="aca poner foto"
                />
              </div>
              <div className="profile-details pt-6">
                <p>email:</p>
                <p>{datosUsuario.email}</p>
              </div>
            </div>
          </div>
      
      <div className="your-courses-container">
        <div className="title-your-courses">
          <h3>Tus cursos</h3>
        </div>

		{datosUsuario.cursosUsuario?.map((e, i) => {
        return (
        <div className="list-courses" key={i}>
          <div className="card-container">
            <div className="card-img-container">
              <BsFillPlayCircleFill className="btn-play" />
              <img src={e.miniaturaCurso} alt="laMiniatura" />
            </div>
            <h5 className="card-title">{e.nombreCurso}</h5>
            <p className="card-text">{e.nombreCurso}</p>
            <div className="card-btn-container">
              <div className="card-btn-fav">
                <div className="card-btn-stars"></div>
              </div>
              <div className="card-btn-text">
                <p>CURSO FREE</p>
                <Button fontSize={"2xl"} padX={4} padY={2}>
                  <Link to={`/courses/${id}`} className="flex items-center gap-3">
                    Ver curso <FaAngleRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
		);
      })}


      </div>
    </div>
  );
};

export default ProfileUser;
