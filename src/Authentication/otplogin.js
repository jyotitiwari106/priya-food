import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

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
            "Store-Id": 1,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);

      if (response.data.success) {
        alert("OTP has been sent to your mobile number.");
        setTimeout(() => {
          setOtpSent(true);
        }, 0);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP. Please try again.");
    }
  };

  const verifyOtp = async () => {
    try {
      console.log("Verifying OTP for", mobileNumber);

      const response = await axios.post(
        "http://192.168.1.73:9098/api/store/verify-login-otp/",
        { mobile_number: mobileNumber, otp },
        {
          headers: {
            "Store-Id": 1,
          },
        }
      );

      console.log("Response:", response);

      if (response.data.success) {
        setError("Successfully verified OTP.");
      } else {
        setError("Failed to verify OTP.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={handlePhoneChange}
          />
          <button type="submit" onClick={sendOtp}>
            Send OTP
          </button>
        </div>
        {otpSent && (
          <div>
            <label>OTP:</label>
            <input type="text" value={otp} onChange={handleOtpChange} />
            <button type="button" onClick={verifyOtp}>
              Verify OTP
            </button>
          </div>
        )}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
