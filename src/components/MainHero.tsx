
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import customer from "../public/assets/Group 2299.png";
import revenue from "../public/assets/Frame 2302.png";

const MainHero = () => {
  return (
   <section className='w-[95%] mx-auto bg-gradient-to-r from-[#FFF7EE] to-[#4318FF08] py-20 rounded-[32px]'>
    <div className='lg:flex w-[95%] mx-auto  xl:justify-between xl:flex-row  flex-col'>
        
<div className='flex flex-col justify-between'>
<div className='flex flex-col -mt-8'>
        <div className='flex flex-col'>
        <h2 className="font-ethin font-geologica lg:text-[45px] text-[27px] text-[#1B2559] leading-[104.98px] ">Convert</h2>
        <div className='flex items-center gap-4 lg:-mt-8 -mt-14'>
               <h1 className="whitespace-nowrap font-[400] text-[#1B2559] text-[40px] lg:text-[70px] leading-[104.98px] font-geologica flex items-center"> Customer Feedback</h1> <img src={customer} className='-mt-8 w-[60px] h-[60px] lg:w-[95px] lg:h-[78px]' alt="customer" width={95} height={78} />
              </div>
        </div>
        <div className='flex flex-col'>
        <h2 className="font-ethin font-geologica lg:text-[45px] text-[27px] text-[#1B2559] leading-[104.98px] ">Intro</h2>
        <div className='flex items-center gap-4 lg:-mt-8 -mt-14'>
               <h1 className="whitespace-nowrap font-[400] text-[#1B2559] text-[40px] lg:text-[70px] leading-[104.98px] font-geologica flex items-center">  Revenue Growth</h1> <img src={revenue} className='-mt-8  w-[60px] h-[60px] lg:w-[95px] lg:h-[78px] ' alt="customer" width={95} height={78} />
              </div>
        </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className='flex items-center gap-2  '>
            <div className='h-[2px] w-[80px] bg-[#4318FF]'></div>
              <p className="text-[22px] font-geologica lg:whitespace-nowrap font-[300] text-[#4318FF] ">
                AI Powered Speech And Text Feedback Analytics Tool
              </p>
              </div>
              <p className="text-[18px]  text-[#1B2559] mb-8 ml-[88px]">
                Generate insights from feedback data from customer support calls and surveys using natural language
              </p>
              </div>
              </div>





        
        <div className="w-full xl:w-[40%] flex flex-col gap-8 ">
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

export default MainHero
