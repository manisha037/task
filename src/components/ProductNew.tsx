import ProductPages from "./ProductPages";
import product1 from "../public/assets/product1.png";
import {useState} from "react";

const ProductNew = () => {
  const [preview,setPreview]=useState("prodai");


  return (
    <div className="max-w-[1152px]  mx-auto w-[95vw] py-14">
      <h1 className="font-geologica lg:text-[25px]  text-[26px]  text-[#1B2559] lg:mb-5">
        Product Overview
      </h1>
      <div className="flex lg:hidden justify-center gap-1 sm:gap-4 py-5">
        <ProductPages />
      </div>
      <div className=" lg:flex-row flex flex-col-reverse w-[100%] gap-5 items-center">
        <div className="lg:w-[45%] w-full  flex flex-col gap-8 ">
          {/* <div className="flex gap-3 flex-col   py-[24px] px-[20px] rounded-[20px]  lg:shadow-custom ">
            <p className=" font-geologica lg:text-[14px] text-[20px] xl:text-[18px] text-[#1B2559]">
              Prod Ai
            </p>

            <p className="font-sans lg:text-[11px] text-[16px] xl:text-[14px] text-[#1B2559CC]">
              Effortlessly explore feedback data using natural language, turning
              unstructured data into actionable insights.
            </p>
            <p className="font-sans lg:text-[11px] text-[16px] xl:text-[14px] text-[#1B2559CC]">
              Empower your team to swiftly identify and prioritize features that
              drive customer retention
            </p>
          </div> */}

          <div className="lg:flex flex-col gap-2 hidden  ">
            <ProductPages  />
          </div>
        </div>
        <div className="w-full">
          <img src={product1} alt="product" className=" w-[760px] h-[353px] " />
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
