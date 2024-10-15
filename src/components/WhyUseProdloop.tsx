

import Card from "./Card";
const WhyUseProdloop = () => {
  return (
    <section className="py-20 w-[95%] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-[#1B2559] text-[36px] font-geologica mb-10 text-left">Why Use Prodloop?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card percentage="1.8 %" mainheading="Reduction in Churn" subheading="Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more."/>
          <Card percentage='17%' mainheading='Increase in CSAT' subheading='Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.'/>
          <Card percentage='5 Days' mainheading='Saved tagging tickets' subheading='Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.'/>
        </div>
      </div>
    </section>
  )
}

export default WhyUseProdloop