import React, { useState } from "react";

const PopupLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closeLoginPopup = () => setIsOpen(false);

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  const handleClickOutside = (event) => {
    if (event.target.className.includes("login-popup-overlay")) {
      closeLoginPopup();
    }
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div
        className="login-popup flex justify-center items-center"
        onClick={handlePopupClick}
      >
        <div className="flex flex-col h-auto w-80 bg-gray-200 p-2 gap-2">
          <div className="flex h-28">
            <img
              src="https://priyafoods.com/cdn/shop/files/UPMA_1.jpg?v=1703309833"
              alt=""
              className="p-2 h-24 w-24"
            />
            <div className="flex flex-col p-2">
              <p>Quick Upma</p>
              <p>Rs.17.00</p>
            </div>
          </div>
          <p className="flex justify-center items-center text-gray-500">
            SIZE: 60G (PACK OF 2)
          </p>
          <div className="flex justify-center gap-1">
            <button
              type="button"
              className="bg-white border border-black rounded-xl"
            >
              60g (Pack of 2)
            </button>
            <button
              type="button"
              className="bg-white border border-black rounded-xl"
            >
              150g
            </button>
            <button
              type="button"
              className="bg-white border border-black rounded-xl"
            >
              180g
            </button>
          </div>
          <div className="flex justify-center items-center flex-col gap-3">
            <div className="flex border justify-center gap-3 border-black h-10 w-24 rounded font-bold text-xl">
              <button type="button" onClick={decrement}>
                -
              </button>
              <span className="flex justify-center items-center">{count}</span>
              <button type="button" onClick={increment}>
                +
              </button>
            </div>
            <button className="flex justify-center items-center bg-red-600 text-white h-10 w-48 rounded-xl">
              <p className="mt-2">ADD TO CART</p>
            </button>
            <p className="hover:text-red-600 cursor-pointer">
              View full details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
