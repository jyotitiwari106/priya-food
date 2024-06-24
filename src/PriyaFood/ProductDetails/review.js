import { Add, Remove } from "@mui/icons-material";
import React, { useState } from "react";

const Description = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-[80%] ">
      <div className="bg-gray-200 h-10 flex justify-between items-center px-4">
        <p className="text-red-600 flex justify-center items-center">Review</p>
        <div
          className="bg-red-600 !h-10 !w-10  text-white flex items-center justify-center text-xl cursor-pointer"
          onClick={toggleOpen}
        >
          {open ? <Remove /> : <Add />}
        </div>
      </div>
      {open && (
        <div className="bg-white text-gray-500 text-sm border p-4 mt-2">
          <p>
            The quintessential Maharashtrian treat now comes in a handy pack
            that’s easy to make and is just as flavourful and wholesome as we
            had it from our grandmother’s kitchens but with a hint of Priya’s
            signature twist to refine its taste. Simply unpack the contents into
            a bowl, add hot water and savour the tangy, spicy, sweet and nutty
            flavours of Priya’s Quick Poha in less than 5 minutes.
          </p>
          <p className="font-bold text-xl mt-2">INGREDIENTS</p>
        </div>
      )}
    </div>
  );
};

export default Description;
