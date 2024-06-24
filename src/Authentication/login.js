import { Divider } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex gap-3 flex-col font-serif w-[400px] px-3 justify-center">
        <p className="flex  w-full hover:bg-slate-300 text-gray-500">LOGIN</p>
        <Divider className="!w-full" />
        <p>Email</p>
        <input
          type="text"
          className="flex w-full pl-10 pr-4 py-2 hover:bg-slate-300  p-4 border   "
          placeholder=" "
        />
        <p>Password</p>
        <input
          type="text"
          className="flex w-full pl-10 pr-4 py-2 hover:bg-slate-300  p-4 border   "
          placeholder=" "
        />
        <button className="bg-red-600 flex items-center p-2 justify-center text-white rounded-lg">
          SING IN
        </button>
        <div className="flex flex-col">
          <div className="flex text-gray-500  text-sm">
            New Customer ?
            <p className="!text-black cursor-pointer">Create Your Account</p>
          </div>
          <div className="flex text-gray-500  text-sm">
            Lost Password?
            <p className="!text-black cursor-pointer">Recover Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
