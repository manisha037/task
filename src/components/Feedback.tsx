import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from "react-router-dom";

const Feedback = () => {
  const feedbackData = {
    heading: "Get more out of your Feedback using ai",
    sections: [
      {
        title: "Onboard For Free",
        description:
          "Supercharge your product and customer experience teams to generate feedback insights in minutes, not hours",
      },
    ],
    actions: [
      {
        text: "Get Started for Free",
        icon: <ArrowOutwardIcon className="text-[#4318FF] text-[16.94px]" />,
        style:
          "border-[1.5px] border-[#7252FF] text-[#4318FF] font-medium rounded-full",
        url: null,
      },
      {
        text: "Book a Demo Call with us",
        url: "https://calendly.com/raja-prodloop/book-a-demo",
        style:
          "text-white bg-[#4318FF] border-[1.5px] border-[#7252FF] font-bold rounded-full",
      },
    ],
  };

  return (
    <section className="py-14 w-screen">
      <div className="w-[95vw] max-w-[1152px] mx-auto flex flex-col gap-5">
        <h1 className="text-[#3C14EA] lg:text-[33.88px] sm:text-[26px] text-[28px] font-geologica font-[300]">
          {feedbackData.heading}
        </h1>
        <div className="flex justify-around items-center flex-col gap-5 sm:flex-row">
          <div className="flex flex-col w-full gap-3">
            {feedbackData.sections.map((section, index) => (
              <div key={index}>
                <h1 className="text-[#1B2559] font-medium lg:text-[19.76px] sm:text-[15px] text-[20px] font-geologica">
                  {section.title}
                </h1>
                <p className="lg:text-[15.53px] text-[16px] sm:text-[14px] md:leading-[32px] lg:leading-[22.59px] text-[#1B2559CC]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 items-center w-full lg:w-auto">
            {feedbackData.actions.map((action, index) => (
              action.url ? (
                <Link key={index} to={action.url}>
                  <div
                    className={`flex justify-center items-center p-2 gap-2 xl:h-[36.94px]  xl:w-[369.88px] ${action.style}`}
                  >
                    <p className="xl:text-[14.12px] md:text-[16px] text-[14px]">{action.text}</p>
                  </div>
                </Link>
              ) : (
                <div
                  key={index}
                  className={`flex justify-center items-center  p-2 gap-2 xl:h-[36.94px] xl:w-[369.88px] ${action.style}`}
                >
                  <p className="xl:text-[14.12px] md:text-[16px] text-[14px]">{action.text}</p>
                  {action.icon}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
