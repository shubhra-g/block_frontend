import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TransferPage from "./pages/TransferPage";
// import LiquidityPage from "./pages/LiquidityPage";
// import NftPage from "./pages/NFTPage";
import Header from "./components/Header";
import SuccessPage from "./pages/SuccessfulPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Header />
        <Routes>
          <Route path="/" element={<TransferPage />} />
          <Route path="/success" element={<SuccessPage />} /> 
          <Route path="/main" element={<LandingPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
