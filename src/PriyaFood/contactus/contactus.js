import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
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
      <p>Contact Us</p>
      <div className="flex flex-col gap-3 p-4">
        {data?.map((info) => (
          <div key={info.id}>
            <img
              src={info.store.store_image}
              alt=""
              className="flex h-40 justify-center items-center p-4"
            />

            <p>
              <strong>ID:</strong> {info.id}
            </p>
            <p>
              <strong>Email:</strong> {info.email}
            </p>
            <p>
              <strong>Meta Title:</strong> {info.store.Meta_Title}
            </p>
            <p>
              <strong>Meta Description:</strong> {info.store.Meta_Description}
            </p>
            <p>
              <strong>Meta Keyword:</strong> {info.store.Meta_Keyword}
            </p>
            <p>
              <strong>Store Name:</strong> {info.store.store_name}
            </p>
            <p>
              <strong>Store Number:</strong> {info.store.store_number}
            </p>
            <p>
              <strong>Email:</strong> {info.store.email}
            </p>
            <p>
              <strong>Return and refund replacement policy:</strong>{" "}
              <div
                dangerouslySetInnerHTML={{
                  __html: info.store.return_and_refund_replacement_policy,
                }}
              />
            </p>
            <p>
              <strong>Time period return replacement policy:</strong>{" "}
              {info.store.time_period_return_replacement_policy}
            </p>
            <p>
              <strong>Replacement Policy:</strong>{" "}
              <div
                dangerouslySetInnerHTML={{
                  __html: info.store.replacement_policy,
                }}
              />
            </p>
            <p>
              <strong>Longitude:</strong> {info.store.longitude}
            </p>
            <p>
              <strong>Latitude:</strong> {info.store.latitude}
            </p>
            <p>
              <strong>Ordering:</strong> {info.store.ordering}
            </p>
            <p>
              <strong>Slug:</strong> {info.store.slug}
            </p>
            <p>
              <strong>Address1:</strong> {info.store.address1}
            </p>
            <p>
              <strong>Address2:</strong> {info.store.address2}
            </p>
            <p>
              <strong>City:</strong> {info.store.city}
            </p>
            <p>
              <strong>State:</strong> {info.store.state}
            </p>
            <p>
              <strong>Country:</strong> {info.store.country}
            </p>
            <p>
              <strong>Pincode:</strong> {info.store.pincode}
            </p>
            <p>
              <strong>Base URL:</strong> {info.store.base_url}
            </p>
            <p>
              <strong>Terms and Conditions:</strong>
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: info.store.term_and_condition,
              }}
            />
            <p>
              <strong>privacy_policy_page</strong>
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: info.store.privacy_policy_page,
              }}
            />
            <p>
              <strong>return_and_refund_policy</strong>
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: info.store.return_and_refund_policy,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
