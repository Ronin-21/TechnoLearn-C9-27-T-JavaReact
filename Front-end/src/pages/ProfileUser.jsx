import React from "react";
import "../styles/profileUser.css";
const ProfileUser = () => {
    return (
        <div className="profile-container">
            <div className="title-welcome">
                <h2>BIENVENIDO</h2>
            </div>
            <div className="deatils-profile">
                <div className="profile-center">
                    <div className="img-profile-container">
                        <img src="" alt="" />
                    </div>
                    <div className="profile-details">
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum dolor.</p>
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
            <div className="wish-list-container">
                <div className="title-wish-list">
                    <h3>Tus lista de deseos</h3>
                </div>
                <div className="list-courses">
                    <div className="wish-list">
                        <div className="details-courses">
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="buy-course">
                            <button>Comprar curso</button>
                        </div>
                    </div>
                    <div className="wish-list">
                        <div className="details-courses">
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="buy-course">
                            <button>Comprar curso</button>
                        </div>
                    </div>
                    <div className="wish-list">
                        <div className="details-courses">
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="buy-course">
                            <button>Comprar curso</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUser;
