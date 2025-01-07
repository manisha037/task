import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import ActiveProduct from "./ActiveProduct";

const ProductPages = ({ preview, setPreview }: { preview: any; setPreview: any }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Product Card: Prod.Ai */}
      {preview !== "prodai" && (
        <div
          onClick={() => setPreview("prodai")}
          className="py-2 px-3 sm:pl-5 sm:pr-3 bg-[#EDE9FF] hover:bg-white hover:shadow-md cursor-pointer rounded-[10px] flex justify-between items-center"
        >
          <p className="text-[#1B2559] text-[14px] sm:text-[16px] font-geologica hover:font-medium">
            Prod.Ai
          </p>
          <FaArrowRightLong className="hidden lg:block text-[#1B2559] text-opacity-40 text-[16px]" />
        </div>
      )}
      {preview === "prodai" && (
        <ActiveProduct
          heading="Prod.Ai"
          p1="Effortlessly explore feedback data using natural language, turning unstructured data into actionable insights."
          p2="Empower your team to swiftly identify and prioritize features that drive customer retention."
        />
      )}

      {/* Product Card: Feedback */}
      {preview !== "feedback" && (
        <div
          onClick={() => setPreview("feedback")}
          className="py-2 px-3 sm:pl-5 sm:pr-3 bg-[#EDE9FF] hover:bg-white hover:shadow-md cursor-pointer rounded-[10px] flex justify-between items-center"
        >
          <p className="text-[#1B2559] text-[14px] sm:text-[16px] font-geologica hover:font-medium">
            Feedback
          </p>
          <FaArrowRightLong className="hidden lg:block text-[#1B2559] text-opacity-40 text-[16px]" />
        </div>
      )}
      {preview === "feedback" && (
        <ActiveProduct
          heading="Feedback"
          p1="Automatically unified and accurately tagged feedback based on your business taxonomy."
          p2="Seamlessly search and filter to uncover valuable insights."
        />
      )}

      {/* Product Card: Dashboard */}
      {preview !== "dashboard" && (
        <div
          onClick={() => setPreview("dashboard")}
          className="py-2 px-3 sm:pl-5 sm:pr-3 bg-[#EDE9FF] hover:bg-white hover:shadow-md cursor-pointer rounded-[10px] flex justify-between items-center"
        >
          <p className="text-[#1B2559] text-[14px] sm:text-[16px] font-geologica hover:font-medium">
            Dashboard
          </p>
          <FaArrowRightLong className="hidden lg:block text-[#1B2559] text-opacity-40 text-[16px]" />
        </div>
      )}
      {preview === "dashboard" && (
        <ActiveProduct
          heading="Dashboard"
          p1="Personalized dashboards for every team member. Build your dashboard directly from the conversation canvas to track trends, key metrics, and business insights from feedback data."
          p2="Stay focused on what matters most to your role."
        />
      )}

      {/* Product Card: Alerts */}
      {preview !== "alert" && (
        <div
          onClick={() => setPreview("alert")}
          className="py-2 px-3 sm:pl-5 sm:pr-3 bg-[#EDE9FF] hover:bg-white hover:shadow-md cursor-pointer rounded-[10px] flex justify-between items-center"
        >
          <p className="text-[#1B2559] text-[14px] sm:text-[16px] font-geologica hover:font-medium">
            Alerts
          </p>
          <FaArrowRightLong className="hidden lg:block text-[#1B2559] text-opacity-40 text-[16px]" />
        </div>
      )}
      {preview === "alert" && (
        <ActiveProduct
          heading="Alerts"
          p1="Stay ahead with proactive alerts. Prod AI identifies anomalies and keeps you updated on the metrics that matter most."
          p2="Get alerts where you want—Slack, email, or your preferred channel. ProdAlerts works tirelessly, even while you sleep."
        />
      )}
    </div>
  );
};

export default ProductPages;
