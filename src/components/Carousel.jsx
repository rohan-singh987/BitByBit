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

  return <div className="bg-black p-24">


      <div>
          <h1 className="flex justify-center content-center font-bold text-4xl text-white">
              Carousel
          </h1>
      </div>

      <div className="bg-gray-50 py-10">

      
      <Slider {...settings} >
            <div className="content-center mx-64">
                <div className="box bg-[#ed8611] flex flex-col justify-center p-16">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis soluta eos laborum non dolorum accusantium? Similique velit dignissimos dicta nulla laboriosam sit, deleniti possimus aliquid, natus aut eligendi at.</p>
                </div>
            </div>
            <div className="content-center mx-64">
                <div className="box bg-[#f76565] flex flex-col justify-center p-16">
                <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis soluta eos laborum non dolorum accusantium? Similique velit dignissimos dicta nulla laboriosam sit, deleniti possimus aliquid, natus aut eligendi at.</p>

                </div>
            </div>
            <div className="content-center mx-64">
                <div className="box bg-[#60f2f2] flex flex-col justify-center p-16 ">
                <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis soluta eos laborum non dolorum accusantium? Similique velit dignissimos dicta nulla laboriosam sit, deleniti possimus aliquid, natus aut eligendi at.</p>

                </div>
            </div>
            
        </Slider>
      </div>

  </div>;
};

export default Carousel;
