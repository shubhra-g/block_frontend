import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 animate__animated animate__fadeIn">
        <div className="text-2xl font-bold">🌐 MetaFi</div>
        <nav className="flex items-center space-x-6">
          <a href="#tokenomics" className="hover:text-pink-400 transition animate__animated animate__fadeIn animate__delay-1s">
            Tokenomics
          </a>
          <a href="#docs" className="hover:text-pink-400 transition animate__animated animate__fadeIn animate__delay-1s">
            Docs
          </a>
          <div className="relative group">
            <button className="hover:text-pink-400 transition flex items-center space-x-2 animate__animated animate__fadeIn animate__delay-2s">
              English <span>▼</span>
            </button>
            <div className="absolute bg-gray-700 text-sm rounded shadow-lg hidden group-hover:block mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                English
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                Español
              </a>
            </div>
          </div>
          <button className="bg-[#DB2777] px-4 py-2 rounded-lg hover:bg-pink-600 transition animate__animated animate__fadeIn animate__delay-3s">
            Launch App
          </button>
        </nav>
      </header>

      {/* Video Background Section */}
      <section className="relative w-full h-full">
        <video
          src="https://cdn.dribbble.com/users/5328231/screenshots/19509770/media/4cada985f58b65c4b44f70ca17f63efe.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        
        {/* Hero Section */}
        <main className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20 relative z-10 animate__animated animate__fadeInUp animate__delay-1s">
          {/* Text Content */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Check our <span className="text-[#DB2777]">MetaFi Marketplace</span>
            </h1>
            <p className="text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-2s">
              Try pay-to-play cryptogames for free, trade items from games like CS:GO for crypto, 
              and buy NFTs and assets from Metaverses.
            </p>
            <button className="bg-[#DB2777] px-6 py-3 rounded-lg hover:bg-pink-600 transition animate__animated animate__fadeIn animate__delay-3s">
              Explore Now
            </button>
          </div>

          {/* 3D-Like Decorative Section */}
          <div className="mt-12 lg:mt-0">
            <div className="relative animate__animated animate__fadeIn animate__delay-3s">
              {/* Placeholder for the 3D cube */}
              <div className="w-64 h-64 bg-[#DB2777] rounded-xl shadow-3d-effect transform rotate-45"></div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default LandingPage;
