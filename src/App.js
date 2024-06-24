import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PriyaFood from "./PriyaFood";
import ImageHoverEffect from "./PriyaFood/justlaunchhome";
import TrackOrder from "./PriyaFood/trackorder";
import Shop from "./PriyaFood/shop";
import News from "./PriyaFood/Blogs";
import ProductDetails from "./PriyaFood/ProductDetails/home";
import ProductCard from "./PriyaFood/ProductDetails";
import PopupLogin from "./PriyaFood/component/popup";
import PopupView from "./PriyaFood/component/popupview";
import Authetication from "./Authentication";

import OTPLogin from "./Authentication/otplogin";
import VerifyOtpPage from "./Authentication/otpverify";
import ContactForm from "./PriyaFood/contactus";
import ContactUs from "./PriyaFood/contactus/contactus";
import Term_And_Codition from "./PriyaFood/contactus/termandcondition.js";
import Return_Policy from "./PriyaFood/contactus/returnpolicy.js";
import Privacy_Policy from "./PriyaFood/contactus/termandcondition.js/privacypolicy.js";
import Replacement_Policy from "./PriyaFood/contactus/termandcondition.js/replacementpolicy.js";
import Contact from "./PriyaFood/contact.js/index.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="PriyaFood" Component={PriyaFood} />
        <Route path="image" Component={ImageHoverEffect}></Route>
        <Route path="trackorder" Component={TrackOrder}></Route>
        <Route path="shop" Component={Shop}></Route>
        <Route path="blogs" Component={News}></Route>
        <Route path="productdetails" Component={ProductDetails}></Route>
        <Route path="productcard" Component={ProductCard}></Route>
        <Route path="Popup" Component={PopupLogin}></Route>
        <Route path="popupview" Component={PopupView}></Route>
        <Route path="authentication" Component={Authetication}></Route>
        <Route path="otp" Component={OTPLogin}></Route>
        <Route path="otp2" Component={VerifyOtpPage}></Route>
        <Route path="contactform" Component={ContactForm}></Route>
        <Route path="contactus" Component={ContactUs}></Route>
        <Route path="termcondition" Component={Term_And_Codition}></Route>
        <Route path="returnpolicy" Component={Return_Policy}></Route>
        <Route path="privacypolicy" Component={Privacy_Policy}></Route>\
        <Route path="replacementpolicy" Component={Replacement_Policy}></Route>
        <Route path="contact" Component={Contact}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
