import { useParams } from "react-router-dom";
import joiningPerson from "../../assets/images/joiningPerson.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import CoinAnalysis from "./components/coinAnalysis";
import CoinChart from "./components/coinChart";
import FeaturedCoins from "../../components/featuredCoins";
import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";


const DetailedCoin = () => {
  const { coinId } = useParams();
  const [data, setData]=useState({})
  const [trendingCoins, setTrendingCoins]=useState([])
  const fetchCoinData= async()=>{
    const response= await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&developer_data=false&tickers=false&developer_data=false`)
    const data= await response.json()
    setData(data)
  }
 


  const fetchTrendingCoins= async()=>{
    const response= await fetch(`https://api.coingecko.com/api/v3/search/trending`)
    const data= await response.json()
    setTrendingCoins(data.coins)
  }

  useEffect(()=>{
    fetchCoinData()
    fetchTrendingCoins()

  },[])

  return (
    <>
      <nav className="flex gap-2 py-2 px-12">
        <span className="text-[#3E5766]">CryptoCurrencies &gt;&gt;</span>
        <span className="font-semibold capitalize text-[#0E1629]">
          {coinId}
        </span>
      </nav>
      <section className="flex flex-col gap-2 px-4 md:px-12 lg:flex-row lg:gap-6">
        <section className="lg:w-[calc(100vw-384px)]">
          <CoinChart data={data} />
          <CoinAnalysis data={data} />
        </section>
        <section className=" flex w-full flex-col gap-4 md:flex-row  md:gap-10 lg:block  lg:max-w-96">
          <section className="flex flex-col items-center gap-2 rounded-lg bg-[#0052FE] p-6 text-white md:w-1/2 lg:w-full">
            <h1 className="text-center text-xl font-bold">
              Get Started with KoinX <br /> for FREE
            </h1>
            <p className="text-center text-sm">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports
            </p>
            <img className="h-auto w-full  " src={joiningPerson} alt="" />
            <div className="mt-2 flex cursor-pointer items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-black">
              <span>Get Started for FREE</span>{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </section>
          <section className="rounded-lg bg-white p-5 md:w-1/2 lg:mt-4 lg:w-full">
            <h2 className="pb-3 text-xl font-bold">Trending Coins (24H)</h2>
            <div className="flex flex-col gap-4">
             {
              trendingCoins?.map((coin,index)=>(
                <div className="flex justify-between  " key={index}>
                <div className="w-8 h-8 rounded-full overflow-hidden ">
                  <img src={coin?.item?.large|| "https://assets.coingecko.com/coins/images/26412/large/DexCheck_logo_%282%29.png?1696525488"} alt="" />
                  <span className="uppercase">{coin?.item?.name||"BITCOIN"}({coin?.item?.symbol||"BTC"})</span>
                </div>
                <div className="flex items-center gap-2 rounded-sm bg-[#EBF9F4] px-2 py-1 text-[#14B079]">
                  <span><IoMdArrowDropup />
</span>
                  <span>{coin?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)||"15.4"}%</span>
                </div>
              </div>
              ))}
            </div>
          </section>
        </section>
      </section>
      <FeaturedCoins />
    </>
  );
};

export default DetailedCoin;
