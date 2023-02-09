import React from "react";
import "../styles/cardsCourses.css";
const CardsCourses = () => {
  return (
    <div className="card-course-container">
      <div className="img-course">
        <img src="" alt="curso" />
      </div>
      <div className="info-courses">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
        <div>
          <div className="other-info">
            <div className="boxes">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="box-4"></div>
          </div> 
        </div>
        <div className="go-to-course">
          <div className="price-course">$350</div>
          <button className="button-course">Ir al curso</button>
        </div>
      </div>
    </div>
  );
};

export default CardsCourses;
