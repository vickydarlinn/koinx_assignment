import CoinCard from "./components/CoinCard";
const FeaturedCoins = () => {
  return (
    <section className="my-10 bg-white border border-purple-700 flex gap-5">
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <CoinCard />
    </section>
  );
};

export default FeaturedCoins;
