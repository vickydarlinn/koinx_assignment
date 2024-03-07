import { useParams } from "react-router-dom";
import CoinChart from "./components/coinChart";
import joiningPerson from "../../assets/images/joiningPerson.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import CoinAnalysis from "./components/coinAnalysis";
import FeaturedCoins from "../../components/featuredCoins";

const DetailedCoin = () => {
  const { coinId } = useParams();

  return (
    <>
      <nav className="flex gap-2 py-2">
        <span className="text-[#3E5766]">CryptoCurrencies &gt;&gt;</span>
        <span className="text-[#0E1629] font-semibold capitalize">
          {coinId}
        </span>
      </nav>
      <section className="flex gap-2 px-12">
        <section className="w-[calc(100vw-384px)]">
          <CoinAnalysis />
        </section>
        <section className="w-full max-w-96 ">
          <section className="flex flex-col items-center gap-2 bg-[#0052FE] text-white rounded-lg p-6">
            <h1 className="text-center text-xl font-bold">
              Get Started with KoinX <br /> for FREE
            </h1>
            <p className="text-center text-sm">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports
            </p>
            <img className="w-full h-auto  " src={joiningPerson} alt="" />
            <div className="bg-white rounded-md py-2 text-black px-4 mt-2 font-semibold flex gap-2 items-center cursor-pointer">
              <span>Get Started for FREE</span>{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </section>
          <section className="bg-white mt-4 p-5 rounded-lg">
            <h2 className="font-bold text-xl pb-3">Trending Coins (24H)</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between ">
                <div>
                  <span>Icon</span>
                  <span>Ethereum(ETH)</span>
                </div>
                <div className="bg-[#EBF9F4] px-2 py-1 text-[#14B079] rounded-sm flex gap-2 items-center">
                  <span>U</span>
                  <span>8.21%</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <span>Icon</span>
                  <span>Ethereum(ETH)</span>
                </div>
                <div className="bg-[#EBF9F4] px-2 py-1 text-[#14B079] rounded-sm flex gap-2 items-center">
                  <span>U</span>
                  <span>8.21%</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <FeaturedCoins />
    </>
  );
};

export default DetailedCoin;
