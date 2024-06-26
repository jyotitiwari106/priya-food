import axios from "axios";
import React, { useState, useEffect } from "react";
const About = () => {
  const [data, setData] = useState([]);
  const getContactFn = async () => {
    try {
      const response = await axios.get(
        "https://mstore.bhaaraterp.com/api/store/about-us/",
        {
          headers: {
            "Store-Id": 4,
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
      {data?.map((data)=>(
        <div>
        <p>{data.msg}</p>
        <p>{data.count}</p>
        <p>{data.data}</p>
        <p>{data.token}</p>
        </div>
      ))}
      </div>
  );
};
export default About;
