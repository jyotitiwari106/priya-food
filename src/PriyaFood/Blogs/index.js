import React from "react";
import Header from "../header";
import { Divider } from "@mui/material";
import Footer from "../footer";

const News = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_s_Biryani_Masala_Paste_360x.jpg?v=1717134159",
      name: "Effortless flavor – Priya Foods’ pastes for busy cooks!",
      by: "By Priya Foods on May 31,2024",
      des: "Ever find yourself wishing you could whip up something deliciously authentic without spending all day over a hot st...",
    },
    {
      id: 2,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_s_Biryani_Masala_Paste_360x.jpg?v=1717134159",
      name: "Travel with Priya – Take your comfort food wherever you go!",
      by: "By Priya Foods on May 27,2024",
      des: "`Home is where the heart is  And the heart is where comfort food is..Travelling is a thrilling adventure for multip...`",
    },
    {
      id: 3,
      image:
        "https://priyafoods.com/cdn/shop/articles/WhatsApp_Image_2024-04-23_at_5.45.22_PM_360x.jpg?v=1714454779",
      name: "Mango hacks everyone needs this summer!",
      by: "By Priya Foods on April 30,2024",
      des: "Ah, the arrival of summer means the return of mangoes, filling the air with their sweet fragrance and stirring up m...",
    },
    {
      id: 4,
      image:
        "https://priyafoods.com/cdn/shop/articles/Why_is_ammamma_always_right_Let_s_find_out_360x.jpg?v=1713874700",
      name: "Why is ammamma always right? Let’s find out",
      by: "By Priya Foods on April 24,2024",
      des: "There's something magical about those summer holidays, isn't there? The laughter echoing through the halls, the sme...",
    },
    {
      id: 5,
      image:
        "https://priyafoods.com/cdn/shop/articles/Mango-vavakaya_pickle_360x.jpg?v=1710331468",
      name: "The Pickles To Pick For A Perfect Summer",
      by: "By Priya Foods on March 5,2024",
      des: "Summer is when the days stretch lazily, the streets come alive with the tinkling bells of ice gola carts, and the k...",
    },
    {
      id: 6,
      image:
        "https://priyafoods.com/cdn/shop/articles/On_the_trail_of_Telugu_land_s_traditional_Culinary_Powders_360x.jpg?v=1706772054",
      name: "On the trail of Telugu land’s traditional Culinary Powders",
      by: "By Priya Foods on February 1 ,2024",
      des: "South Indian cuisine, particularly Telugu cuisine, is celebrated for its intricate flavours and unique spice blends...",
    },
    {
      id: 7,
      image:
        "https://priyafoods.com/cdn/shop/articles/Go_On_A_Time_Travel_With_Roti_Pachadis_360x.jpg?v=1706771869",
      name: "Go On A Time Travel With Roti Pachadis!",
      by: "By Priya Foods on February 1 ,2024",
      des: "As you step into the quaint village home of your grandparents, the familiar, enticing aromas wafting from the kitch...",
    },
    {
      id: 8,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya-foods_84045124-de07-4a06-9ab2-86540f3938e7_360x.jpg?v=1704263041",
      name: "The Generational Appeal Of Priya's Culinary Symphony",
      by: "By Priya Foods on December 30 ,2023",
      des: "In today's fast-paced and health-conscious world, food preferences and dietary needs are getting more and more dive...",
    },
    {
      id: 9,
      image:
        "https://priyafoods.com/cdn/shop/articles/Panner_360x.jpg?v=1703848539",
      name: "The Generational Appeal Of Priya's Culinary Symphony",
      by: "By Priya Foods on December 29 ,2023",
      des: "In today's fast-paced and health-conscious world, food preferences and dietary needs are getting more and more dive...",
    },
    {
      id: 10,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_Foods-_Black_Pepper_Powder_360x.jpg?v=1702637862",
      name: "Quick, Quirky & Quintessentially Indian - Ready-to-eat Delights from Priya Foods",
      by: "By Priya Foods on December 10 ,2023",
      des: "Picture this: You are racing against time, your stomach’s grumbling, your taste buds are asking for something flavo...",
    },
    {
      id: 11,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_Foods-_Gongura_Pickle_360x.jpg?v=1702637615",
      name: "The Indian Spice Odyssey",
      by: "By Priya Foods on December 1 ,2023",
      des: "THE INDIAN SPICE ODYSSEY In the grand tapestry of world cuisine, Indian spices boast a spectrum of flavours that tr..",
    },
    {
      id: 12,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya-Foods-Diwli_360x.jpg?v=1698816669",
      name: "GONGURA PICKLE: Traditional Indian Cuisine At Its Zesty Best!",
      by: "By Priya Foods on December 10 ,2023",
      des: "Deepavali or Diwali, India’s ‘Festival of Lights,’ is one of the most celebrated festivals in the country. But beyo...",
    },
    {
      id: 13,
      image:
        "https://priyafoods.com/cdn/shop/articles/Explore_The_Exquisite_Festive_Dishes_Of_India_360x.jpg?v=1698211059",
      name: "Explore The Exquisite Festive Dishes Of India",
      by: "By Priya Foods on December 1 ,2023",
      des: `EXPLORE THE EXQUISITE FESTIVE DISHES OF INDIA Festivals in India are not just about rituals and celebrations; they ...`,
    },
    {
      id: 14,
      image:
        "https://priyafoods.com/cdn/shop/articles/What_s_Life_Without_Some_Masal_360x.jpg?v=1695800871",
      name: "What's Life Without Some Masala???",
      by: "By Priya Foods on November 21 ,2023",
      des: "Indian cuisine is celebrated for its rich and diverse flavours, and at the heart of this culinary tradition lies th...",
    },
    {
      id: 15,
      image:
        "https://priyafoods.com/cdn/shop/articles/Priya_Foods_Blog_-_Telangana_Cuisine_360x.jpg?v=1694598491",
      name: "Journey with us as we Rediscover the Culinary Wonders of Telangana",
      by: "By Priya Foods on November 15 ,2023",
      des: "Picture this: You are savouring a warm, freshly-made jowar roti or jonna rotte, its tender texture and smoky aroma ...",
    },
  ];
  return (
    <div className="">
      <Header />
      <div className="p-8 flex justify-center text-xl text-white items-center bg-[#f70f07]">
        <p>NEWS</p>
      </div>
      <div className=" flex justify-center items-center pt-14">
        <div className="grid grid-cols-3 gap-4 ">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div className="bg-white h-72 w-96 overflow-hidden ">
                <div className="overflow-hidden ">
                  <img
                    src={blog.image}
                    alt=""
                    className="transition-transform duration-500 transform hover:scale-105"
                  />
                </div>
              </div>
              <div className=" w-72 ">
                <p className="text-black ">{blog.name}</p>
                <p className="text-sm">{blog.by}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <div className="flex justify-center items-center gap-5 p-6">
        <button>1</button>
        <button>2</button>
        <button>Next</button>
      </div>
      <Footer />
    </div>
  );
};

export default News;
