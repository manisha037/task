

import Card from "./Card";
const WhyUseProdloop = () => {
  return (
    <section className="py-20 w-[100vw] ">
      <div className="mx-auto w-[90%]">
        <h2 className="text-[#1B2559] lg:text-[36px] text-[18px]  ml-2 font-geologica lg:mb-10 mb-5 text-left">Why Use Prodloop?</h2>
        <div className="flex-col flex md:flex-row items-center w-full gap-8 ">
          <Card percentage="1.8 %" mainheading="Reduction in Churn" subheading="Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more."/>
          <Card percentage='17%' mainheading='Increase in CSAT' subheading='Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.'/>
          <Card percentage='5 Days' mainheading='Saved tagging tickets' subheading='Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.'/>
        </div>
      </div>
    </section>
  )
}

export default WhyUseProdloop