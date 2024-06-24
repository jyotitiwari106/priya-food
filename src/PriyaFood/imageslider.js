import React from "react";
import Slider from "react-slick";
import slider from "../image/best seller/slider.JPG";
import slider1 from "../image/best seller/slider1.JPG";
import slider2 from "../image/best seller/slider2.JPG";
import slider3 from "../image/best seller/slider3.JPG";
import slider4 from "../image/best seller/slider4.JPG";

const ImageSlider = () => {
  return (
    <div>
      <div className="slider-container bg-white object-cover px-8 !w-full">
        <Slider
          autoplay
          autoplaySpeed={5000}
          speed={5000}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={true}
          infinite
          className="object-cover"
        >
          <div>
            <img src={slider} alt="" />
          </div>
          <div>
            <img src={slider1} alt="" />
          </div>
          <div>
            <img src={slider2} alt="" />
          </div>
          <div>
            <img src={slider3} alt="" />
          </div>
          <div>
            <img src={slider4} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
