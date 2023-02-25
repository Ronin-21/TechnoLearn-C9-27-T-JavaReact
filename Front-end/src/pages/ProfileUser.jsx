import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profileUser.css";
import { useGetUserByIDQuery } from "../store/api/apiSlice";
import CardComponentProfile from "../components/Cards/CardComponentProfile";

const ProfileUser = () => {
  const datosUsuario = JSON.parse(localStorage.getItem("userInfo"));
  const { data } = useGetUserByIDQuery(datosUsuario.id, {
    refetchOnMountOrArgChange: true,
  });

  const idPerfilUsuario = Math.floor(Math.random() * 100);

  const navigate = useNavigate();

  useEffect(() => {
    if (!datosUsuario.isLoggedIn) {
      return navigate("/login");
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="border border-solid bg-slate-100">
        <div className="title-welcome">
          <h2>
            BIENVENIDO
            <p className="text-violet-800 text-6xl">{datosUsuario.nombre}</p>
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
              <h2 className="text-yellow-900 text-xl">EMAIL:</h2>
              <p className="text-3xl">{datosUsuario.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="your-courses-container">
        <div className="title-your-courses">
          <h3>Tus cursos</h3>
        </div>
        <div className="list-courses">
          {data?.cursosUsuario.map((e) => {
            return (
              <CardComponentProfile
                data={data}
                key={e.id}
                id={e.id}
                acceso={e.acceso}
                nombreCurso={e.nombreCurso}
                miniaturaCurso={e.miniaturaCurso}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
