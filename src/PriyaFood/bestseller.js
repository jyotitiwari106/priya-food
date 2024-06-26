import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bestseller = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const sellerFn = async () => {
    const response = await axios.post(
      "https://mstore.bhaaraterp.com/api/store/product-list/",
      {},
      {
        headers: {
          "Store-Id": 3,
          Token: localStorage.getItem("token"),
        },
      }
    );

    console.log(response.data);
    setData(response.data.data.product_list);
  };

  useEffect(() => {
    sellerFn();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="flex justify-center text-yellow-800 font-bold p-4 text-xl font-serif">
        Best Sellers
      </p>

      <div className="grid grid-cols-3 p-4 gap-5">
        {data.length > 0 ? (
          data.map((product_list) => (
            <div
              key={product_list.id}
              className="border  rounded shadow"
              onClick={() => navigate(`/product_lists/${product_list.id}`)}
            >
              <img
                src={product_list.image || ""}
                alt={product_list.name || "Product"}
              />
              <p className="text-pink-500">{product_list.variant_name}</p>
            </div>
          ))
        ) : (
          <p>No best sellers found.</p>
        )}
      </div>
    </div>
  );
};

export default Bestseller;
