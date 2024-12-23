import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const [selectedType, setSelectedType] = React.useState("Message"); // State for dropdown menu

  const tabs = ["TransferTypes"]; // Main tab

  // Options for the dropdown menu
  const transferTypes = ["Message", "Tokens"];

  return (
    <div>
      {/* Main Tabs */}
      <div className="flex justify-around mb-6 border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`pb-2 text-sm font-medium transition duration-300 ${
              activeTab === tab
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)} // Use setActiveTab here
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dropdown Menu */}
      {activeTab === "TransferTypes" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Select Transfer Type:
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded-md"
          >
            {transferTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className="mt-4 text-gray-300">
            {selectedType === "Message" && (
              <p>You have selected the <strong>Message</strong> transfer type.</p>
            )}
            {selectedType === "Tokens" && (
              <p>You have selected the <strong>Tokens</strong> transfer type.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;
