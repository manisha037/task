
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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
        
        <iframe  className="absolute top-0 left-0 w-full h-full "   src="https://www.youtube.com/embed/IPukuYb9xWw?si=Fcq4SfyT1pBC4wLy" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
       
    </div>

   </section>
  )
}

export default Product
