import vector from "../public/assets/Vector.svg";

const Card = ({
  percentage,
  mainheading,
  subheading,
}: {
  percentage: string;
  mainheading: string;
  subheading: string;
}) => {
  return (
    <div className="rounded-[24px] shadow-[#0E09581A] mb-4 w-[95%] xl:w-[372.71px]  sm:w-[263px] shadow-[0px_1.56px_33.09px_-2.65px_#0E09581A] flex flex-col justify-around  px-[45.18px] py-[50px] ">
     <div className="gap-1  flex flex-col">
        <h3 className="xl:text-[56.47px] lg:[44px] sm:text-[26px] text-[58px] whitespace-nowrap text-[#3C14EA] font-geologica font-semibold  ">
          {percentage == "8 %" ? (
            <>
              {" "}
              <img
                src={vector}
                alt=""
                className="inline w-[22.59px] h-[22.59px] rotate-180 -mr-3"
              />{" "}
              {percentage}{" "}
            </>
          ) : percentage === "3.5 %" ? (
            <>
              {" "}
              <img
                src={vector}
                alt=""
                className="inline w-[22.59px] h-[22.59px]  -mr-3"
              />{" "}
              {percentage}{" "}
            </>
          ) : (
            <>{percentage}</>
          )}
        </h3>
        <div className="flex flex-col gap-[33.88px]  ">
      <div className="h-[50.82px]"> <p className="xl:text-[19.76px] sm:text-[16px]  text-[23px] font-geologica text-[#1B2559] font-medium ">
          {mainheading}
        </p>
      
     </div> <p className="xl:text-[15.53px] text-[21px] sm:text-[12px] xl:leading-[22.59px] sm:leading-[17px] leading-[28px] text-[#1B2559CC] ">
        {" "}
        {subheading}
      </p> 
      </div>
    </div>

    </div>
  );
};

export default Card;
