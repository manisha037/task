import logo from "../public/assets/Group 24.png";
import { useNavigate } from "react-router-dom";


const Card = ({title,link}:{title:string,link:string}) => {
  const navigate = useNavigate();
  return(
    <div onClick={()=>navigate(link)}   className="md:w-[48%] w-[100%] px-5 h-[88px] cursor-pointer rounded-xl gap-5 flex items-center shadow-lg shadow-[#0E09581A]">
    <img src={logo} alt="logo" className="w-[27px] h-[18px] md:w-[45px] md:h-[44px]" />
    <div className="flex flex-col">
      <p className="font-geologica md:text-[23px] text-[14px]">{title}</p>
      <p className="md:text-[18px] text-[12px]">Natural Language Interface on Feedback Data</p>
    </div>
  </div>

  )
}


const DropdownMenu = () => {
  return (
    <div
      className="w-[95%] absolute ml-[2.5%]  mx-auto border z-50 h-auto border-t-0 bg-white rounded-b-[32px]"
      style={{
        borderColor:
          'linear-gradient(5.27deg, rgba(67, 24, 255, 0.5) -71.27%, rgba(102, 102, 102, 0) 88.34%)',
        borderImageSlice: 1,
      }}
    >
      <div className="w-[90%] mx-auto py-5 flex flex-col flex-wrap md:gap-8 gap-2">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between ">
          <Card title={"Prod.ai"} link={"/feature"} />
          <Card title={"Prod Dashboard"} link={"/feature"} />
        </div>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
          <Card title={"Prod Feedback"} link={"/feature"}/>
          <Card title={"Prod Alerts"} link={"/feature"}/>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
