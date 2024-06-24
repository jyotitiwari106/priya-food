import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_s_Biryani_Masala_Paste_360x.jpg?v=1717134159",
      name: "Effortless flavor – Priya Foods’ pastes for busy cooks!",
      by: "",
      des: "Ever find yourself wishing you could whip up something deliciously authentic without spending all day over a hot st...",
    },
    {
      id: 2,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_s_Biryani_Masala_Paste_360x.jpg?v=1717134159",
      name: "Travel with Priya – Take your comfort food wherever you go!",
      by: "",
      des: "`Home is where the heart is  And the heart is where comfort food is..Travelling is a thrilling adventure for multip...`",
    },
    {
      id: 3,
      image:
        "https://priyafoods.com/cdn/shop/articles/WhatsApp_Image_2024-04-23_at_5.45.22_PM_360x.jpg?v=1714454779",
      name: "Mango hacks everyone needs this summer!",
      by: "",
      des: "Ah, the arrival of summer means the return of mangoes, filling the air with their sweet fragrance and stirring up m...",
    },
    {
      id: 4,
      image:
        "https://priyafoods.com/cdn/shop/articles/Why_is_ammamma_always_right_Let_s_find_out_360x.jpg?v=1713874700",
      name: "Why is ammamma always right? Let’s find out",
      by: "",
      des: "There's something magical about those summer holidays, isn't there? The laughter echoing through the halls, the sme...",
    },
    {
      id: 5,
      image:
        "https://priyafoods.com/cdn/shop/articles/Mango-vavakaya_pickle_360x.jpg?v=1710331468",
      name: "The Pickles To Pick For A Perfect Summer",
      by: "",
      des: "Summer is when the days stretch lazily, the streets come alive with the tinkling bells of ice gola carts, and the k...",
    },
    {
      id: 6,
      image:
        "https://priyafoods.com/cdn/shop/articles/On_the_trail_of_Telugu_land_s_traditional_Culinary_Powders_360x.jpg?v=1706772054",
      name: "On the trail of Telugu land’s traditional Culinary Powders",
      by: "",
      des: "South Indian cuisine, particularly Telugu cuisine, is celebrated for its intricate flavours and unique spice blends...",
    },
    {
      id: 7,
      image:
        "https://priyafoods.com/cdn/shop/articles/Go_On_A_Time_Travel_With_Roti_Pachadis_360x.jpg?v=1706771869",
      name: "Go On A Time Travel With Roti Pachadis!",
      by: "",
      des: "As you step into the quaint village home of your grandparents, the familiar, enticing aromas wafting from the kitch...",
    },
    {
      id: 8,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya-foods_84045124-de07-4a06-9ab2-86540f3938e7_360x.jpg?v=1704263041",
      name: "The Generational Appeal Of Priya's Culinary Symphony",
      by: "",
      des: "In today's fast-paced and health-conscious world, food preferences and dietary needs are getting more and more dive...",
    },
    {
      id: 9,
      image:
        "https://priyafoods.com/cdn/shop/articles/Panner_360x.jpg?v=1703848539",
      name: "The Generational Appeal Of Priya's Culinary Symphony",
      by: "",
      des: "In today's fast-paced and health-conscious world, food preferences and dietary needs are getting more and more dive...",
    },
    {
      id: 10,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_Foods-_Black_Pepper_Powder_360x.jpg?v=1702637862",
      name: "Quick, Quirky & Quintessentially Indian - Ready-to-eat Delights from Priya Foods",
      by: "",
      des: "Picture this: You are racing against time, your stomach’s grumbling, your taste buds are asking for something flavo...",
    },
    {
      id: 11,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_Foods-_Gongura_Pickle_360x.jpg?v=1702637615",
      name: "The Indian Spice Odyssey",
      by: "",
      des: "THE INDIAN SPICE ODYSSEY In the grand tapestry of world cuisine, Indian spices boast a spectrum of flavours that tr..",
    },
    {
      id: 12,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya-Foods-Diwli_360x.jpg?v=1698816669",
      name: "GONGURA PICKLE: Traditional Indian Cuisine At Its Zesty Best!",
      by: "",
      des: "Deepavali or Diwali, India’s ‘Festival of Lights,’ is one of the most celebrated festivals in the country. But beyo...",
    },
    {
      id: 13,
      image:
        "https://priyafoods.com/cdn/shop/articles/Explore_The_Exquisite_Festive_Dishes_Of_India_360x.jpg?v=1698211059",
      name: "Explore The Exquisite Festive Dishes Of India",
      by: "",
      des: `EXPLORE THE EXQUISITE FESTIVE DISHES OF INDIA Festivals in India are not just about rituals and celebrations; they ...`,
    },
    {
      id: 14,
      image:
        "https://priyafoods.com/cdn/shop/articles/What_s_Life_Without_Some_Masal_360x.jpg?v=1695800871",
      name: "What's Life Without Some Masala???",
      by: "",
      des: "Indian cuisine is celebrated for its rich and diverse flavours, and at the heart of this culinary tradition lies th...",
    },
    {
      id: 15,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_Foods_Blog_-_Telangana_Cuisine_360x.jpg?v=1694598491",
      name: "Journey with us as we Rediscover the Culinary Wonders of Telangana",
      by: "",
      des: "Picture this: You are savouring a warm, freshly-made jowar roti or jonna rotte, its tender texture and smoky aroma ...",
    },
  ];

  const settings = {
    dots: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col p-4 bg-slate-300 h-screen">
      <div className="flex flex-col justify-center items-center p-4 ">
        <p className=" text-yellow-800 font-bold text-xl font-serif ">BLOGS</p>

        <img
          src="https://priyafoods.com/cdn/shop/t/2/assets/svg_title.svg"
          alt=""
          className="h-10 w-60"
        />
      </div>
      <div className="slider-container object-cover px-8">
        <Slider {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4">
              <div className="bg-white h-fit w-fit overflow-hidden ">
                <div className="overflow-hidden ">
                  <img
                    src={blog.image}
                    alt=""
                    className="transition-transform duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-black font-serif">{blog.name}</p>
                <p>{blog.des}</p>
                <Button className="flex justify-center items-center">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Blogs;
