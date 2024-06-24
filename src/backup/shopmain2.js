import React, { useState } from "react";
import classNames from "classnames";
import PopupView from "../component/popupview";
import PopupLogin from "../component/popup";

const Main2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupType, setPopupType] = useState(null);

  const images = [
    {
      id: 1,
      default:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_1.jpg?v=1703309920",
      hover:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_2.jpg?v=1703309921",
      name: "Quick Millet Upma",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 2,
      default:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_1.jpg?v=1703309863",
      hover:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_2.jpg?v=1703309865",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 3,
      default: "https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833",
      hover: "https://priyafoods.com/cdn/shop/files/UPMA_2.jpg?v=1703309832",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 4,
      default:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_1.jpg?v=1703309944",
      hover:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_2.jpg?v=1703309946",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 5,
      default:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_1.jpg?v=1703309920",
      hover:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_2.jpg?v=1703309921",
      name: "Quick Millet Upma",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 6,
      default:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_1.jpg?v=1703309863",
      hover:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_2.jpg?v=1703309865",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 7,
      default: "https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833",
      hover: "https://priyafoods.com/cdn/shop/files/UPMA_2.jpg?v=1703309832",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 8,
      default:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_1.jpg?v=1703309944",
      hover:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_2.jpg?v=1703309946",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 9,
      default:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_1.jpg?v=1703309920",
      hover:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_2.jpg?v=1703309921",
      name: "Quick Millet Upma",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 10,
      default:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_1.jpg?v=1703309863",
      hover:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_2.jpg?v=1703309865",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 11,
      default: "https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833",
      hover: "https://priyafoods.com/cdn/shop/files/UPMA_2.jpg?v=1703309832",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
    {
      id: 12,
      default:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_1.jpg?v=1703309944",
      hover:
        "https://priyafoods.com/cdn/shop/files/MILLETPOHA_2.jpg?v=1703309946",
      name: "Quick Pulihora Poha",
      price: "Rs.17.00-Rs.51.00",
    },
  ];

  const showPopup = (type, product) => {
    setSelectedProduct(product);
    setPopupType(type);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
    setPopupType(null);
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-5">
        {images.map((seller, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <img
                src={hoveredIndex === index ? seller.hover : seller.default}
                alt=""
                className={classNames(
                  "h-60 w-full object-cover transform transition duration-500 shadow-xl rounded",
                  {
                    "scale-100": hoveredIndex === index,
                  }
                )}
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col shadow rounded justify-center items-center space-y-2 curser:pointer">
                  <button
                    className="bg-white text-black py-1 px-3 rounded"
                    onClick={() => showPopup("PopupView", seller)}
                  >
                    View Quick
                  </button>
                  <button
                    className="bg-white text-black py-1 px-3 rounded"
                    onClick={() => showPopup("PopupLogin", seller)}
                  >
                    Shop Now
                  </button>
                </div>
              )}
            </div>
            <p className="mt-2 text-center">{seller.name}</p>
            <p className="text-slate-500 text-sm text-center">{seller.price}</p>
          </div>
        ))}
      </div>
      {popupVisible &&
        (popupType === "PopupView" ? (
          <PopupView product={selectedProduct} onClose={hidePopup} />
        ) : (
          <PopupLogin product={selectedProduct} onClose={hidePopup} />
        ))}
    </div>
  );
};

export default Main2;
