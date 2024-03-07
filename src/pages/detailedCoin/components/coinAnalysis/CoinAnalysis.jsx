import CoinSentiment from "../coinSentiment";
import CoinOverView from "../coinOverView";
import CoinPerformance from "../coinPerformance/";
import CoinTokeNomics from "../coinTokenomics/";
import CoinTeam from "../coinTeam/CoinTeam";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CoinAnalysis = () => {
  return (
    <>
      <section className="h-[1000px]"></section>
      <section className=" ">
        <nav
          className={`flex gap-5 bg-black text-white sticky top-0 left-0  w-full z-20`}
        >
          <AnchorLink href="#performance">Performance</AnchorLink>
          <AnchorLink href="#sentiment">Sentiment</AnchorLink>
          <AnchorLink href="#overview">Overview</AnchorLink>
          <AnchorLink href="#tokenomics">Tokenomics</AnchorLink>
          <AnchorLink href="#team">Team</AnchorLink>
        </nav>

        <main className="flex flex-col gap-10">
          <CoinPerformance />
          <CoinSentiment />
          <CoinOverView />
          <CoinTokeNomics />
          <CoinTeam />
        </main>
      </section>
    </>
  );
};

export default CoinAnalysis;

{
  /* <nav className="flex gap-3">
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
</nav> */
}
