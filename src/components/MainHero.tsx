import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import customer from "../public/assets/Group 2299.png";
import revenue from "../public/assets/Frame 2302.png";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
// import AppReviewsDashboard from "./AppReviewsDashboard";
import BoxModel from "./BoxModel";
import Lottie from "lottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import animation from "../public/assets/raja prodloop.json";
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
    <section className="py-6 sm:py-14 w-[95vw] mx-auto rounded-[30px] sm:rounded-none bg-gradient-to-r from-[#FFF7EE] to-[#4318FF08] sm:flex items-center justify-center">
      <div className="flex flex-col sm:flex-row sm:w-[90%] xl:w-[80%] max-w-[1152px] w-[88%] mx-auto sm:justify-between">
        <div className="flex flex-col sm:w-[60%]">
          <div>
            <h2 className="text-[22px] sm:text-[20px] lg:text-[24px] font-[200] sm:font-[100] font-geologica text-[#1B2559]">
              Convert
            </h2>
            <div className="flex items-center">
              <h1 className="text-[36px] sm:text-[26px] lg:text-[32px] font-[400] font-geologica text-[#1B2559]">
                Customer Feedback
              </h1>
              <img
                src={customer}
                className="w-[30px] sm:w-[40px] lg:w-[50px] ml-2 -mt-2"
                alt="customer"
              />
            </div>
            <h2 className="text-[22px] sm:text-[20px] lg:text-[24px] font-[200] sm:font-[100] font-geologica text-[#1B2559] mt-4">
              Into
            </h2>
            <div className="flex items-center">
              <h1 className="text-[36px] sm:text-[26px] lg:text-[32px] font-[400] font-geologica text-[#1B2559]">
                Revenue Growth
              </h1>
              <img
                src={revenue}
                className="w-[30px] sm:w-[40px] lg:w-[50px] ml-2 -mt-2"
                alt="revenue"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[14px] sm:text-[16px] text-[#4318FF] font-geologica font-[300]">
              AI Powered Speech And Text Feedback Analytics Tool
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#1B2559] font-sans font-[500] mt-2">
              Generate insights from feedback data from customer support calls
              and surveys using natural language.
            </p>
          </div>

          <div
            onClick={handleOpen}
            className="mt-6 py-2 px-6 bg-[#4318FF] text-white rounded-full text-center text-[14px] sm:text-[16px] font-[500] hover:bg-white hover:text-[#4318FF] border border-[#4318FF] cursor-pointer inline-flex items-center gap-1"
          >
            <p>Get Started for Free</p>
            <ArrowOutwardIcon className="text-[14px]" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 sm:mt-0 sm:w-[40%]">
          <Lottie animationData={animation} loop={true} className="w-[80%]" />
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BoxModel />
        </Box>
      </Modal>
    </section>
  );
};

export default MainHero;
