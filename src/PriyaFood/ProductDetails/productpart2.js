import { FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetailsPart2 = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);
  return (
    <div>
      <p className="text-xl font-bold">Qucik millet Upma</p>
      <p className="text-xl text-slate-600">Rs.17.00-Rs.51.00</p>
      <p className="text-sm ">Shipping Calculated at checkout</p>
      <p className="text-gray-600 text-sm">
        Tickle your taste buds with a pack of Quick Millet Upma, a South Indian
        treat that comes with a touch of true Priya’s signature taste. The
        goodness of ragi, jowar, green...
        <Link className="!text-black">Read More</Link>
      </p>
      <p className="text-gray-400 font-bold">SIZE:50G</p>
      <div className=" flex  gap-2">
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
      <div className="flex pt-5 gap-2 ">
        <div className=" flex h-10 w-28 border justify-center items-center border-black gap-3  font-bold text-xl">
          <button onClick={decrement} className="">
            -
          </button>
          <span className="">{count}</span>
          <button onClick={increment} className="">
            +
          </button>
        </div>
        <div className=" flex  justify-center items-center bg-red-600 h-10 w-96 text-white">
          <p className="mt-2">ADD TO CART</p>
        </div>
        <div className="flex border border-black h-10 w-16 justify-center items-center">
          <FavoriteBorder />
        </div>
      </div>
      <div className="flex mt-5">
        <div className="text-gray-600 text-sm">
          <p>
            Vendor:<span className="!text-black">Priya Foods </span>
          </p>
          <p>
            Availability :<span className="!text-black">In Stock</span>
          </p>
          <span>
            Categories :<p className="!text-black">Clearnace Sale Spices</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPart2;
