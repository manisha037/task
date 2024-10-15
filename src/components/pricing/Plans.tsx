import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import BoltIcon from '@mui/icons-material/Bolt';
const Card=()=>{
    return(
        <div className="min-h-[600px] py-4 h-auto lg:w-[30%] w-[80%]   px-[40px] flex flex-col justify-around items-center  rounded-[24px] shadow-[0px_0px_15px_5px_rgba(14,9,88,0.1)]">
        <div className='w-[100%]'>   <div className='flex gap-3 w-[85%] items-center'>
   <BoltIcon className='w-[16px] h-[27px]'/>
   <p className='font-medium text-[28px] font-geologica text-[#1B2559] text-left'>Free Plan</p>
   
           </div>
           <hr className=' mt-3 border border-[#00000033]  w-[95%]' />
           </div>
         
           <div className='flex flex-col lg:gap-5 md:gap-3'>
               <div className='flex gap-3 items-center'><CheckCircleOutlineIcon className='w-[24px] h-[24px] text-[#3C14EA]'/>
               <p className='text-[#3C14EA] text-[22px] font-medium leading-[32px]'>Get more natural, real-time conversations - Double Line</p></div>
               <div className='flex gap-3 items-center'><CheckCircleOutlineIcon className='w-[24px] h-[24px] text-[#3C14EA]'/>
               <p className='text-[#3C14EA] text-[22px] font-medium leading-[32px]'>Get more natural - Single Line</p></div>
               <div className='flex gap-3 items-center'><DoNotDisturbAltIcon className='w-[24px] h-[24px] text-[#000000B2]'/>
               <p className='text-[#000000B2] text-[22px] font-medium leading-[32px]'>Get more natural, real-time conversations - Double Line</p></div>
               <div className='flex gap-3 items-center'><DoNotDisturbAltIcon className='w-[24px] h-[24px] text-[#000000B2]'/>
               <p className='text-[#000000B2] text-[22px] font-medium leading-[32px]'>Get more natural, real-time conversations </p></div>
           </div>
   
           <div className='w-[85%] text-white bg-[#4318FF] text-center font-bold text-[20px] cursor-pointer py-[12px] rounded-full '>Get Started</div>
   
            
         </div>
    )
}
const Plans = () => {
  return (
    <div className="py-20 w-[95%] mx-auto  ">
      <p className="font-geologica text-[36px] text-[#1B2559]">Standard Plans</p>
      <div className='flex lg:flex-row  flex-col gap-16 lg:gap-0 justify-around pt-10 '>
        <Card/>
        <Card/>
        <Card/>
      </div>
     
    </div>
  )
}

export default Plans
