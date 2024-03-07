import { NavLink } from "react-router-dom";
import CoinSentiment from "../coinSentiment";
import CoinOverView from "../coinOverView";
import CoinPerformance from "../coinPerformance/";
import CoinTokeNomics from "../coinTokenomics/";
import CoinTeam from "../coinTeam/CoinTeam";

const CoinAnalysis = () => {
  return (
    <>
      <main className="flex flex-col gap-10">
        <CoinPerformance />

        <CoinSentiment />
        <CoinOverView />

        <CoinTokeNomics />
        <CoinTeam />
      </main>
    </>
  );
};

export default CoinAnalysis;
