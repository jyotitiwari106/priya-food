import React, { useEffect, useState } from "react";

import axios from "axios";

const Main2 = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const getProductFn = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("cpassword", cpassword);
    try {
      const response = await axios.get(
        "http://192.168.1.73:9098/api/store/overall-main-category-sub-category-list/",

        {
          params: formData,
          headers: {
            "Store-Id": 3,
            Token: localStorage.getItem("token"),
          },
        }
      );

      console.log(response);
      setData(response.data.data.main_category_list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProductFn();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 p-2 gap-3 text-center">
        {data?.map((mainCategory) => (
          <div key={mainCategory.id}>
            <img
              src={mainCategory.image}
              alt=""
              className="shadow-xl border rounded h-64"
            />

            <p className="font-serif text-xl">{mainCategory.Meta_Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main2;
