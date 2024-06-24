import React, { useState } from "react";
import logo from "../image/best seller/lg.JPG";
import {
  AddShoppingCart,
  LocalMallOutlined,
  PersonOutline,
  Search,
  SearchOffOutlined,
} from "@mui/icons-material";
import { Badge, Divider, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VerifyOtpPage from "../Authentication/otpverify";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-3 bg-red-600 p-3 text-white">
        <div className="flex  justify-center items-center ">
          Now shipping across India!
        </div>
        <button
          className="flex  justify-center items-center "
          onClick={() => navigate("/trackorder")}
        >
          Track My Order
        </button>
        <div className="flex  justify-center items-center">
          Free Delivery on orders above Rs.750/-
        </div>
      </div>
      <div className="p-2 flex gap-5 justify-center items-center">
        <div>
          <img src={logo} alt=" " className="h-16 w-36" />
        </div>

        <div className="flex  gap-8 justify-center items-center cursor-pointer">
          <p onClick={() => navigate("/priyafood")}>HOME</p>
          <p onClick={() => navigate("/shop")}>SHOP</p>
          <p onClick={() => navigate("/shop")}>SALES</p>
          <p onClick={() => navigate("/shop")}>PICKLES</p>
          <p onClick={() => navigate("/shop")}>MASALS</p>
          <p onClick={() => navigate("/shop")}>SPICES</p>
          <p onClick={() => navigate("/shop")}>MORE</p>
          <p onClick={() => navigate("/shop")}>EXPORTS</p>
          <p className="cursor: pointer" onClick={() => navigate("/blogs")}>
            BLOGS
          </p>
        </div>
        <div className=" flex !gap-5 justify-center items-center px-14 cursor-pointer ">
          <div onClick={() => setOpen(true)}>
            <Search />
          </div>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <div className="flex gap-3 flex-col font-serif w-[400px] p-4 ">
              <p className="flex  w-full hover:bg-slate-300 text-gray-500">
                SEARCH OUR SITE
              </p>
              <Divider />
              <div className="relative flex w-full">
                <input
                  type="text"
                  className="flex w-full pl-10 pr-4 py-2 hover:bg-slate-300 rounded-lg p-4 border   "
                  placeholder="Search... "
                />
                <SearchOffOutlined className="absolute  right-2 top-2 text-gray-500" />
              </div>

              <Divider />
            </div>
          </Drawer>
          <div onClick={() => setLoginOpen(true)}>
            <PersonOutline />
          </div>
          <Drawer
            anchor="right"
            open={loginOpen}
            onClose={() => setLoginOpen(false)}
          >
            <VerifyOtpPage />
          </Drawer>
          <div onClick={() => setShopOpen(true)}>
            <Badge color="secondary" badgeContent={0}>
              <AddShoppingCart />
            </Badge>
          </div>
          <Drawer
            anchor="right"
            open={shopOpen}
            onClose={() => setShopOpen(false)}
          >
            <div className="flex flex-col font-serif w-[400px] px-10 ">
              <p className="flex  w-full hover:bg-slate-300 text-gray-500">
                Shopping CART
              </p>

              <Divider />
              <div className="flex flex-col justify-center items-center p-2">
                <LocalMallOutlined className="large-icon" />
                <p>Your cart is empty </p>
                <button className="bg-red-600 text-white flex justify-center  item-center p-2 rounded-lg">
                  Return to Shop
                </button>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
