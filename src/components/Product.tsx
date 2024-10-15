
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Play } from 'lucide-react'

const Product = () => {
    const arr=Array.from({length:5});
  return (
   <section className='py-20 px-[10vw]'>
    <div className='flex justify-between'>
        <div className='flex flex-col items-center px-3 border border-[#4318FF] rounded-3xl w-[30%] h-[634px] justify-between pt-10 pb-8'>
            <div className="flex flex-col gap-5">
            <h1 className='text-[#1B2559] pl-2 font-[500] text-[28px] tracking-wider'>Product Overview</h1>
            <p className='text-[#1B2559] w-[95%] mx-auto text-left text-[20px] tracking-wider leading-[28px] '>An easy-to-use platform that helps you collect, analyse and generate insights from feedback data</p>
            </div>
            <div className='flex flex-col w-[90%] gap-4'>
                {arr.map(()=>( <div className='flex justify-between'><p className="font-[300] text-[18px] text-[#1B2559CC] tracking-[0.5%]">AI powered speech</p>
                    <p className='text-[#4318FF] font-[300] text-[16px] tracking-[0.5%]'>00:02</p></div>))}
               
            </div>
           <div className='flex items-center gap-2'>
            <p className='text-[#4318FF] font-medium text-[20px] whitespace-nowrap'>Book a Quick Demo </p>
            <ArrowOutwardIcon className=' text-[#4318FF] text-[13px]'/>
           </div>
        </div>
        <div className="w-full md:w-[68%] h-[634px] relative">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Product Overview"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-4 shadow-lg">
                <Play className="text-indigo-600 w-8 h-8" />
              </button>
            </div>
          </div>
    </div>

   </section>
  )
}

export default Product
