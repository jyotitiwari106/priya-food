import React, { useState } from "react";
import Header from "../header";
import Main from "./main";
import Footer from "../footer";

const Shop = () => {
  const [value, setValue] = useState("Select Item");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <Header />
      <img
        src="https://priyafoods.com/cdn/shop/files/Banner_1950x.jpg?v=1640768859"
        alt=""
      />
      <div className="flex  justify-end p-5">
        <select
          value={value}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
          <option value="Select Item">Select Item</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default Shop;
