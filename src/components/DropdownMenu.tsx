import logo from "../public/assets/Group 24.png";

const Card = () => (
  <div className="w-[48%] px-5 h-[88px] rounded-xl gap-5 flex items-center shadow-lg shadow-[#0E09581A]">
    <img src={logo} alt="logo" />
    <div className="flex flex-col">
      <p className="font-geologica text-[23px]">Prod ai</p>
      <p className="text-[18px]">Natural Language Interface on Feedback Data</p>
    </div>
  </div>
);

const DropdownMenu = () => {
  return (
    <div
      className="w-[95%] mx-auto border z-50 h-auto border-t-0 bg-white rounded-b-[32px]"
      style={{
        borderColor:
          'linear-gradient(5.27deg, rgba(67, 24, 255, 0.5) -71.27%, rgba(102, 102, 102, 0) 88.34%)',
        borderImageSlice: 1,
      }}
    >
      <div className="w-[90%] mx-auto py-5 flex flex-col flex-wrap gap-8">
        <div className="flex justify-between">
          <Card />
          <Card />
        </div>
        <div className="flex justify-between">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
