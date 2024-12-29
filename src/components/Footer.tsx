import { Link } from "react-router-dom"
 import logo from "../public/assets/Full Logo.png";
const Footer = () => {
  return (
<section className="h-[144px] bg-[#FFF7EE] w-[100vw] border-t border-t-[#4318FF] flex flex-col items-center justify-around">
 
  <div className="flex justify-around w-[85%]">
    <Link to="/feature" className="xl:text-[16px] text-[13px]  font-geologica font-[300] text-[#1B2559]">About Us</Link>
    <Link  to="/feature" className="xl:text-[16px] text-[13px] font-geologica font-[300] text-[#1B2559]">Contact Us</Link>
    <Link  to="/feature" className="xl:text-[16px] text-[13px] font-geologica font-[300] text-[#1B2559]">Privacy Policy</Link>
  </div>
  <div className="w-[85%] flex items-center justify-center flex-col gap-1">
    <img src={logo} alt="" className="grayscale w-[81px] h-[13px] xl:w-[101px] xl:h-[16px]"  />
   <div className="flex items-center gap-1"><span className="xl:text-[19px]  text-[15px] text-[#7D756C] font-semibold">&copy;</span> <p className="text-[#7D756C] text-[11px] xl:text-[14px]"> 2024</p></div>

  </div>
</section>
  )
}

export default Footer