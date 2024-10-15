

const Card = ({percentage,mainheading,subheading}:{percentage:string,mainheading:string,subheading:string}) => {
  return (
    <div className=" rounded-[24px] shadow-[#0E09581A] w-[400px] h-[344px] shadow-xl flex flex-col justify-around  px-4 py-2 ">
            <h3 className="text-[80px] text-[#3C14EA] font-geologica font-semibold  mb-2">{percentage}</h3>
            <p className="text-[28px] font-geologica text-[#1B2559] font-medium mb-2">{mainheading}</p>
            <p className="text-[22px] leading-[32px] text-[#1B2559CC] line-clamp-4"> {subheading}
            </p>
          </div>
  )
}

export default Card
