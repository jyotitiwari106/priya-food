import { useState } from "react";
import { ChevronLeft, ChevronRight, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PopupView = () => {
  const images = [
    {
      id: 1,
      image: "https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833",
    },
    {
      id: 2,
      image: "https://priyafoods.com/cdn/shop/files/UPMA_3.jpg?v=1703309832",
    },
    {
      id: 3,
      image: "https://priyafoods.com/cdn/shop/files/UPMA_2.jpg?v=1703309832",
    },
    {
      id: 4,
      image: "https://priyafoods.com/cdn/shop/files/UPMA_4.jpg?v=1703309832",
    },
    {
      id: 5,
      image:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_7.jpg?v=1703656291",
    },
    {
      id: 6,
      image:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_6.jpg?v=1703656291",
    },
    {
      id: 7,
      image:
        "https://priyafoods.com/cdn/shop/files/PULIHORAPOHA_5.jpg?v=1703656291",
    },
    {
      id: 8,
      image:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_1.jpg?v=1703309920",
    },
    {
      id: 9,
      image:
        "https://priyafoods.com/cdn/shop/files/MILLETUPMA_2.jpg?v=1703309920",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleRange, setVisibleRange] = useState([0, 5]);

  const closeLoginPopup = () => setIsOpen(false);

  const [count, setCount] = useState(0);

  const handleClickOutside = (event) => {
    if (event.target.className.includes("login-popup-overlay")) {
      closeLoginPopup();
    }
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
    updateThumbnailRange(currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
    updateThumbnailRange(currentIndex - 1);
  };

  const updateThumbnailRange = (index) => {
    if (index < visibleRange[0]) {
      setVisibleRange([index, index + 5]);
    } else if (index >= visibleRange[1]) {
      setVisibleRange([index - 4, index + 1]);
    }
  };
  return (
    <div className="relative">
      <div
        className="login-popup-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={handleClickOutside}
      >
        <div
          className=" flex justify-center items-center"
          onClick={handlePopupClick}
        >
          <div className=" grid grid-cols-2 !bg-white gap-5 p-4  !w-[60%]">
            <div className="flex gap-5 justify-center items-center">
              <div className="relative flex justify-center items-center h-96 w-96">
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 p-2 border-2 border-black rounded-full z-10"
                >
                  <ChevronLeft />
                </button>
                <img
                  src={images[currentIndex].image}
                  alt="Product"
                  className="object-cover h-full w-full"
                />
                <button
                  onClick={handleNext}
                  className="absolute right-0 p-2 border-2 border-black rounded-full z-10"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="product-details">
              <p className="text-xl font-bold">Quick Millet Upma</p>
              <p className="text-xl text-slate-600">Rs.17.00-Rs.51.00</p>
              <p className="text-sm">Shipping Calculated at checkout</p>
              <p className="text-gray-600 text-sm">
                Tickle your taste buds with a pack of Quick Millet Upma, a South
                Indian treat that comes with a touch of true Priya’s signature
                taste. The goodness of ragi, jowar, green...
                <Link className="!text-black">Read More</Link>
              </p>
              <p className="text-gray-400 font-bold">SIZE:50G</p>
              <div className="flex gap-2">
                <button className="bg-gray-400 border border-black rounded-xl p-1">
                  50g
                </button>
                <button className="bg-gray-400 border border-black rounded-xl p-1">
                  80g
                </button>
                <button className="bg-gray-400 border border-black rounded-xl p-1">
                  150g
                </button>
              </div>
              <div className="flex pt-5 gap-2">
                <div className="flex h-10 w-28 border justify-center items-center border-black gap-3 font-bold text-xl">
                  <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                    -
                  </button>
                  <span>{count}</span>
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="flex justify-center items-center bg-red-600 h-10 w-96 text-white">
                  <p className="mt-2">ADD TO CART</p>
                </div>
                <div className="flex border border-black h-10 w-16 justify-center items-center">
                  <FavoriteBorder />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="text-gray-600 text-sm">
                  <p>
                    Vendor: <span className="!text-black">Priya Foods</span>
                  </p>
                  <p>
                    Availability: <span className="!text-black">In Stock</span>
                  </p>
                  <span>
                    Categories:{" "}
                    <p className="!text-black">Clearance Sale Spices</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupView;
