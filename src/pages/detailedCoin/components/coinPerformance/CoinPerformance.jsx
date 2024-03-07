import { IoIosInformationCircle } from "react-icons/io";

const CoinPerformance = () => {
  return (
    <section className="bg-white p-5 rounded-lg  ">
      <h2 className="text-[#0E1629] text-2xl font-semibold py-2">
        Performance
      </h2>
      <div className=" flex flex-col gap-5 py-4">
        <div className="flex items-center ">
          <div className="w-1/6 flex flex-col items-center gap-2">
            <span className="text-[#45475B]">Today&apos;s Low</span>
            <span className="text-[#45475B]">56,876.43</span>
          </div>
          <div className="grow h-2 bg-gradient-to-r from-red-400 to-green-400 rounded-lg relative ">
            <div className="absolute top-[100%] left-[calc(100%_*_70/_100)] flex flex-col items-center gap-2">
              <div
                className=" w-0 h-0 border border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-black 
            "
              />
              <span className="text-[#45475B] text-sm">$48,275</span>
            </div>
          </div>
          <div className="w-1/6 flex flex-col items-center gap-2">
            <span className="text-[#45475B]">Today&apos;s High</span>
            <span className="text-[#45475B]">59,723.43</span>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="w-1/6 flex flex-col items-center gap-2">
            <span className="text-[#45475B]">52W&apos;s Low</span>
            <span className="text-[#45475B]">56,876.43</span>
          </div>
          <div className="grow h-2 bg-gradient-to-r from-red-400 to-green-400 rounded-lg relative ">
            <div className="absolute top-[100%] left-[calc(100%_*_70/_100)] flex flex-col items-center gap-2">
              <div
                className=" w-0 h-0 border border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-black 
            "
              />
              <span className="text-[#45475B] text-sm">$48,275</span>
            </div>
          </div>
          <div className="w-1/6 flex flex-col items-center gap-2">
            <span className="text-[#45475B]">52W&apos;s High</span>
            <span className="text-[#45475B]">59,723.43</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 font-semibold py-2">
        <span className="text-[#45475B]">Fundamentals </span>
        <span className="text-[#7C7E8C]">
          <IoIosInformationCircle />
        </span>
      </div>
      <div className="flex gap-10 ">
        <div className="grow">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
        </div>{" "}
        <div className="grow">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span className="text-[#758396]">Bitcoin Price</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinPerformance;
