import { NavLink } from "react-router-dom";
import CoinSentiment from "../coinSentiment";
import CoinOverView from "../coinOverView";
import CoinPerformance from "../coinPerformance/CoinPerformance";
import CoinTokeNomics from "../coinTokenomics/CoinTokeNomics";

const CoinAnalysis = () => {
  return (
    <section>
      <nav className="flex gap-3">
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Overview
        </NavLink>
        <NavLink
          to="fundamentals"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Fundamentals
        </NavLink>
        <NavLink
          to="new-insights"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          New Insights
        </NavLink>
        <NavLink
          to="sentiment"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Sentient
        </NavLink>
        <NavLink
          to="team"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Team
        </NavLink>
        <NavLink
          to="technicals"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Technicals
        </NavLink>
        <NavLink
          to="tokenomics"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Tokenomics
        </NavLink>
      </nav>
      {/* <CoinSentiment /> */}
      {/* <CoinOverView /> */}
      {/* <CoinPerformance /> */}
      <CoinTokeNomics />
    </section>
  );
};

export default CoinAnalysis;
