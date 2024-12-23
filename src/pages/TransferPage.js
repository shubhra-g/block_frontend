import React from "react";
import Tabs from "../components/Tabs";
import SuccessPage from "./SuccessfulPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ParentComponent from "../components/ParentComponent";


const TransferPage = () => {



    const [activeTab,setActiveTab]=useState("Transfer");
    const navigate=useNavigate();

    const handleTransfer=()=>{
        navigate("/success")
    }
  return (
    <div className="px-6 py-10">
       <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-up">
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <select className="bg-transparent outline-none text-white flex-grow">
              <option>Ethereum Mainnet</option>
            </select>
            <input
              type="number"
              placeholder="0.0"
              className="bg-transparent text-white text-right outline-none flex-grow"
            />
            <span className="text-gray-400 ml-2">USDC</span>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">To</label>
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <select className="bg-transparent outline-none text-white flex-grow">
              <option>BNB Chain</option>
            </select>
            <input
              type="text"
              placeholder="Estimated 0.0"
              className="bg-transparent text-white text-right outline-none flex-grow"
              disabled
            />
          </div>
        </div>

        <button className="mt-6 bg-primary w-full py-3 rounded-lg hover:bg-secondary transition duration-300"
          onClick={handleTransfer} >Confirm Transfer
        </button>
      </div>
    </div>
  );
};

export default TransferPage;
