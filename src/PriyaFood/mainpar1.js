import React from "react";
import img1 from "../image/best seller/masala.JPG";
import img2 from "../image/best seller/Master chef.JPG";
import img3 from "../image/best seller/Race.JPG";
import banner from "../image/best seller/priyafood banner.JPG";

const EveryOne = () => {
  const image = [
    {
      id: 1,
      images: img1,
      text: "The GO Gatter",
    },
    {
      id: 2,
      images: img2,
      text: "The Master Chef",
    },
    {
      id: 3,
      images: img3,
      text: "The Healthy One",
    },
  ];
  return (
    <div className="">
      <p className="flex justify-center text-yellow-800 font-bold p-4 text-xl font-serif">
        There's somthing for Everyone
      </p>
      <div className="flex gap-5 justify-center text-center p-2  font-semibold font-serif">
        {image?.map((img) => (
          <div key={img.id}>
            <img src={img?.images} alt=" " className="!h-[350px]" />
            <p>{img.text}</p>
          </div>
        ))}
      </div>
      <img src={banner} alt="" className="!h-72 !w-full" />
    </div>
  );
};

export default EveryOne;
