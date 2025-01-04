

const Card = ({percentage,mainheading,subheading}:{percentage:string,mainheading:string,subheading:string}) => {
  return (
           <div className=" sm:h-[220px] rounded-[24px] shadow-[#0E09581A] w-[95%] xl:w-[372px] xl:h-[324px] lg:w-[283px] sm:w-[263px]    lg:h-[241px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-around  px-4 py-3 ">
          <div className="flex flex-col "> <h3 className="xl:text-[56px] lg:[44px] sm:text-[26px] text-[58px] whitespace-nowrap text-[#3C14EA] font-geologica font-semibold  mb-2">{percentage}</h3>
            <p className="xl:text-[20px] sm:text-[16px] text-[23px] font-geologica text-[#1B2559] font-medium mb-2">{mainheading}</p></div> 
            <p className="xl:text-[15px] text-[21px] sm:text-[12px] xl:leading-[24px] sm:leading-[17px] leading-[28px] text-[#1B2559CC] line-clamp-4"> {subheading}
            </p>
          </div>
  )
}

export default Card
