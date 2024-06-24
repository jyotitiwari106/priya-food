import React from "react";
import Slider from "react-slick";

const Page1 = () => {
  return (
    <div className="flex ">
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
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_1.jpg?v=1703309920"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_2.jpg?v=1703309921"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_3.jpg?v=1703309920"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_4.jpg?v=1703656340"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_6.jpg?v=1703656340"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_7.jpg?v=1703656340"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/MILLETUPMA_8.jpg?v=1703656340"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Page1;
