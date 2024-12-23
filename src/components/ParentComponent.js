import React, { useState } from "react";
import Tabs from "./Tabs"; // Import the Tabs component

const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState("TransferTypes");

  return (
    <div>
      {/* Pass activeTab and setActiveTab to Tabs component */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default ParentComponent;
