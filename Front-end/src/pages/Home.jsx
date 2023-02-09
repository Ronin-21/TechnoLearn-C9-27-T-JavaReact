import React from "react";
import Slider from "../components/Slider/Slider";
import { bannerImages } from "../utils/bannerImages";
import CardsCourses from "../components/CardsCourses";
import CardComponent from "../components/Cards/CardComponent";
import { Newsletter } from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Slider sliderData={bannerImages} />
      {/* 	<CardsCourses/> */}
      <CardComponent />
      <Newsletter />
    </>
  );
};

export default Home;
