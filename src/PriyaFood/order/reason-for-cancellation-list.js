import axios from "axios";
import React, { useEffect, useState } from "react";
const Reason_Cancellation = () => {
  const [data, setData] = useState([]);
  const getCancellationFn = async () => {
    const response = await axios.get(
      "https://mstore.bhaaraterp.com/api/store/reason-for-cancellation-list/",

      {
        headers: {
          "Store-Id": 3,
          Token: localStorage.getItem("token"),
        },
      }
    );
    console.log(response);
    setData(response.data.data);
  };
  useEffect(() => {
    getCancellationFn();
  }, []);
  return (
    <div>
      {data?.map((cancel) => (
        <div key={cancel.id}>
          <p>{cancel.id}</p>
          <p>{cancel.choice}</p>
        </div>
      ))}
    </div>
  );
};
export default Reason_Cancellation;
