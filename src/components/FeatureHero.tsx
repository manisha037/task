


import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const FeatureHero = () => {
  return (
   <section className='w-[95%] mx-auto bg-gradient-to-r from-[#FFF7EE] to-[#4318FF08] py-20 rounded-[32px]'>
    <div className='lg:flex w-[95%] mx-auto  xl:justify-between xl:flex-row  flex-col'>
        
<div className='flex flex-col justify-between'>
<div className='flex flex-col -mt-8'>
        <div className='flex flex-col'>
      <p className='font-geologica font-[300] text-[16px] text-[#1B2559]'>Product / <span className=' text-[#4318FF]'>Prod.Ai</span>  </p>
      <p className='text-[48px] font-geologica text-[#1B2559]'>Prod.Ai</p>
      <p className='text-[26px] text-[#000000CC]'>Natural Language Interface on Feedback Data</p>
        </div>
       
        </div>
        <div className='flex flex-col w-[65%] mt-28'> 
        <div className="flex flex-col gap-2 ">
          <div className='flex items-center gap-2  '>
            <div className='h-[2px] w-[80px] bg-[#4318FF]'></div>
              <p className="text-[22px] font-geologica lg:whitespace-nowrap font-[300] text-[#4318FF] ">
              Talk to Your Data
              </p>
              </div>
              <p className="text-[18px]  text-[#1B2559] mb-8 ml-[88px]">
              Ask, analyze, act: Use our AI to ask specific questions about chosen feedback clusters, pull up references, or find quotes. Get the answers you need instantly.
              </p>
              </div>
        <div className="flex flex-col gap-2 ">
          <div className='flex items-center gap-2  '>
            <div className='h-[2px] w-[80px] bg-[#4318FF]'></div>
              <p className="text-[22px] font-geologica lg:whitespace-nowrap font-[300] text-[#4318FF] ">
              Turn feedback into action
              </p>
              </div>
              <p className="text-[18px]  text-[#1B2559] mb-8 ml-[88px]">
              Analyze what customers are saying about others in your market. Our system makes it simple to find the alpha in your competitors’ feedback, helping your team shape your product roadmap. Use what you learn to lead the way in your market.
              </p>
              </div>
              </div>
              </div>




        
        <div className="w-full xl:w-[75%] flex flex-col gap-8 ">
            <div className="bg-white rounded-3xl shadow-lg p-8 aspect-[4/3]">
              {/* Placeholder for the GIF or image */}
              <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">Sample GIF Placeholder</span>
              </div>
            </div> 
            <div
               
                className="border-[1.5px] gap-2 border-[#7252FF] justify-center text-[#4318FF] text-center hover:text-[white] font-[500] text-[20px]  px-6 py-3 rounded-full hover:bg-indigo-700 inline-flex items-center"
              >
               <p> Get Started for Free</p><ArrowOutwardIcon className="text-[13px]"/>
               
              </div>
          </div>

    </div>
   </section>
  )
}

export default FeatureHero

