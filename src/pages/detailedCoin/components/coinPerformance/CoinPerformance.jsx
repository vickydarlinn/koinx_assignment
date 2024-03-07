/* eslint-disable react/prop-types */
import { IoIosInformationCircle } from "react-icons/io";
import { useParams } from "react-router-dom";

const CoinPerformance = ({coinDetail}) => {
  const { coinId } = useParams();
  return (
    <section className="rounded-lg bg-white p-5  " id="performance">
      <h2 className="py-2 text-2xl font-semibold text-[#0E1629]">
        Performance
      </h2>
      <div className=" flex flex-col gap-5 py-4">
        <div className="flex items-center ">
          <div className="flex w-1/6 flex-col items-center gap-2">
            <span className="text-[#45475B]">Today&apos;s Low</span>
            <span className="text-[#45475B]">{coinDetail?.market_data?.low_24h?.usd ||"40,765"}</span>
          </div>
          <div className="relative h-2 grow rounded-lg bg-gradient-to-r from-red-400 to-green-400 ">
            <div className="absolute left-[calc(100%_*_70/_100)] top-[100%] flex flex-col items-center gap-2">
              <div
                className=" h-0 w-0 border border-b-8 border-l-8 border-r-8 border-b-black border-l-transparent border-r-transparent 
            "
              />
              <span className="text-sm text-[#45475B]">$48,275</span>
            </div>
          </div>
          <div className="flex w-1/6 flex-col items-center gap-2">
            <span className="text-[#45475B]">Today&apos;s High</span>
            <span className="text-[#45475B]">${coinDetail?.market_data?.low_24h?.usd|| "47,987"}</span>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex w-1/6 flex-col items-center gap-2">
            <span className="text-[#45475B]">52W&apos;s Low</span>
            <span className="text-[#45475B]">34,897</span>
          </div>
          <div className="relative h-2 grow rounded-lg bg-gradient-to-r from-red-400 to-green-400 ">
            <div className="absolute left-[calc(100%_*_70/_100)] top-[100%] flex flex-col items-center gap-2">
              <div
                className=" h-0 w-0 border border-b-8 border-l-8 border-r-8 border-b-black border-l-transparent border-r-transparent 
            "
              />
              <span className="text-sm text-[#45475B]">$48,275</span>
            </div>
          </div>
          <div className="flex w-1/6 flex-col items-center gap-2">
            <span className="text-[#45475B]">52W&apos;s High</span>
            <span className="text-[#45475B]">59,723.43</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 py-2 font-semibold">
        <span className="text-[#45475B]">Fundamentals </span>
        <span className="text-[#7C7E8C]">
          <IoIosInformationCircle />
        </span>
      </div>
      <div className="flex gap-10 ">
      <div className="grow">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396] capitalize">{coinId} Price</span>
              <span className="text-[#101827]">${coinDetail?.market_data?.current_price?.usd||"55,875"}</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">24h Low / 24h High</span>
              <span className="text-[#101827]">{coinDetail?.market_data?.low_24h?.usd||"56,745 /"}   {coinDetail?.market_data?.high_24h?.usd|| " 67,054"}</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">7d Low/ 7d High</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">Trading Volume</span>
              <span className="text-[#101827]">$162,234,815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">Market Cap Rank</span>
              <span className="text-[#101827]">1</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
        </div>
        <div className="grow">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">Market Cap</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">Market Cap Dominance</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">Volume / Market cap</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">All-Time High</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[#758396]">All-Time Low</span>
              <span className="text-[#101827]">$16815</span>
            </div>
            <div className="my-4 border-t"></div>
          </div>
        </div>{" "}
       
      </div>
    </section>
  );
};

export default CoinPerformance;
