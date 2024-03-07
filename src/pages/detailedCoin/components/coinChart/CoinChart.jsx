/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

import { FaCaretUp } from "react-icons/fa";
import TradingViewWidget from "../tradingVIewWidget";

const CoinChart = ({ data:coinDetail }) => {
  const { coinId } = useParams();

  const timeArr = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];
  



  return (
    <>
      <div className="lg:hidden">
        <AboutCoin coinDetail={coinDetail} />
      </div>
      <section className="rounded-lg  bg-white px-5 py-6">
        <div className="hidden lg:block">
          <AboutCoin coinDetail={coinDetail} />
        </div>
        <div className="flex  items-start gap-6 pb-2">
          <span className="text-2xl font-semibold">${coinDetail?.market_data?.current_price?.usd.toFixed(2) || "47,687"}  </span>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1 rounded-sm px-2 py-[2px] ${coinDetail?.market_data?.price_change_percentage_24h > 0 ?"text-green-600 bg-green-50 ":"text-red-600 bg-red-50 "}`}>
              <FaCaretUp />
              <span>{coinDetail?.market_data?.price_change_percentage_24h||"2.52"}%</span>
            </div>
            <span className="text-sm text-gray-400">(24H)</span>
          </div>
        </div>
        <div className="text-base">&#x20B9; {coinDetail?.market_data?.current_price?.inr || "34,45,600"}</div>
        <hr className="my-5 text-gray-500" />
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="pb-3">{coinDetail?.name} Price chart (USD)</span>
          <div className="flex gap-4 text-sm">
            {timeArr.map((time, idx) => (
              <span
                key={idx}
                className={
                  time === "24H"
                    ? "rounded-2xl bg-[#E2ECFE] px-3 text-[#0241CF]"
                    : "text-[#5C667B]"
                }
              >
                {time}
              </span>
            ))}
          </div>
        </div>
        <div className="h-96">
          <TradingViewWidget coin={coinId} />
        </div>
      </section>
    </>
  );
};

const AboutCoin = ({ coinDetail }) => {
  return (
    <div className="mb-5 flex items-center gap-6 ">
      <div className="flex items-center gap-2">
        <img
          src={
            coinDetail?.image?.large ||
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
          }
          alt=""
          className="h-10 w-10 rounded-[100%]"
        />
        <span className="text-lg font-semibold capitalize">
          {coinDetail?.id || "Bitcoin"}
        </span>
        <span className="text-sm font-semibold uppercase text-[#768396]">
          {coinDetail?.symbol || "BTC"}
        </span>
      </div>
      <div className=" rounded-md bg-[#768396] px-3 py-2 text-sm text-white">
        Rank #{coinDetail?.market_cap_rank || "1"}
      </div>
    </div>
  );
};

export default CoinChart;
