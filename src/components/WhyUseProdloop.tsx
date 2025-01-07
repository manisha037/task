import Card from "./Card";

const WhyUseProdloop = () => {
  const cardData = [
    {
      percentage: "3.5 %",
      mainheading: "Reduction in Customer Service costs",
      subheading:
        "Analyse 100% of your customer service calls using AI, quantify and fix the top issue categories which is driving your customer service costs",
    },
    {
      percentage: "8 %",
      mainheading: "Increase in CSAT",
      subheading:
        "Improve customer satisfaction scores by prioritising the top detractors themes and quantify the impact to retention with accuracy",
    },
    {
      percentage: "$ 30K",
      mainheading: "Productivity Savings per month",
      subheading:
        "5 Days/month saved in listening to customer service calls, manually tagging feedback, categorising and doing exploratory analysis",
    },
  ];

  return (
    <section className="py-14 w-[100vw]">
      <div className="mx-auto max-w-[1152px] w-[90%] xl:w-[100%]">
        <h2 className="text-[#1B2559] xl:text-[26px] text-[26px] sm:text-[19px] ml-2 font-geologica lg:mb-10 mb-5 text-left">
          Why Use Prodloop?
        </h2>
        <div className="flex flex-col sm:flex-row xl:gap-[16.94px] justify-between items-center w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              percentage={card.percentage}
              mainheading={card.mainheading}
              subheading={card.subheading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUseProdloop;
