import {
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import React, { useState } from "react";
import ProductDetailsPart2 from "./productpart2";
import Description from "./description";
import Review from "./review";

const ProductDetails = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleRange, setVisibleRange] = useState([0, 5]); // Range of visible thumbnails

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

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    updateThumbnailRange(index);
  };

  const updateThumbnailRange = (index) => {
    if (index < visibleRange[0]) {
      setVisibleRange([index, index + 5]);
    } else if (index >= visibleRange[1]) {
      setVisibleRange([index - 4, index + 1]);
    }
  };

  const handleThumbnailUp = () => {
    setVisibleRange((prevRange) => {
      if (prevRange[0] > 0) {
        return [prevRange[0] - 1, prevRange[1] - 1];
      }
      return prevRange;
    });
  };

  const handleThumbnailDown = () => {
    setVisibleRange((prevRange) => {
      if (prevRange[1] < images.length) {
        return [prevRange[0] + 1, prevRange[1] + 1];
      }
      return prevRange;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="grid grid-cols-2 gap-5 p-4">
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
              alt=""
              className="object-cover h-full w-full"
            />
            <button
              onClick={handleNext}
              className="absolute right-0 p-2 border-2 border-black rounded-full z-10"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="flex flex-col h-96 gap-1 relative">
            <div className="flex flex-col gap-1 overflow-hidden h-full">
              {images
                .slice(visibleRange[0], visibleRange[1])
                .map((img, index) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt=""
                    onClick={() =>
                      handleThumbnailClick(visibleRange[0] + index)
                    }
                    className={`h-20 border ${
                      visibleRange[0] + index === currentIndex
                        ? "border-blue-500"
                        : "border-black"
                    } rounded`}
                  />
                ))}
            </div>
            <div className="flex gap-1">
              <button
                onClick={handleThumbnailUp}
                className=" p-2 bg-gray-300 shadow"
              >
                <ExpandMore />
              </button>
              <button
                onClick={handleThumbnailDown}
                className=" p-2 bg-gray-300 shadow "
              >
                <ExpandLess />
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <ProductDetailsPart2 />
        </div>
      </div>

      <Description />
      <Review />
    </div>
  );
};

export default ProductDetails;
