import { Link } from "react-router-dom"
import logo from "../public/assets/Full Logo.png";
const Footer = () => {
  return (
<section className="h-[96px] bg-[#FFF7EE] w-screen border-t border-t-[#4318FF] flex items-center justify-around">
  <div className="flex w-[45%] justify-center items-center ">
   <img src={logo} alt="" className="md:mr-4 mr-2 w-[50%] h[45px] " />
    <p className="text-[#7D756C] md:text-[14px] lg:text-[16px] text-[12px] font-geologica font-normal"> <span className="md:text-[19px] lg:text-[22px] text-[15px]">&copy;</span> 2024
    </p>
  </div>
  <div className="flex justify-around w-[65%]">
    <Link to="/feature" className="md:text-[16px] lg:text-[20px] text-[11px]  font-geologica font-[300] text-[#1B2559]">About Us</Link>
    <Link  to="/feature" className="md:text-[16px] lg:text-[20px] text-[11px] font-geologica font-[300] text-[#1B2559]">Contact Us</Link>
    <Link  to="/feature" className="md:text-[16px] lg:text-[20px] text-[11px] font-geologica font-[300] text-[#1B2559]">Privacy Policy</Link>
  </div>
</section>
  )
}

export default Footer