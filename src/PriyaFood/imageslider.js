import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [data, setData] = useState([]);

  const getSliderFn = async () => {
    try {
      const response = await axios.get(
        "https://mstore.bhaaraterp.com/api/store/slider-list/",
        {
          headers: {
            "Store-Id": 3,
            Token: localStorage.getItem("token"),
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching the slider data", error);
    }
  };

  useEffect(() => {
    getSliderFn();
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
  };

  return (
    <div className="flex">
      <div className="slider-container bg-white object-cover  w-full">
        <Slider {...settings}>
          {data.map((slider) => (
            <div key={slider.id}>
              <img
                src={slider.image}
                alt="slider"
                className="object-cover w-full h-[500px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
