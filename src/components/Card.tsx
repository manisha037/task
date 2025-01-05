import vector from "../public/assets/Vector.svg"

const Card = ({percentage,mainheading,subheading}:{percentage:string,mainheading:string,subheading:string}) => {
  return (
           <div className=" sm:h-[220px] rounded-[24px] shadow-[#0E09581A]  w-[95%] xl:w-[380px] xl:h-[370px] lg:w-[283px] sm:w-[263px]    lg:h-[241px] shadow-[0px_4px_20px_6px_rgba(0,0,0,0.1)] flex flex-col justify-around  px-[45px] py-[50px] ">
          <div className="flex flex-col  "> <h3 className="xl:text-[56px] lg:[44px] sm:text-[26px] text-[58px] whitespace-nowrap text-[#3C14EA] font-geologica font-semibold  mb-2">
            {percentage=="8 %" ? <> <img src={vector} alt="" className="inline w-[23px] h-[23px] rotate-180 -mr-3" /> {percentage} </> : percentage==="3.5 %" ? <> <img src={vector} alt="" className="inline w-[23px] h-[23px]  -mr-3" /> {percentage} </> : <>{percentage}</>}
          </h3>
            <p className="xl:text-[19px] sm:text-[16px] text-[23px] font-geologica text-[#1B2559] font-medium mb-6">{mainheading}</p></div> 
            <p className="xl:text-[16px] text-[21px] sm:text-[12px] xl:leading-[24px] sm:leading-[17px] leading-[28px] text-[#1B2559CC] line-clamp-4"> {subheading}
            </p>
          </div>
  )
}

export default Card
