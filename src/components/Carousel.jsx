import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Carousel = () => {

    let settings = {
        dots: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return <div className="">

      <div>
          <h1 className="flex justify-center content-center font-bold text-4xl">
              Carousel
          </h1>
      </div>
      
      <Slider {...settings} >
            <div className="content-center mx-72">
                <div className="box bg-[#ed8611]">

                </div>
            </div>
            <div className="content-center mx-72">
                <div className="box bg-[#f76565] ">

                </div>
            </div>
            <div className="content-center mx-72">
                <div className="box bg-[#60f2f2] ">

                </div>
            </div>
            
        </Slider>

  </div>;
};

export default Carousel;
