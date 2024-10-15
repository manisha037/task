import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Feedback = () => {
  return (
  <section className='py-20 w-[92%] mx-auto flex flex-col gap-10'>
    <h1 className='text-[#3C14EA] text-[48px] font-geologica font-[300]'>Get more out of your Feedback using ai</h1>
<div className='flex justify-between'>
    <div className='flex flex-col w-[60%] gap-3'>
        <h1 className='text-[#1B2559] font-medium text-[28px] font-geologica'>Onboard For Free</h1>
        <p className='text-[22px] leading-[32px] text-[#1B2559CC]'>Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.</p>
    </div>
    <div className='flex flex-col gap-3'>
        <div className='border-[1.5px] border-[#7252FF] rounded-full flex gap-2 justify-center items-center  h-[52px] w-[524px]'> <p className='text-[#4318FF] text-[20px] font-medium'>Get Started for Free</p> <ArrowOutwardIcon className=' text-[#4318FF] text-[20px]'/></div>
        < div className='text-[20px] font-bold border-[1.5px] text-white rounded-full  justify-center items-center  bg-[#4318FF] border-[#7252FF] flex gap-2 h-[52px] w-[524px]'>Book a Demo Call with us</div>
    </div>
</div>

  </section>
  )
}

export default Feedback
