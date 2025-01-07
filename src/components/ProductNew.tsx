import ProductPages from "./ProductPages";
import prodai from "../public/assets/review1.png";
import { useState } from "react";
import MobileProduct from "./MobileProduct";
import alert from "../public/assets/Alerts.png";
import dashboard from "../public/assets/Dashboards.png";
import feedback from "../public/assets/Feedback.png";

const ProductNew = () => {
  const [preview, setPreview] = useState("prodai");

  return (
    <div className="max-w-[1152px] mx-auto w-[95vw] xl:w-[100vw] py-14">
      <h1 className="font-geologica text-[22px] md:text-[26px] lg:text-[25px] text-[#1B2559] mb-5 lg:mb-5 text-center lg:text-left">
        Product Overview
      </h1>
      {/* Mobile view */}
      <div className="flex lg:hidden justify-center gap-2 sm:gap-4 py-5">
        <MobileProduct />
      </div>
      {/* Main content */}
      <div className="lg:flex lg:flex-row flex flex-col-reverse w-full gap-5 items-center">
        {/* Sidebar */}
        <div className="lg:w-[45%] w-full flex flex-col gap-8">
          {/* Sidebar for larger screens */}
          <div className="hidden lg:flex flex-col gap-4">
            <ProductPages preview={preview} setPreview={setPreview} />
          </div>
        </div>
        {/* Image Preview */}
        <div className="w-full max-w-[500px] mx-auto lg:mx-0">
          {preview === "prodai" && (
            <img
              src={prodai}
              alt="Prod AI"
              className="w-full object-cover rounded-md shadow-md"
            />
          )}
          {preview === "alert" && (
            <img
              src={alert}
              alt="Alerts"
              className="w-full object-cover rounded-md shadow-md"
            />
          )}
          {preview === "dashboard" && (
            <img
              src={dashboard}
              alt="Dashboard"
              className="w-full object-cover rounded-md shadow-md"
            />
          )}
          {preview === "feedback" && (
            <img
              src={feedback}
              alt="Feedback"
              className="w-full object-cover rounded-md shadow-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
