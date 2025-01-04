import { FaArrowRightLong } from "react-icons/fa6";

const MobileProduct = () => {
  return (
    <>
      <div className="sm:py-2     hover:bg-white  hover:shadow-lg py-1 px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px]   flex justify-between items-center">
        <p className="text-[#1B2559] hover:text-[#1B2559] hover:font-medium  text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
          Prod.Ai
        </p>
        <FaArrowRightLong className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
      </div>

      <div className="sm:py-2 py-1    px-3  hover:bg-white   cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center">
        <p className="text-[#1B2559]  hover:text-[#1B2559] hover:font-medium text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
          Feedback
        </p>
        <FaArrowRightLong className="hidden  lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
      </div>

      <div className="sm:py-2 py-1  hover:bg-white   px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center">
        <p className="text-[#1B2559]  hover:text-[#1B2559] hover:font-medium text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
          Dashboard
        </p>
        <FaArrowRightLong className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
      </div>

      <div className="sm:py-2   hover:bg-white  py-1 px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center">
        <p className="text-[#1B2559] hover:text-[#1B2559] hover:font-medium  text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
          Alerts
        </p>
        <FaArrowRightLong className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
      </div>
    </>
  );
};

export default MobileProduct;
