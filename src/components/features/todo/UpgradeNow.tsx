import cupImage from "@/assets/images/cup.png";
export const UpgradeNow = () => {
  return (
    <div className="relative p-8  min-h-[116px] bg-[#CDE53D] border-2 border-warning ">
      <div className="flex items-center gap-6">
        <img src={cupImage} alt="cupImage" />
        <h4 className="text-with-white-shadow text-secondary font-bold text-[18px]">
          Go Pro Upgrade Now
        </h4>
      </div>
      <div className="absolute right-6 -top-[2px] w-[66px] h-[71px] bg-secondary grid place-items-center">
        <h1 className="text-warning">$1</h1>
      </div>
    </div>
  );
};
