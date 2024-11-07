

const Card = ({percentage,mainheading,subheading}:{percentage:string,mainheading:string,subheading:string}) => {
  return (
           <div className=" rounded-[24px] shadow-[#0E09581A] w-[95%]  lg:w-[400px] lg:h-[384px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-around  px-4 py-2 ">
            <h3 className="lg:text-[80px] text-[40px] whitespace-nowrap text-[#3C14EA] font-geologica font-semibold  mb-2">{percentage}</h3>
            <p className="lg:text-[28px] text-[16px] font-geologica text-[#1B2559] font-medium mb-2">{mainheading}</p>
            <p className="lg:text-[22px] text-[15px] lg:leading-[32px] leading-[20px] text-[#1B2559CC] line-clamp-4"> {subheading}
            </p>
          </div>
  )
}

export default Card
