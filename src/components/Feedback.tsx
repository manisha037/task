
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Feedback = () => {
  return (
    <section className='py-20 w-screen  '>
      <div className='w-[95%] mx-auto flex flex-col gap-5 '>
        <h1 className='text-[#3C14EA] md:text-[48px] text-[21px]  w-full font-geologica font-[300]'>Get more out of your Feedback using ai</h1>
        <div className='flex justify-around items-center flex-col gap-5 lg:flex-row'>
          <div className='flex flex-col lg:w-[60%] w-full gap-3'>
            <h1 className='text-[#1B2559] font-medium md:text-[28px] text-[18px] font-geologica'>Onboard For Free</h1>
            <p className='md:text-[22px] text-[15px] md:leading-[32px] leading-[24px]  text-[#1B2559CC]'>Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.</p>
          </div>
          <div className='flex flex-col gap-3 items-center w-full lg:w-auto'>
            <div className='border-[1.5px] border-[#7252FF] rounded-full flex gap-2 justify-center items-center md:h-[52px] h-[36px] w-[90%] lg:w-[524px]'>
              <p className='text-[#4318FF] md:text-[20px] text-[14px] font-medium'>Get Started for Free</p>
              <ArrowOutwardIcon className=' text-[#4318FF] text-[20px]' />
            </div>
            <div className='md:text-[20px] text-[14px] font-bold border-[1.5px] text-white rounded-full justify-center items-center bg-[#4318FF] border-[#7252FF] flex gap-2 md:h-[52px] h-[36px] w-[90%] lg:w-[524px]'>
              Book a Demo Call with us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;