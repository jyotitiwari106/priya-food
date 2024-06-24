import axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const Return_Policy = () => {
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
      const storeData = response.data.data.filter(
        (info) => info.store.id === 3
      );
      console.log(storeData);
      setData(storeData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getContactFn();
  }, []);

  const modifyHTML = (htmlString) => {
    const options = {
      replace: (domNode) => {
        if (
          domNode.name === "h1" ||
          domNode.name === "h2" ||
          domNode.name === "h3" ||
          domNode.name === "h4" ||
          domNode.name === "h5" ||
          domNode.name === "h6"
        ) {
          domNode.attribs = {
            ...domNode.attribs,
            className: `${
              domNode.attribs.className || ""
            } text-sm gap-3`.trim(),
          };
        }
      },
    };
    return parse(htmlString, options);
  };

  return (
    <div>
      <h3 className="p-2 flex justify-center font-serif items-center text-red-600">
        Return & Refund Policy
      </h3>
      <div className="p-6 font-serif text-sm">
        {data.map((info) => (
          <div key={info.id}>
            <div>{modifyHTML(info.store.return_and_refund_policy)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Return_Policy;
