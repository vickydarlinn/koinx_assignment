import { useState, useEffect, useRef } from "react";
import CoinSentiment from "../coinSentiment";
import CoinOverView from "../coinOverView";
import CoinPerformance from "../coinPerformance/";
import CoinTokeNomics from "../coinTokenomics/";
import CoinTeam from "../coinTeam/CoinTeam";
import AnchorLink from "react-anchor-link-smooth-scroll";


const CoinAnalysis = ({data:coinDetail}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each component inside main section
    observer.observe(document.getElementById("performance"));
    observer.observe(document.getElementById("sentiment"));
    observer.observe(document.getElementById("overview"));
    observer.observe(document.getElementById("tokenomics"));
    observer.observe(document.getElementById("team"));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = navbarRef.current.getBoundingClientRect();
      if (top <= 50) {
        setIsNavbarSticky(true);
      } else if (top > 50 && top < 200) {
        setIsNavbarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={navbarRef} className="py-2" />
      <nav
        className={`z-50  overflow-auto  flex w-full gap-5 text-black ${isNavbarSticky ? "fixed bg-white shadow-md left-0 right-0 top-0 h-[72px] items-center pl-4 md:pl-12 transition-all duration-300 ease-in-out" : "my-5  border-b border-[#D2E0E6]"}`}
      >
        <AnchorLink
          href="#performance"
          className={activeSection === "performance" ? "text-[#0141CF] border-b-2 pb-2 border-[#0141CF] " : "pb-2"}
        >
          Performance
        </AnchorLink>
        <AnchorLink
          href="#sentiment"
          className={activeSection === "sentiment" ? "text-[#0141CF] border-b-2 pb-2 border-[#0141CF] " : "pb-2"}
        >
          Sentiment
        </AnchorLink>
        <AnchorLink
          href="#overview"
          className={activeSection === "overview" ? "text-[#0141CF] border-b-2 pb-2 border-[#0141CF] " : "pb-2"}
        >
          Overview
        </AnchorLink>
        <AnchorLink
          href="#tokenomics"
          className={activeSection === "tokenomics" ? "text-[#0141CF] border-b-2 pb-2 border-[#0141CF] " : "pb-2"}
        >
          Tokenomics
        </AnchorLink>
        <AnchorLink
          href="#team"
          className={activeSection === "team" ? "text-[#0141CF] border-b-2 pb-2 border-[#0141CF] " : "pb-2"}
        >
          Team
        </AnchorLink>
      </nav>

      <main className="flex flex-col gap-10">
        <CoinPerformance coinDetail={coinDetail} />
        <CoinSentiment coinDetail={coinDetail} />
        <CoinOverView coinDetail={coinDetail} />
        <CoinTokeNomics coinDetail={coinDetail} />
        <CoinTeam  />
      </main>
    </>
  );
};

export default CoinAnalysis;
