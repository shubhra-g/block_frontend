import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold text-primary mb-4">Transfer Successful!</h1>
        <p className="text-gray-300 mb-6">
          Your transaction was completed successfully. You can view the details in your wallet or continue exploring the app.
        </p>
        <Link to="/" className="bg-primary px-6 py-3 rounded-lg text-white hover:bg-secondary transition duration-300">
          Back to Transfer
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
