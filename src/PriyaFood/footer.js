import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white mt-14 overflow-hidden">
      <img
        src="https://priyafoods.com/cdn/shop/files/bottom_strip_1950x.png?v=1632825707"
        alt="Footer Background"
        className="w-full h-[550px] object-cover"
      />
      <div className="absolute inset-0 !pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-24 lg:px-48 space-y-6 lg:space-y-0 text-sm md:text-base text-white">
        <div className="flex flex-col px-6 lg:!px-20">
          <p>HOME</p>
          <p>SHOP</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
        </div>
        <div className="flex flex-col space-y-2 cursor-pointer">
          <p onClick={() => navigate("/termcondition")}>TERMS & CONDITIONS</p>
          <p>SHIPPING POLICY</p>
          <p onClick={() => navigate("/privacypolicy")}>PRIVACY POLICY</p>
          <p onClick={() => navigate("/returnpolicy")}>
            RETURNS AND REFUND POLICY
          </p>
          <p onClick={() => navigate("/replacementpolicy")}>
            REPLACEMENT POLICY
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <p>CONTACT US</p>
          <p>04023597777</p>
          <p>EMAIL: response@priyafoods.com</p>
          <p>Write to us at:</p>
          <p>Ushodaya Enterprises Pvt. Ltd.(Foods Division),</p>
          <p>3rd Floor Corporate Building, Ramoji Film City</p>
          <p>Anajpur Village, Hayathnagar Mandal</p>
          <p>Ranga Reddy District Telangana State - 501512, India.</p>
          <p>Follow us on social media</p>
          <div className="flex gap-3">
            <Facebook />
            <Twitter />
            <Instagram />
            <YouTube />
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-white">Newsletter SignUp</p>
          <div className="flex justify-center items-center">
            <div className="flex border text-white overflow-hidden">
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="!w-28 md:!w-48 !h-10 text-xs md:text-sm !text-white placeholder-white placeholder-opacity-100"
                placeholder="Your email address"
                InputProps={{
                  classes: {
                    input: "text-white",
                    notchedOutline: "border-white",
                    focused: "border-white",
                  },
                  style: {
                    color: "white",
                    fontSize: "12px",
                  },
                }}
              />
              <button className="bg-white text-red-600 text-xs md:text-sm px-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
