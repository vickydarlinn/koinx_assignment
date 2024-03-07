import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import CoinCard from "./components/CoinCard";
import { useState, useEffect } from "react";

const FeaturedCoins = () => {
  const [trendingCoins, setTrendingCoins]=useState([])
  const fetchTrendingCoins= async()=>{
    const response= await fetch(`https://api.coingecko.com/api/v3/search/trending`)
    const data= await response.json()
    setTrendingCoins(data.coins)
  }
  useEffect(()=>{
    fetchTrendingCoins()

  },[])
  return (
    <section className=" mt-10 flex flex-col gap-10  bg-white px-10 py-16">
      <div className="py-2">
        <h2 className=" py-2 text-2xl font-semibold text-[#0E1629]">
          You May Also Like
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer  rounded-full bg-white p-3 shadow-md">
            <MdArrowBackIos className="h-auto w-4" />
          </div>

          <div className="  flex gap-5 overflow-auto ">
          {trendingCoins.map((coin)=>(
            <CoinCard key={coin.item.id} coin={coin.item} />)
          )}
          </div>
          <div className="absolute right-0 top-1/2 translate-x-[50%] translate-y-[-50%] cursor-pointer cursor-pointer rounded-full bg-white p-3 shadow-md">
            <MdArrowForwardIos className="h-auto w-4" />
          </div>
        </div>
      </div>
      <div className="py-2">
        <h2 className="py-2 text-2xl font-semibold text-[#0E1629]">
          Trending Coins
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer  rounded-full bg-white p-3 shadow-md">
            <MdArrowBackIos className="h-auto w-4" />
          </div>

          <div className="  flex gap-5 overflow-auto ">
          {trendingCoins.map((coin)=>(
            <CoinCard key={coin.item.id} coin={coin.item} />)
          )}
          </div>
          <div className="absolute right-0 top-1/2 translate-x-[50%] translate-y-[-50%] cursor-pointer cursor-pointer rounded-full bg-white p-3 shadow-md">
            <MdArrowForwardIos className="h-auto w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoins;
