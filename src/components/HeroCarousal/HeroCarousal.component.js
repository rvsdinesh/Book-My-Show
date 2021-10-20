import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import {GrNext, GrPrevious} from "react-icons/gr"


//Components
//import {NextArrow, PrevArrow} from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

  const [images, setImages] = useState([]);

  useEffect(() =>{
    const requestNowPlayingMovies = async() =>{
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();

  }, []);

  console.log({images});


  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <GrNext className="bg-gray-800 absolute top-0 bottom-0 px-1 rounded-l-lg fill-current text-white w-11 h-11"/>,
    prevArrow: <GrPrevious className="bg-gray-800 absolute top-0 bottom-0 px-1 rounded-l-lg fill-current text-white w-11 h-11" />
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <GrNext className="bg-gray-800 absolute top-0 bottom-0 px-1 rounded-l-lg fill-current text-white w-11 h-11"/>,
    prevArrow: <GrPrevious className="bg-gray-800 absolute top-0 bottom-0 px-1 rounded-l-lg fill-current text-white w-11 h-11"/>
  };


  return (
    <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
  {
    images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
      alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>

  <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
      alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
  }
  </HeroSlider>
  </div>
    </>
  );
};

export default HeroCarousal;
