import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-primary">CryptoSphere</h1>
      <div className="space-x-4">
        <Link to="/" className="text-sm hover:text-primary transition duration-300">Transfer</Link>
       
      </div>
      <button className="bg-primary px-4 py-2 rounded-lg text-sm hover:bg-secondary transition duration-300">
        Connect Wallet
      </button>
    </div>
  );
};

export default Header;
