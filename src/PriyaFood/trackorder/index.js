import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

const TrackOrder = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white flex justify-center items-center p-4">
        <img
          src="https://sellon.kraftly.com/srcdnm/tr:f-auto,w-,h-50,c-maintain_ratio,pr-true/kr-shipmultichannel-mum/2090025/logos/de04c9e5-7093-4faa-ad6b-b9e1bc9fa62f.png"
          alt=""
        />
      </div>
      <div className="flex  justify-center  bg-gray-200 p-6 h-[580px]">
        <div className="flex flex-col bg-white p-4 w-[70%] h-[400px] rounded-md">
          <div className=" flex">
            <img
              src="https://priyafoods.shiprocket.co/post_order/img/track_icon.png"
              alt=""
              className="p-4 h-24 w-20 "
            />
            <p className="flex items-center p-2 h-24 font-bold text-gray-500">
              Track status of Your Shipment
            </p>
          </div>

          <Divider />
          <div className="flex  gap-5 font-semibold">
            <p className="flex items-center">Search By:</p>
            <div className="flex">
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  className="flex gap-10 font-bold text-gray-800 text-sm"
                  defaultValue="order"
                >
                  <FormControlLabel
                    value="order"
                    control={<Radio />}
                    label="Order ID"
                  />
                  <FormControlLabel
                    value="AWb"
                    control={<Radio />}
                    label="AWB"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className=" pt-5">
            <TextField
              placeholder="Enter Order ID to Search"
              className=" !w-96 !shadow"
            />
          </div>
          <div className="pt-5 ">
            <Button variant="contained" type="submit" className="h-14 w-56">
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className=" p-2 grid grid-cols-2 text-sm font-bold text-gray-600 bg-white">
        <p className="flex justify-center">Call us at:9140635977</p>
        <div className="flex justify-center">
          <p>Powered By</p>
          <img
            src="https://priyafoods.shiprocket.co/post_order/img/logo-v1-2.png"
            alt=""
            className="h-7 w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
