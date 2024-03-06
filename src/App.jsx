import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import DetailedCoin from "./pages/detailedCoin";
// import ComingSoon from "./components/comingSoon";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:coinId" element={<DetailedCoin />} />
        {/* <Route path="fundamentals" element={<ComingSoon />} />
          <Route path="new-insights" element={<ComingSoon />} />
          <Route path="sentiment" element={<ComingSoon />} />
          <Route path="team" element={<ComingSoon />} />
          <Route path="technicals" element={<ComingSoon />} />
          <Route path="tokenomics" element={<ComingSoon />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
