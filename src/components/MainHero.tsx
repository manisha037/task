import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import customer from "../public/assets/Group 2299.png";
import revenue from "../public/assets/Frame 2302.png";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const MainHero = () => {
  return (
    <section className="w-[95vw] mx-auto bg-gradient-to-r from-[#FFF7EE] to-[#4318FF08] lg:py-20 py-5 px-1 lg:px-0 rounded-[32px]">
      <div className="lg:flex w-[95%] mx-auto  lg:justify-between lg:flex-row   flex-col">
        <div className="flex flex-col lg:w-[50%] justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2 className="font-ethin font-geologica xl:text-[45px] md:text-[27px] text-[18px] text-[#1B2559]  ">
                Convert
              </h2>
              <div className="flex items-center ">
                <h1 className="whitespace-nowrap font-[400] text-[#1B2559] md:text-[40px] text-[29px] xl:text-[60px]  font-geologica flex items-center">
               
                  Customer Feedback &nbsp;
                </h1>
                <img
                  src={customer}
                  className="md:-mt-8 -mt-3 md:w-[60px] w-[40px] h-[32px] md:h-[60px] lg:w-[95px] lg:h-[78px]"
                  alt="customer"
                  width={95}
                  height={78}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-ethin font-geologica xl:text-[45px] md:text-[27px] text-[18px] text-[#1B2559]  ">
                Intro
              </h2>
              <div className="flex items-center">
                <h1 className="whitespace-nowrap font-[400] text-[#1B2559] md:text-[40px] text-[29px] xl:text-[60px]  font-geologica flex items-center">
                
                  Revenue Growth &nbsp;
                </h1>
                <img
                  src={revenue}
                  className="md:-mt-8 -mt-3   md:w-[60px] md:h-[60px] w-[40px] h-[32px] lg:w-[95px] lg:h-[78px] "
                  alt="customer"
                  width={95}
                  height={78}
                />
              </div>
            </div>
          </div>
          <div className="lg:flex hidden flex-col gap-2 ">
            <div className="flex items-center gap-2  ">
              <div className="h-[2px] hidden lg:flex w-[80px] bg-[#4318FF]"></div>
              <p className="md:text-[22px] text-[15px] font-geologica font-[300] text-[#4318FF] ">
              AI powered Customer Intelligence tool
              </p>
            </div>
            <p className="md:text-[18px] text-[15px] w-[80%]  text-[#1B2559] mb-8 lg:ml-[88px]">
            Turn thousands of customer service calls into actionable insights <br/> Tailored models for your business taxonomy
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[40%]  flex flex-col md:gap-8 gap-5 ">
          <div className="bg-white rounded-3xl shadow-lg mt-4 lg:mt-0 p-8 aspect-[4/3]">
            {/* Placeholder for the GIF or image */}
            <div className="w-full h-full  rounded-2xl flex items-center justify-center">
              <DotLottieReact
                src="src\public\assets\animation.lottie"
                loop
                autoplay
              />
            </div>
          </div>
          <div className="flex lg:hidden flex-col gap-2 ">
            <div className="flex items-center gap-2  ">
              <div className="h-[2px] hidden lg:flex w-[80px] bg-[#4318FF]"></div>
              <p className="md:text-[22px] text-[15px] font-geologica lg:whitespace-nowrap font-[300] text-[#4318FF] ">
                AI Powered Speech And Text Feedback Analytics Tool
              </p>
            </div>
            <p className="md:text-[18px] text-[15px]  text-[#1B2559] mb-8 lg:ml-[88px]">
              Generate insights from feedback data from customer support calls
              and surveys using natural language
            </p>
          </div>
          
          <div className="border-[1.5px] gap-2 border-[#7252FF] justify-center text-[#4318FF] text-center hover:text-[white] font-[500] md:text-[20px] text-[14px] py-1 px-6  md:px-6 md:py-3 rounded-full hover:bg-indigo-700 inline-flex items-center">
            <p> Get Started for Free</p>
            <ArrowOutwardIcon className="text-[13px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
