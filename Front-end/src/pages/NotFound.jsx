import { Link } from "react-router-dom";
import imgError from "../assets/img/imgError.png";
import textError from "../assets/img/textError.png";
import "../styles/NotFound.css";

const NotFound = () => {
  /*   const error = useRouteError();
(este iva en react-router-dom)
 useRouteError */

  return (
    <>
      <div className="container w-1/3 fixed my-10 ">
        <div className="w-1/5 text-9xl fixed items-center justify-center">
          <img className="my-10" src={imgError} alt="Not Found" />
          <img src={textError} alt="Not Found" />
        </div>
        <div className="text">
          <p>
            Pagina no encontrada, te sugerimos
            {/* <p>{error.statusText || error.message}</p> */}
            <Link to="/" className="text-indigo-600 ">
              {" "}
              ir al Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
