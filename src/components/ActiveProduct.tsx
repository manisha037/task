
const ActiveProduct = ({heading,p1,p2}:{heading:string,p1:string,p2:string}) => {
  return (
   <div className="flex gap-3 flex-col   py-[24px] px-[20px] rounded-[20px]  lg:shadow-custom ">
               <p className=" font-geologica lg:text-[14px] text-[20px] xl:text-[18px] text-[#1B2559]">
                 {heading}
               </p>
   
               <p className="font-sans lg:text-[11px] text-[16px] xl:text-[14px] text-[#1B2559CC]">
             {p1}
               </p>
               <p className="font-sans lg:text-[11px] text-[16px] xl:text-[14px] text-[#1B2559CC]">
            {p2}             </p>
             </div>
  )
}

export default ActiveProduct
