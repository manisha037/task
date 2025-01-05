import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import customer from "../public/assets/Group 2299.png";
import revenue from "../public/assets/Frame 2302.png";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
// import AppReviewsDashboard from "./AppReviewsDashboard";
import BoxModel from "./BoxModel";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const style = {
  position: "absolute",
  bgcolor: "background.paper",
  borderRadius: "32px",
  border: "none",
  outline: "none",
  boxShadow: 24,
  left: "5%",
  top: "5%",
};

const MainHero = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="sm:w-[100vw] sm:py-10  py-6 w-[95vw] mx-auto rounded-[30px] sm:rounded-none     bg-gradient-to-r   sm:flex items-center sm:justify-center  from-[#FFF7EE] to-[#4318FF08]  ">
      <div className="sm:flex w-[88%] sm:w-[90%] xl:w-[80%] max-w-[1152px]   mx-auto items-center   sm:justify-between sm:flex-row   flex-col">
        <div className="flex flex-col sm:w-[60%] h-full  justify-between">
          <div className="flex flex-col    ">
            <div className="flex flex-col">
              <h2 className="sm:font-[200]  font-[100] text-[18px] sm:text-[20px] lg:text-[24px] font-geologica xl:text-[28px]  text-[#1B2559] -mb-1  lg:-mb-3 ">
                Convert
              </h2>
              <div className="flex items-center ">
                <h1 className="whitespace-nowrap font-[400] text-[#1B2559] text-[22px] sm:text-[26px] lg:text-[36px]   xl:text-[44px]  font-geologica flex items-center ">
                  Customer Feedback &nbsp;
                </h1>
                <img
                  src={customer}
                  className="lg:w-[53px] lg:h-[43px] sm:w-[44px] sm:h-[33px] w-[40px] h-[29px] -ml-3 -mt-3"
                  alt="customer"
                  width={95.8}
                  height={77.76}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="sm:font-[200]  font-[100] text-[18px] sm:text-[20px] lg:text-[24px] font-geologica xl:text-[28px]  text-[#1B2559] lg:-mb-3 -mb-1 ">
                Into
              </h2>
              <div className="flex items-center">
                <h1 className="whitespace-nowrap font-[400] text-[#1B2559] text-[22px] sm:text-[26px] lg:text-[36px]   xl:text-[44px]  font-geologica flex items-center">
                  Revenue Growth &nbsp;
                </h1>
                <img
                  src={revenue}
                  className="lg:w-[41px] lg:h-[47px] sm:w-[32px] sm:h-[36px] w-[29px] h-[32px] -ml-3   -mt-3   "
                  alt="customer"
                  width={74.13}
                  height={84.4}
                />
              </div>
            </div>
          </div>
          <div className="sm:flex hidden flex-col xl:gap-2 mt-14 ">
            <div className="flex flex-col gap-2  lg:mt-8">
              {" "}
              <p className="  text-[13px]  lg:text-[16px] font-geologica font-[300] sm:font-[400] text-[#4318FF] ">
                AI powered Customer Intelligence tool
              </p>
              <p className="lg:text-[16px] md:leading-[22px] text-[13px] font-sans font-[600] w-[80%]  text-[#1B2559]  ">
                Generate insights from feedback data from customer support calls
                and surveys using natural language
              </p>
            </div>
            <div
              onClick={handleOpen}
              className="border-[1.5px] sm:mt-4 cursor-pointer bg-[#4318FF] gap-1 py-1  border-[#4318FF] justify-center text-white text-center hover:text-[#4318FF] hover:bg-white font-[500]  text-[14px] sm:w-[212px] sm:h-[29px]  xl:w-[270px] xl:h-[37px] rounded-full  inline-flex items-center"
            >
              <p className="lg:text-[16px] font-[600] font-sans">
                {" "}
                Get Started for Free
              </p>
              <ArrowOutwardIcon className="xl:text-[9px]" />
            </div>
          </div>
        </div>

        {/* <div className="bg-white xl:w-[367px] xl:h-[379px]  max-h-[480px] rounded-[20px] shadow-lg  sm:mt-0  "> */}
        {/* Placeholder for the GIF or image */}
        <div className=" my-8 rounded-2xl shadow-lg bg-white xl:w-[367px] xl:h-[379px] h-[45vh]  sm:w-[249px] sm:h-[258px] md:w-[289px] md:h-[298px]   flex items-center justify-center">
          <DotLottieReact
            className="w-full h-full"
            src="src\public\assets\animation.lottie"
            loop
            autoplay
          />
          {/* </div> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <AppReviewsDashboard/> */}
              <BoxModel />
            </Box>
          </Modal>
        </div>
        <div className="flex sm:hidden flex-col gap-1  ">
          <div className="flex gap-2 flex-col">
            <p className=" text-[15px] font-geologica  font-[300] text-[#4318FF] ">
              AI Powered Speech And Text Feedback Analytics Tool
            </p>

            <p className="md:text-[18px] text-[15px]  text-[#1B2559] mb-8 lg:ml-[88px]">
              Generate insights from feedback data from customer support calls
              and surveys using natural language
            </p>
          </div>
          <div
            onClick={handleOpen}
            className="border-[1.5px] cursor-pointer  gap-1 py-1  border-[#4318FF] justify-center text-[#4318FF] text-center hover:text-[white]  hover:bg-[#4318FF] font-[500] text-[14px]   rounded-full  inline-flex items-center"
          >
            <p className="text-[16px] font-[500] font-sans">
              {" "}
              Get Started for Free
            </p>
            <ArrowOutwardIcon className="text-[6px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
