import React from "react";
import imagen from "./banner3.png";
import "./algo.css";

const CardComponent = () => {
  return (
    <div className="flex item-center justify-center min-h-screen container mx-auto ">
      {/* <--Grid--> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        <div
          className=" card"
        >
          <div className="bg-slate-300 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src={imagen} alt="" />
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">
              Camp Batu Gede
            </h5>
            <p className="text-slate-500 text-lg mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              beatae.
            </p>
            <p className="text-slate-900 text-lg m-2 pt-3 pb-6">350</p>
            <div className="columns-auto flex gap-6  ">
              <div>
                <a
                  href="#"
                  className="text-center bg-blue-400 text-blue-700 py-2 rounded-xs "
                >
                  a lista de deseados
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-center bg-blue-400 text-blue-700 py-2 rounded-xs"
                >
                  Comprar
                </a>
              </div>
            </div>

        


          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
