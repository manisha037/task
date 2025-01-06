import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import ActiveProduct from "./ActiveProduct";
const ProductPages = ({preview,setPreview}:{preview:any,setPreview:any}) => {
 

  return (
    <>
      {preview !== "prodai" && (
        <div
          onClick={() => setPreview("prodai")}
          className="sm:py-2   hover:bg-white  hover:shadow-lg py-1 px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px]   flex justify-between items-center"
        >
          <p className="text-[#1B2559] hover:text-[#1B2559] hover:font-medium  text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
            Prod.Ai
          </p>
          <FaArrowRightLong className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
        </div>
      )}
      {preview === "prodai" && (
        <ActiveProduct
          heading="Prod Ai"
          p1="Effortlessly explore feedback data using natural language, turning unstructured data into actionable insights."
          p2="Empower your team to swiftly identify and prioritize features that drive customer retention"
        />
      )}

      {preview !== "feedback" && (
        <div
          onClick={() => setPreview("feedback")}
          className="sm:py-2 py-1  px-3  hover:bg-white   cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center"
        >
          <p className="text-[#1B2559]  hover:text-[#1B2559] hover:font-medium text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
            Feedback
          </p>
          <FaArrowRightLong className="hidden  lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
        </div>
      )}
      {preview === "feedback" && (
        <ActiveProduct
          heading="Feeback"
          p1="Automatically unified and accurately tagged feedback based on your business taxonomy"
          p2="Seamlessly search and filter to uncover valuable insights"
        />
      )}
      {preview !== "dashboard" && (
        <div
          onClick={() => setPreview("dashboard")}
          className="sm:py-2 py-1  hover:bg-white   px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center"
        >
          <p className="text-[#1B2559]  hover:text-[#1B2559] hover:font-medium text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
            Dashboard
          </p>
          <FaArrowRightLong className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
        </div>
      )}
      {preview === "dashboard" && (
        <ActiveProduct
          heading="Dashboard"
          p1="Personalized dashboards for every team member. Build your dashboard directly from the conversation canvas to track trends, key metrics, and business insights from feedback data."
          p2="Stay focused on what matters most to your role"
        />
      )}
      {preview !== "alert" && (
        <div
          onClick={() => setPreview("alert")}
          className="sm:py-2   hover:bg-white  py-1 px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center"
        >
          <p className="text-[#1B2559] hover:text-[#1B2559] hover:font-medium  text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
            Alerts
          </p>
          <FaArrowRightLong className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
        </div>
      )}
      {preview === "alert" && (
        <ActiveProduct
          heading="Alerts"
          p1="Stay ahead with proactive alerts. Prod AI identifies anomalies and keeps you updated on the metrics that matter most. 

"
          p2="Get alerts where you want—Slack, email, or your preferred channel. ProdAlerts works tirelessly, even while you sleep"
        />
      )}
    </>
  );
};

export default ProductPages;
