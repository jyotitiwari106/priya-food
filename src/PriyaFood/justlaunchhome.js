import React, { useState } from "react";
import classNames from "classnames";
import imges from "../image/launch6.jpg";

const images = [
  {
    default:
      "https://priyafoods.com/cdn/shop/files/MILLETUPMA_1.jpg?v=1703309920",
    hover:
      "https://priyafoods.com/cdn/shop/files/MILLETUPMA_2.jpg?v=1703309921",
    name: "Instant Phoha ",
    price: "Rs.17.00-Rs.51.00",
  },
  {
    default:
      "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_1.jpg?v=1703309863",
    hover:
      "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_2.jpg?v=1703309865",
    name: "Quick Pulihora Poha",
    price: "Rs.17.00-Rs.51.00",
  },
  {
    default: "https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833",
    hover: "https://priyafoods.com/cdn/shop/files/UPMA_2.jpg?v=1703309832",
    name: "Quick Pulihora Poha",
    price: "Rs.17.00-Rs.51.00",
  },
  {
    default:
      "https://priyafoods.com/cdn/shop/files/MILLETPOHA_1.jpg?v=1703309944",
    hover:
      "https://priyafoods.com/cdn/shop/files/MILLETPOHA_2.jpg?v=1703309946",
    name: "Quick Pulihora Poha",
    price: "Rs.17.00-Rs.51.00",
  },
  {
    default: "https://priyafoods.com/cdn/shop/files/POHA_1.jpg?v=1703309893",
    hover: "https://priyafoods.com/cdn/shop/files/POHA_2.jpg?v=1703309892",
    name: "Quick Pulihora Poha",
    price: "Rs.17.00-Rs.51.00",
  },
];

const ImageHoverEffect = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col">
      <p className="flex justify-center text-yellow-800 font-bold p-4 text-xl font-serif">
        Just Launched
      </p>
      <div className="flex ">
        <div className="flex justify-center items-center w-[90%]">
          <div className="grid grid-cols-5 p-4 gap-5">
            {images.map((imge, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <img
                    src={hoveredIndex === index ? imge.hover : imge.default}
                    alt=""
                    className={classNames(
                      "h-48 w-full object-cover transform transition duration-500 shadow-xl rounded",
                      {
                        "scale-100": hoveredIndex === index,
                      }
                    )}
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col shadow rounded justify-center items-center space-y-2">
                      <button className="bg-white text-black py-1 px-3 rounded">
                        View Quick
                      </button>
                      <button className="bg-white text-black py-1 px-3 rounded">
                        Shop Now
                      </button>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-center">{imge.name}</p>
                <p className="text-slate-500  text-sm  text-center">
                  {imge.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img src={imges} alt="" className="h-60 flex" />
        </div>
      </div>
    </div>
  );
};

export default ImageHoverEffect;
