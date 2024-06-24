import React from "react";

const DeliveryProcess = () => {
  const images = [
    {
      id: 1,
      image:
        "https://priyafoods.com/cdn/shop/files/home-icons3_180x.jpg?v=1657867745",
    },
    {
      id: 2,
      image:
        "//priyafoods.com/cdn/shop/files/home-icons2_2048x.jpg?v=1657867769 2048w",
    },
    {
      id: 3,
      image:
        "https://priyafoods.com/cdn/shop/files/home-icons4_360x.jpg?v=1657867784%20360w,",
    },
    {
      id: 4,
      image:
        "//priyafoods.com/cdn/shop/files/home-icons1_360x.jpg?v=1657867802 360w",
    },
  ];

  return (
    <div  className="bg-pink-100">
      <div className="grid grid-cols-4  justify-center items-center p-4  w-[90%]">
        {images.map((img) => (
          <div
            key={img.id}
            className=" flex justify-center items-center p-4"
          >
            <img src={img.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryProcess;
