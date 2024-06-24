import React from "react";
import Slider from "react-slick";

const Pages3 = () => {
  return (
    <div>
      <div className="slider-container bg-white object-cover px-8">
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
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_1.jpg?v=1703309863"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_2.jpg?v=1703309865"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_3.jpg?v=1703309865"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_4.jpg?v=1703656291"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_5.jpg?v=1703656291"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_6.jpg?v=1703656291"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_7.jpg?v=1703656291"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Pages3;
