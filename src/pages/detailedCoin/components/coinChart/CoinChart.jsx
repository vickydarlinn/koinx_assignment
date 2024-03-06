/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TradingViewWidget from "../tradingVIewWidget";

const CoinChart = ({ coin }) => {
  const [coinDetail, setCoinDetail] = useState({});
  const fetchCoinPrice = async (coin) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr%2Cusd&include_24hr_vol=true
      `
    );
    const data = await response.json();
    console.log(data[coin]);
  };
  const fetchCoinDetails = async (coin) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}`
    );
    const data = await response.json();
    setCoinDetail(data);
  };

  useEffect(() => {
    // fetchCoinPrice(coin);
    // fetchCoinDetails(coin);
  }, []);

  return (
    <section className="bg-white">
      <div className="flex gap-2 items-center">
        <img src={coinDetail?.image?.large} alt="" className="w-10 h-10" />
        <span className="uppercase">{coinDetail?.id}</span>
        <span>{coinDetail?.symbol}</span>
        <span>Rank #{coinDetail?.market_cap_rank}</span>
      </div>
      <div className="h-96">
        <TradingViewWidget coin={coin} />
      </div>
    </section>
  );
};

export default CoinChart;
