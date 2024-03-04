import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/:coinId" element={<div>coin details</div>} />
      </Route>
    </Routes>
  );
};

export default App;
