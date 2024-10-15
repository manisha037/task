

const Hero = () => {
  return (
    <div className='w-[95%] mx-auto h-[calc(100vh-100px)] bg-[#4318FF] flex justify-center items-center rounded-[32px]'>
        <div className='w-[93%] mx-auto flex items-center justify-between h-[80%]'>
            <div className='w-[48%] flex-col justify-between h-[100%]  flex'>
            <div className='flex flex-col '>
                <p className='text-[26px] text-white'>Pricing</p>
                <h1 className='font-geologica text-[70px] leading-[87px] text-white'>Find the plan That <br/> Works for your needs</h1>
            </div>
            <div className='flex flex-col gap-4 '>
                <p className='font-[500] text-[26px] text-white'>Prodloop's pricing is tailored to your needs and depends on a few essential factors. </p>
                <p className='font-[500] text-[26px] text-white'>That's why we'd prefer to hear from you first</p>
            </div>
            </div>
            <div className='w-[40%] rounded-[24px] h-[95%] bg-white flex flex-col items-center justify-around'>
               <p className="text-[#4318FF] font-geologica text-[28px] font-medium">Talk to Our Experts</p>
               <div className="flex flex-col gap-4 w-[100%] items-center">
                <div className="w-[85%] border border-[#D9D9D9] rounded-lg h-[60px] flex items-center px-8"><input type="text" className="bg-transparent outline-none placeholder:text-[#1B255980] placeholder:text-[23px] placeholder:font-geologica placeholder:font-[200] " placeholder="Name" /></div>
                <div className="w-[85%] border border-[#D9D9D9] rounded-lg h-[60px] flex items-center px-8"><input type="text" className="bg-transparent outline-none placeholder:text-[#1B255980] placeholder:text-[23px] placeholder:font-geologica placeholder:font-[200] " placeholder="Work Email" /></div>
                <div className="w-[85%] border border-[#D9D9D9] rounded-lg h-[60px] flex items-center px-8"><input type="text" className="bg-transparent outline-none placeholder:text-[#1B255980] placeholder:text-[23px] placeholder:font-geologica placeholder:font-[200] " placeholder="Company Name" /></div>
                <div className="w-[85%] border border-[#D9D9D9] rounded-lg h-[60px] flex items-center px-8"><input type="text" className="bg-transparent outline-none placeholder:text-[#1B255980] placeholder:text-[23px] placeholder:font-geologica placeholder:font-[200] " placeholder="How did you hear about us?" /></div>
               </div>
               <div className="cursor-pointer text-[#4318FF] font-medium text-[20px] border-[1.5px] border-[#7252FF] hover:text-white hover:bg-[#4318FF] w-[80%] text-center rounded-full py-[12px]" >Submit</div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
