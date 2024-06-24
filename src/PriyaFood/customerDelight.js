import React from "react";

const CustomerDelight = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className=" text-yellow-800 font-bold p-6 pt-10 text-xl font-serif ">
          Customer Delight
        </p>
        <div className="flex flex-col justify-center items-center w-[70%]  p-4">
          <div className="grid grid-cols-2  text-sm text-gray-600 h-60 ">
            <div className="flex flex-col  items-center justify-center !border p-4 ">
              <p>I'm on the go almost all the time and Priya's new Quick </p>

              <p>Foods range has been a saviour! All the products are easy </p>

              <p>to make, healthy, tasty - even my mother would approve!</p>
              <p className=" flex items-center justify-center text-black  p-4 mt-5">
                Niharika B,Archited
              </p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center !border text-center">
              <p>Both my mother and grandmother aren't around anymore,</p>
              <p>
                but Priya Foods inevitably brings back memories of everything
                that they used to make! Thank you, Priya Foods!
              </p>
              <p className=" flex items-center  justify-center text-black p-4 mt-5">
                Ravish Gupta, IT Professional
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDelight;
