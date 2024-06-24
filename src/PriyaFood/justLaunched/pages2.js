import React from "react";
import Slider from "react-slick";

const Pages2 = () => {
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
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_2.jpg?v=1703309832"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_3.jpg?v=1703309832
"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_4.jpg?v=1703656263"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_5.jpg?v=1703656263"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_6.jpg?v=1703656263"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_7.jpg?v=1703656263"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Pages2;
