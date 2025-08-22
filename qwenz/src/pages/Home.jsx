// src/pages/Home.jsx
import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Threads from "../components/Threads";
import ImageParallaxSection from "../components/ImageParallaxSection"; // <-- Import new section
import VirtualCardSection from "../components/VirtualCardSection";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Hero Section with Threads BG */}
      <div className="relative w-full h-screen overflow-hidden">
        <Threads
          color={[1, 1, 1]}
          amplitude={1.2}
          distance={0.8}
          enableMouseInteraction={true}
          className="absolute inset-0 w-full h-full z-0"
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
            Crypto trading made simple
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            The easiest way to buy, sell, send or receive crypto assets like
            Bitcoin, Ethereum, USDT, Tron and more with ease. Fast and secure
            transactions 24/7 with transparent fees.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black/70 text-white px-6 py-4 rounded-2xl shadow-lg hover:text-black relative overflow-hidden group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center gap-3">
                <FaGooglePlay size={40} />
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm uppercase">Get on</span>
                  <span className="text-base sm:text-lg font-semibold">Google Play</span>
                </div>
              </span>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black/70 text-white px-6 py-4 rounded-2xl shadow-lg hover:text-black relative overflow-hidden group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center gap-3">
                <FaApple size={40} />
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm uppercase">Get on</span>
                  <span className="text-base sm:text-lg font-semibold">App Store</span>
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>

     {/* 👇 Parallax Section Below Hero */}
<div className="relative">
  <ImageParallaxSection />
  <VirtualCardSection />
</div>

    </div>
  );
};

export default Home;
