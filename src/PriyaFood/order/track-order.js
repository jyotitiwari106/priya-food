import axios from "axios";
import React, { useEffect } from "react";
const Remove_Cupon = () => {
  const getRemoveFn = async (order_id) => {
    const response = await axios.post(
      "https://mstore.bhaaraterp.com/api/store/remove-coupon/",

      {
        order_id,
      },
      {
        headers: {
          "Store-Id": 3,
          Token: localStorage.getItem("token"),
        },
      }
    );
    console.log(response.data);
    alert(response.data);
  };
  useEffect(() => {
    getRemoveFn();
  }, []);
  return (
    <div>
      <p>cupon</p>
    </div>
  );
};
export default Remove_Cupon;
