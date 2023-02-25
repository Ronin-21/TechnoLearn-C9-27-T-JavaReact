import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { useModal } from "../../hook/useModal";
import ModalVideo from "../Modal/ModalVideo";
import { ComponentViewCourses } from "../ComponentViewCourses/ComponentViewCourses";
import "./Card.css";

const CardComponentProfile = ({ nombreCurso, miniaturaCurso, id, data }) => {
 
  const [profileModal, showprofileModal] = useModal(true);
  const [viewId, setViewId] = useState(null);

/* cardComponent es donde aparece el modal, seteado con el
id de cada card esto lo que hace es solamente identificar
en otro componente los key de un grupo de videos y no todos */
 const handleClicks = () =>{
    showprofileModal();
    setViewId(id)
 }

  return (
    <div className="card-containerProfile">
      <div className="card-img-container">
        <BsFillPlayCircleFill className="btn-play" />
        <img src={miniaturaCurso} alt="" />
      </div>
      <h5 className="card-title">{nombreCurso}</h5>
      <div className="card-btn-container">
        <div className="card-btn-fav"></div>
        <div className="card-btn-text">
          <button
            className="btn-Card"
            onClick={handleClicks}
          >
            Ver curso <FaAngleRight />
          </button>
          <ModalVideo isActive={profileModal} showModal={showprofileModal}>
          <div>
            <ComponentViewCourses data={data} idCard={viewId} />
          </div>
        </ModalVideo>
        </div>
      </div>
    </div>
  );
};

export default CardComponentProfile;