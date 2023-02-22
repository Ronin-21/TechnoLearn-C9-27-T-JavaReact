import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading/loading";
import { useGetUsersQuery } from "../store/api/apiSlice";
import CardComponent from "../components/Cards/CardComponent";
import "../styles/profileUser.css";

const ProfileUser = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);
  const { data, isError, error, isLoading } = useGetUsersQuery();
  const usuarioData = data?.usuarios.filter((e) => e.email === userEmail);
  const idPerfilUsuario = Math.floor(Math.random() * 100);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      return navigate("/login");
    }
  }, []);

  console.log(usuarioData);
  if (isLoading) return <Loading />;
  else if (isError) return <div>{error.message}</div>;

  return (
    <div className="profile-container">
      <div className="title-welcome">
        <h2>
          BIENVENIDO <p>{usuarioData.nombre}</p>
        </h2>
      </div>
      <div className="deatils-profile">
        <div className="profile-center">
          <div className="img-profile-container">
            <img
              className="img-profile"
              src={`https://randomuser.me/api/portraits/men/${idPerfilUsuario}.jpg`}
              alt="aca poner foto"
            />
          </div>
          <div className="profile-details pt-6">
            <p>{usuarioData.email}</p>
          </div>
        </div>
      </div>
      <div className="your-courses-container">
        <div className="title-your-courses">
          <h3>Tus cursos</h3>
        </div>
        <div className="list-courses">
          {/* <CardComponent
            nombreCurso={usuarioData[0].cursosUsuario[0].nombreCurso}
            miniaturaCurso={usuarioData[0].cursosUsuario[0].miniaturaCurso}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
