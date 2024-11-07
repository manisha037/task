
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from 'react';

const Product = () => {
    const arr=Array.from({length:5});
    const [timestamp,setTimestamp]=useState(0);
    const handleTimeStamp=()=>{
        if(timestamp+5<42)
        setTimestamp((prev)=>prev+5)
    else setTimestamp(0);
    }
  return (
   <section className='py-20 w-screen '>
    <div className='flex  justify-between w-[95%] mx-auto '>
        <div className='flex flex-col items-center lg:px-3 border border-[#4318FF] rounded-3xl md:w-[30%] md:h-[634px] w-[90%] mx-auto justify-between md:pt-10 md:pb-8'>
        <iframe 
    className="w-full h-[200px]  md:hidden rounded-3xl " 
    src={`https://www.youtube.com/embed/IPukuYb9xWw?start=${timestamp}&autoplay=1&mute=1` }
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
  </iframe>
            <div className="flex flex-col gap-5 pt-4 py-2">
            <h1 className='text-[#1B2559] font-geologica pl-2 font-[500] lg:text-[28px] text-[18px] tracking-wider'>Product Overview</h1>
            <p className='text-[#1B2559] w-[95%] mx-auto text-left lg:text-[20px] text-[14px] tracking-wider leading-[19px] lg:leading-[28px] '>An easy-to-use platform that helps you collect, analyse and generate insights from feedback data</p>
            </div>
            <div className='flex flex-col w-[90%] gap-4'>
                {arr.map(()=>( <div className='flex justify-between'><p className="font-[300] lg:text-[18px] text-[13px] font-geologica text-[#1B2559CC] tracking-[0.5%]">AI powered speech</p>
                    <p className='text-[#4318FF] font-geologica font-[300] text-[10px] lg:text-[16px] cursor-pointer tracking-[0.5%]' onClick={handleTimeStamp}>5 s</p></div>))}
               
            </div>
           <div className='flex items-center gap-2 py-3 lg:py-0'>
            <p className='text-[#4318FF] font-medium lg:text-[20px] text-[14px] whitespace-nowrap '>Book a Quick Demo </p>
            <ArrowOutwardIcon className=' text-[#4318FF] lg:text-[13px] text-[8px] '/>
           </div>
        </div>
        <div className=" hidden md:flex md:w-[68%] h-[634px] relative">
  <iframe 
    className="absolute  top-0 left-0 w-full h-full" 
    src={`https://www.youtube.com/embed/IPukuYb9xWw?start=${timestamp}&autoplay=1&mute=1` }
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen>
  </iframe>
</div>


       
    </div>

   </section>
  )
}

export default Product
