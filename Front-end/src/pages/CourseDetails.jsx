import React from "react";
import "../styles/coursesDetails.css";
const CourseDetails = () => {
  return (
    <div className="courses-details-container">
      <div className="video-course">
        <video src=""></video>
      </div>
      <div className="description-courses">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem, ipsum dolor.</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod
          sunt similique obcaecati impedit veniam itaque non hic voluptate
          doloribus, suscipit ab quo officia facere culpa earum. Aperiam, minima
          explicabo.
        </div>
        <div className="boxes-icon">
          <div className="icon-box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="buy-container">
        <div>
          <p>Lorem ipsum dolor sit.</p>
          <p>$350</p>
        </div>
        <div className="btn-buy-container">
          <button>Comprar el curso</button>
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
          <h3>¿Para quién es este curso?</h3>
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
      <div className="rating-container">
        <div className="title-rating">
          <h3>RATING</h3>
        </div>
        <div className="">
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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
