import axios from "axios";
import React, { useEffect, useState } from "react";

const Term_And_Codition = () => {
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
        Term And Condition
      </h3>
      <div className="p-4 font-serif">
        {data?.map((info) => (
          <div key={info.id}>
            <div
              dangerouslySetInnerHTML={{
                __html: info.store.term_and_condition,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Term_And_Codition;
