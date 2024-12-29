

import Card from "./Card";
const WhyUseProdloop = () => {
  return (
    <section className="py-14 w-[100vw] ">
      <div className="mx-auto max-w-[1152px] w-[90%]">
        <h2 className="text-[#1B2559] lg:text-[36px] text-[18px]  ml-2 font-geologica lg:mb-10 mb-5 text-left">Why Use Prodloop?</h2>
        <div className="flex-col flex md:flex-row md:justify-around items-center w-full gap-8 ">
          <Card percentage="3.5 %" mainheading="Reduction in Customer Service costs" subheading="Analyse 100% of your customer service calls using AI, quantify and fix the top issue categories which is driving your customer service costs"/>
          <Card percentage='8%' mainheading='Increase in CSAT' subheading='Improve customer satisfaction scores by prioritising the top detractors themes and quantify the impact to retention with accuracy '/>
          <Card percentage='$ 30K' mainheading='Productivity Savings per month ' subheading='5 Days/month saved in listening to customer service calls, manually tagging feedback, categorising and doing exploratory analysis'/>
        </div>
      </div>
    </section>
  )
}

export default WhyUseProdloop