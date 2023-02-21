import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../components/loading/loading";
import { useGetUsersQuery } from "../store/api/apiSlice";
import { setEmail } from "../store/slices/authSlice";
import "../styles/profileUser.css";

const ProfileUser = () => {
  var email1 = useSelector((state) => state.auth.userEmail);
  /* console.log(email); */
  var { data, isError, error, isLoading } = useGetUsersQuery();
  console.log("console.log 1", data?.usuarios)
  console.log(data)
  const prueba = data?.usuarios?.map((e) => {
    nombre = e.nombre;
    setEmail = e.email;
  });
  console.log(prueba)
  /*  const mapeo = prueba.map((e, index) =>  {
    index = e.id,
    email = e.email
})
 */
console.log(data)
console.log(email1)
/* console.log(data)

 var prueba = async () =>{
   await data?.usuarios.map((e, index) => {
   index = e.id
  })};

  console.log(prueba(data.ususarios)) */

  if (isLoading) return <Loading />;
  else if (isError) return <div>{error.message}</div>;
  return (
    <div className="profile-container">
      <div className="title-welcome">
        <h1>{}</h1>
        <h2>BIENVENIDO</h2>
      </div>
      <div className="deatils-profile">
        <div className="profile-center">
          <div className="img-profile-container">
            <img src="" alt="aca poner foto" />
          </div>
          <div className="profile-details">
            <p>email</p>
            <p>Nombre</p>
          </div>
        </div>
      </div>
      <div className="your-courses-container">
        <div className="title-your-courses">
          <h3>Tus cursos</h3>
        </div>
        <div className="list-courses">
          <div className="your-courses">
            <div className="details-courses">
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="progress-course">
              <progress max="100" value="50"></progress>
              <button>Ir al curso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
