import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import Main2 from "./maine2";

const Main = () => {
  const [value, setValue] = useState(350);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex bg-white w-[90%]">
      <div className="flex flex-col justify-start px-14 w-[30%] ">
        <p className="flex flex-col text-xl text-gray-500">
          Search By Name<span className="h-1 w-20 bg-black"></span>
        </p>
        <input
          placeholder="Search Product by Title"
          className="border border-black border-solid p-2 mt-3 rounded"
        />
        <button
          type="submit "
          className="bg-white border border-black text-black  hover:text-white !w-20 p-1 mt-3 "
        >
          filter
        </button>
        <div className="pt-10 ">
          <p className="flex flex-col text-xl text-gray-500">
            Prooduct Categories<span className="h-1 w-20 bg-black"></span>
          </p>
        </div>
        <div className="text-sm font-serif">
          <p>+ Clearnace</p>
          <p>+ Culinary Pastes</p>
          <p>+ Exotic Pickles </p>
          <p>+ Festive sale</p>
          <p>+ Instant Mixes</p>
          <p>+ Mango Products sale</p>
          <p>+ NonVegetrian Masala</p>
          <p>+ Papad</p>
          <p>+ Pastes</p>
          <p>+ Pickles</p>
          <p>+ Qucik Food</p>
          <p>+ Ready To Eat & Just-Heat & Eat</p>
          <p>+ Roti Pachadi(Stone Ground Recipes)</p>
          <p>+ Spices</p>
          <p>+ The Go Getter</p>
          <p>+ The Healthy One </p>
          <p>+ The Master Cheaf </p>
          <p>+ Traditional Powders</p>
          <p>+ Travel Pouches</p>
          <p>+ Urban Customer </p>
        </div>
        <div className="">
          <input
            type="range"
            id="range"
            min="17.00"
            max="351.00"
            value={value}
            onChange={handleChange}
            className="w-full h-1 bg-red-600  appearance-none cursor-pointer p-[2px]"
          />

          <label className="block text-sm font-medium text-black">
            Price: {value}
          </label>
        </div>
        <button className="flex items-center bg-white border border-black p-2 !w-20">
          Filter
        </button>
        <p className="flex flex-col font-serif text-gray-400 mt-10">
          By Weight <span className="bg-gray-800 h-1 w-16"></span>
        </p>
        <span className="flex gap-1 items-center">
          <Checkbox onChange={handleChange} />
          840
        </span>
      </div>
      <div className="flex flex-col">
        <Main2 />

        <div className="flex bg-gray-400 h-[1px] w-full"></div>
        <div className="flex justify-center items-center p-3 gap-3">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <buton>...</buton>
          <button>10</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
