import React from "react";
import Header from "./header";
import ImageSlider from "./imageslider";
import EveryOne from "./mainpar1";
import ImageHoverEffect from "./justlaunchhome";
import RotiPachadiHome from "./rotipachadihome";
import Bestseller from "./bestseller";
import Handipicked from "./handipicked";
import PriyaPromise from "./priyaPromise";
import CustomerDelight from "./customerDelight";
import DeliveryProcess from "./deliveryprocess";
import Available from "./available";
import Followinstagram from "./followinstagram";
import Blogs from "./bolgs";
import Footer from "./footer";

const PriyaFood = () => {
  return (
    <div>
      <Header />
      <ImageSlider className="" />
      <EveryOne />
      <ImageHoverEffect />
      <RotiPachadiHome />
      <Bestseller />
      <Handipicked />
      <PriyaPromise />
      <CustomerDelight />
      <DeliveryProcess />
      <Available />
      <Followinstagram />
      <Blogs />
      <Footer />
    </div>
  );
};

export default PriyaFood;
