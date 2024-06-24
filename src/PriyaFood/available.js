import React from "react";
import Slider from "react-slick";

const Available = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center  ">
        <img
          src="https://cdn.shopify.com/s/files/1/0587/5410/5495/files/HEART_ICON_d9b4b438-b095-46a1-9ca1-fe22b31e6bae_256x256_crop_center.png"
          alt=""
          className="h-14 w-16 mt-16"
        />
        <p className=" text-yellow-800 font-bold  text-xl font-serif ">
          Also Available On
        </p>
        <div className="flex !justify-center !items-center bg-gray-400 h-1 !w-[80%] ">
          <p className="flex !justify-center !items-center !bg-red-500 h-1 !w-44"></p>
        </div>
      </div>
      <div className="slider-container bg-white object-cover p-7 !w-full">
        <Slider
          autoplay
          autoplaySpeed={5000}
          speed={5000}
          slidesToShow={4}
          slidesToScroll={1}
          arrows={true}
          infinite
          className="object-cover"
        >
          <div className="p-4 gap-5">
            <img
              src="https://priyafoods.com/cdn/shop/files/amazon_logo_360x.png?v=1632825205%20360w"
              alt=""
              className="h-10"
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/flipkart_logo_1512x.png?v=1632825205%201512w"
              alt=""
              className="h-12"
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/big_basket_logo_1080x.png?v=1632825205%201080w"
              alt=""
              className="h-12"
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/Dmart_logo_180x.png?v=1632825205"
              alt=""
              className="h-10"
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/Blinkit_Logo_2x_e50b0e24-9237-4cbd-96f0-40ed7576813b_180x.png?v=1660988778"
              alt=""
              className="h-12"
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/Logo_of_Zepto_4bf5cfc2-a2de-4e20-8e2e-169705f7696d_180x.png?v=1712133114"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/Swiggy_logo_svg_180x.png?v=1712133162"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://priyafoods.com/cdn/shop/files/Instamartlogo_180x.webp?v=1712137336"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Available;
