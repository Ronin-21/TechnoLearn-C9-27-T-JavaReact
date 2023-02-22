import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading/loading";
import { useGetUsersQuery } from "../store/api/apiSlice";
import { FaStar, FaRegStar, FaAngleRight } from "react-icons/fa";
import CardComponent from "../components/Cards/CardComponent";
import "../styles/profileUser.css";
import { BsFillPlayCircleFill, BsHeart } from "react-icons/bs";
import Button from "../components/Button/Button";

const ProfileUser = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);
  const { data, isError, error, isLoading } = useGetUsersQuery();
  const usuarioData = data?.usuarios.filter((e) => e.email === userEmail);
  const idPerfilUsuario = Math.floor(Math.random() * 100);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  
  console.log(data.usuarios[0].cursosUsuario[0]);
  useEffect(() => {
    if (!isLogged) {
      return navigate("/login");
    }
  }, []);

  /* console.log(usuarioData);
  console.log(usuarioData[0].nombre) */
  /* console.log(data.usuarios[0].nombre); */
  
  if (isLoading) return <Loading />;
  else if (isError) return <div>{error.message}</div>;
  return (
    <div className="profile-container">
      <div className="title-welcome">
        <h2>
          BIENVENIDO <p>{usuarioData[0].nombre}</p>
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
          <p>email:</p>
            <p>{usuarioData[0].email}</p>
          </div>
        </div>
      </div>
      <div className="your-courses-container">
        <div className="title-your-courses">
          <h3>Tus cursos</h3>
        </div>
        <div className="list-courses">
        <div className="card-container">
      <div className="card-img-container">
        <BsFillPlayCircleFill className="btn-play" />
        <img src={data.usuarios[0].cursosUsuario[0].miniaturaCurso} alt="laMiniatura" />
      </div>
      <h5 className="card-title">{data.usuarios[0].cursosUsuario[0].nombreCurso}</h5>
      <p className="card-text">
       {data.usuarios[0].cursosUsuario[0]}
      </p>
      <div className="card-btn-container">
        <div className="card-btn-fav">
          <div className="card-btn-stars">
           {/*  <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar /> */}
          </div>
          {/* <div className="flex flex-col items-center text-center font-bold">
            <BsHeart className="card-btn-heart" />
            <p>Agregar a tu lista de favoritos</p>
          </div> */}
        </div>
        <div className="card-btn-text">
          <p>CURSO FREE</p>
          <Button fontSize={"2xl"} padX={4} padY={2}>
            <Link to={`/courses/1`} className="flex items-center gap-3">
              Ver curso <FaAngleRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
