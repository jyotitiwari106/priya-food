import axios from "axios";
import React, { useState, useEffect } from "react";

const Order = () => {
  const [data, setData] = useState();

  const getOrderFn = async () => {
    try {
      const response = await axios.get(
        "https://mstore.bhaaraterp.com/api/store/my-order/",
        {
          headers: {
            "Store-Id": 3,
            Token: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getOrderFn();
  }, []);

  return (
    <div>
      <p>No orders available.</p>
    </div>
  );
};

export default Order;
