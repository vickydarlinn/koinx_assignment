/* eslint-disable react/prop-types */
const CoinCard = ({coin}) => {
  return (
    <div className="min-w-52 rounded-lg border p-2">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6">
          <img
            src={coin?.large}
            alt=""
          />
        </div>
        <div className="flex items-center">
          <span className="text-sm text-[#202020]">{coin?.symbol}</span>
          <span className="rounded-md bg-[#FDF1ED] px-1 text-[#E96A74]">
            +{coin?.data?.price_change_percentage_24h?.usd?.toFixed(2)}
          </span>
        </div>
      </div>
      <div className=" py-1 text-[#171717]">{coin?.data?.price}</div>

      <div className="flex justify-center py-2">
        {" "}
        <img src={coin?.sparkline||"https://www.coingecko.com/coins/26412/sparkline.svg"} alt="" />
      </div>
    </div>
  );
};

export default CoinCard;
