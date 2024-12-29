
import { FaArrowRight } from "react-icons/fa";
const ProductPages = () => {
  return (
    <>
     <div className="sm:py-2 lg:hidden  py-1 px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px]   flex justify-between items-center">
              <p className="text-[#1B2559] text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
                Prod.Ai
              </p>
              <FaArrowRight className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
            </div>
       <div className="sm:py-2 py-1  px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center">
              <p className="text-[#1B2559] text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
                Feedback
              </p>
              <FaArrowRight className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
            </div>
       <div className="sm:py-2 py-1  px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center">
              <p className="text-[#1B2559] text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
                Dashboard
              </p>
              <FaArrowRight className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
            </div>
       <div className="sm:py-2  py-1 px-3  cursor-pointer sm:pl-5 sm:pr-3 bg-[#EDE9FF] lg:rounded-[10px] rounded-[5px] flex justify-between items-center">
              <p className="text-[#1B2559] text-opacity-45 sm:text-[16px] text-[12px] font-geologica sm:font-[300]">
                Alerts
              </p>
              <FaArrowRight className="hidden lg:flex text-opacity-40 text-[#1B2559] text-[16px] font-[300]" />
            </div>
           
    </>
  )
}

export default ProductPages
