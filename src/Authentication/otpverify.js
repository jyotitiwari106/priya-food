import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

function VerifyOtpPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async () => {
    console.log("Sending OTP to", mobileNumber);

    const formData = new FormData();
    formData.append("mobile_number", mobileNumber);

    try {
      const response = await axios.post(
        "http://192.168.1.73:9098/api/store/login/",
        formData,
        {
          headers: {
            "Store-Id": 3,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data); // Check the response here

      // Check if the response data is in the correct format
      if (response?.data?.success) {
        setIsOtpSent(true);
        toast("OTP has been sent!", { autoClose: 3000 });
      } else {
        toast.error(response.data.message || "OTP sending failed!", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Server error", { autoClose: 3000 });
    }
  };

  const verifyOtp = async () => {
    const formData = new FormData();
    formData.append("mobile_otp", otp);
    formData.append("mobile_number", mobileNumber);
    formData.append("user_full_name", userName);

    try {
      console.log("Verifying OTP for", mobileNumber);

      const response = await axios.post(
        "http://192.168.1.73:9098/api/store/verify-login-otp/",
        formData,
        {
          headers: {
            "Store-Id": 3,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      if (response.data.response_code === 200) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        navigate("/priyafood");
      } else {
        toast.error(response.data.message || "OTP Verification Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred during OTP verification", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex gap-2 flex-col font-serif w-[400px] px-3 justify-center">
      <p className="flex  w-full hover:bg-slate-300 text-gray-500">LOGIN</p>
      <Divider className="!w-full" />
      <p>Name</p>
      <input
        type="text"
        placeholder="Enter Your Namme"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="flex w-full  hover:bg-slate-300  p-2 border"
      />
      <p>Mobile Number</p>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        disabled={isOtpSent}
        className="flex w-full  hover:bg-slate-300  p-2 border "
      />
      <div className="flex justify-center items-center ">
        <button
          onClick={sendOtp}
          disabled={isOtpSent}
          className="p-2 border bg-red-600 text-white"
        >
          OTP Send
        </button>
      </div>
      <div>
        <p>Enter OTP</p>
        <input
          type="text"
          placeholder="enter Otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="flex w-full  hover:bg-slate-300  p-2 border "
        />
        <div className="flex justify-center items-center pt-3 ">
          <button
            onClick={verifyOtp}
            className="p-2 border bg-red-600 text-white "
          >
            OTP verify
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default VerifyOtpPage;
