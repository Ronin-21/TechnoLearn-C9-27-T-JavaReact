import React from "react";
import Slider from "../components/Slider/Slider";
import CardComponent from "../components/Cards/CardComponent";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { useGetCursosQuery } from "../store/api/apiSlice";
import { bannerImages } from "../utils/bannerImages";
import { About } from "../components/About/About";
import { Testimonials } from "../components/Testimonials/Testimonials";
import Loading from "../components/loading/loading";

const Home = () => {
  const { data, isLoading, isError, error } = useGetCursosQuery();

  if (isLoading)
    return (
     <Loading/>
    );
  else if (isError) return <div>{error.message}</div>;

  // const bannerImages = data.slice(0, 3).map((e) => {
  // 	return { img: e.miniaturaCurso, key: e.id };
  // });

  return (
    <>
      <Slider sliderData={bannerImages} />
      <div className="flex item-center justify-center min-h-screen container mx-auto p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.cursos.slice(0, 6).map((e) => {
            return (
              <CardComponent
                key={e.id}
                id={e.id}
                nombreCurso={e.nombreCurso}
                miniaturaCurso={e.miniaturaCurso}
              />
            );
          })}
        </div>
      </div>
      <About />
      <Testimonials testimonialData={bannerImages} />
      <Newsletter />
    </>
  );
};

export default Home;
