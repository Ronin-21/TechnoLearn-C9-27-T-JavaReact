import React from "react";
import "../styles/coursesDetails.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseDetails = () => {
  return (
    <div className="courses-details-container">
      <div className="info-top-course">
        <div className="video-course">
          <video src=""></video>
        </div>
        <div className="description-courses">
          <div>
            <span>
              Curso Práctico Python: De Cero a programador profesional.
            </span>
          </div>
          <div>
            Aprenderás Phyton y sus mejores módulos:
            Django, PipenV, Tkinter y más.
          </div>
          <div>
            <span>Creado por: Aldo Chávez</span>
          </div>
          <div className="boxes-icon">
            <div className="icon-box">
              <div><i><FaStar /></i></div>
              <div><i><FaStar /></i></div>
              <div><i><FaStar /></i></div>
              <div><i><FaStar /></i></div>
              <div><i><FaStarHalfAlt /></i></div>
            </div>
          </div>
          <div>
            <p> Tiempo de duración: 58 hrs
              Fecha de actualización: 3 de febrero de 2023</p>
          </div>
          <div className="buy-container">
            <div>
              <p>A solo</p>
              <p>$350</p>
            </div>
            <div className="btn-buy-container">
              <button>Comprar el curso</button>
            </div>
          </div>
        </div>
      </div>
      <div className="program-courses-container">
        <div className="title-program">
          <h3>PROGRAMA</h3>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
        <div className="program-details">
          <div>Lorem ipsum dolor sit amet.</div>
          <div>
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="ask-container">
        <div className="title-ask">
          <h3>¿PARA QUIÉN ES EL CURSO?</h3>
        </div>
        <div className="ask-details">
          <div className="circle"></div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
        </div>
        <div className="ask-details">
          <div className="circle"></div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
        </div>
        <div className="ask-details">
          <div className="circle"></div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
        </div>
      </div>
      <div className="info-instructor-container">
        <div className="title-instructor">
          <h3>INSTRUCTOR</h3>
        </div>
        <div className="img-details-instructor-container">
          <div className="img-instructor">
            <img src="" alt="img-photo" />
          </div>
          <div className="details-instructor">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga!</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="rating-container">
        <div className="title-rating">
          <h3>RATING  DEL CURSO</h3>
        </div>
        <div className="score-container">
          <div className="score">
            <div>4.7</div>
            <div className="icon-score"></div>
          </div>
          <p>55 estudiantes</p>
        </div>
      </div>
      <div className="reviews-container">
        <div className="title-review">
          <h3>RESEÑAS</h3>
        </div>
        <div className="reviews-text">
          <div className="review-details">
            <div className="circle-review"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, at.
              Placeat, esse vero? Laborum, ea.
            </p>
          </div>
          <div className="boxes">
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
          </div>
        </div>
        <div className="reviews-text">
          <div className="review-details">
            <div className="circle-review"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, at.
              Placeat, esse vero? Laborum, ea.
            </p>
          </div>
          <div className="boxes">
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
            <div><i><FaStar /></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
