import { Link } from "react-router-dom"
import logo from "../public/assets/Full Logo.png";
const Footer = () => {
  return (
<section className="h-[96px] bg-[#FFF7EE] w-[100%] border-t border-t-[#4318FF] flex items-center justify-around">
  <div className="flex w-[45%] justify-center ">
   <img src={logo} alt="" className="mr-4" />
    <p className="text-[#7D756C] text-[14px] font-geologica font-normal"> <span className="text-[19px]">&copy;</span> 2024
    </p>
  </div>
  <div className="flex justify-around w-[65%]">
    <Link to="/feature" className="text-[16px] font-geologica font-[300] text-[#1B2559]">About Us</Link>
    <Link  to="/feature" className="text-[16px] font-geologica font-[300] text-[#1B2559]">Contact Us</Link>
    <Link  to="/feature" className="text-[16px] font-geologica font-[300] text-[#1B2559]">Privacy Policy</Link>
  </div>
</section>
  )
}

export default Footer