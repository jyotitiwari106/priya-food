import axios from "axios";
import React, { useEffect, useState } from "react";

const Replacement_Policy = () => {
  const [data, setData] = useState([]);
  const getContactFn = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.73:9098/api/store/contact-us/",
        {
          headers: {
            "Store-Id": 3,
            Token: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getContactFn();
  }, []);
  return (
    <div>
      <h3 className=" flex justify-center font-serif items-center p-2">
        PRIVACY POLICY
      </h3>
      <div className="p-4 font-serif">
        {data?.map((info) => (
          <div key={info.id}>
            <div
              dangerouslySetInnerHTML={{
                __html: info.store.replacement_policy,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Replacement_Policy;
