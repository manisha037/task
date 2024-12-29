
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Feedback = () => {
  return (
    <section className='py-14 w-screen  '>
      <div className='w-[95vw] max-w-[1152px] mx-auto flex flex-col gap-5 '>
        <h1 className='text-[#3C14EA] lg:text-[33px] sm:text-[26px] text-[28px]  w-full font-geologica font-[300]'>Get more out of your Feedback using ai</h1>
        <div className='flex justify-around items-center flex-col gap-5 sm:flex-row'>
          <div className='flex flex-col lg:w-[60%] w-full gap-3'>
            <h1 className='text-[#1B2559] font-medium lg:text-[19px] sm:text-[15px] text-[20px] font-geologica'>Onboard For Free</h1>
            <p className='lg:text-[18px] text-[16px] sm:text-[14px] md:leading-[32px] leading-[24px]  text-[#1B2559CC]'>Supercharge your product and customer experience teams to generate feedback insights in minutes, not hours</p>
          </div>
          <div className='flex flex-col gap-3 items-center w-full lg:w-auto'>
            <div className='border-[1.5px] border-[#7252FF] rounded-full flex gap-2 justify-center items-center lg:h-[52px] h-[36px] w-[90%] lg:w-[524px]'>
              <p className='text-[#4318FF] lg:text-[20px] md:text-[16px] text-[14px] font-medium'>Get Started for Free</p>
              <ArrowOutwardIcon className=' text-[#4318FF] text-[20px]' />
            </div>
            <div className='lg:text-[20px] md:text-[16px] text-[14px] font-bold border-[1.5px] text-white rounded-full justify-center items-center bg-[#4318FF] border-[#7252FF] flex gap-2 lg:h-[52px] h-[36px] w-[90%] lg:w-[524px]'>
              Book a Demo Call with us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;