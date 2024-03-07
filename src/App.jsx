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
      </Route>
    </Routes>
  );
};

export default App;
