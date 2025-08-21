import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import Threads from "../components/Threads";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Threads Background */}
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
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-5xl md:text-8xl font-extrabold text-white drop-shadow-lg"
        >
          Crypto trading made simple
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto"
        >
          The easiest way to buy, sell, send or receive crypto assets like
          Bitcoin, Ethereum, USDT, Tron and more with ease. Fast and secure
          transactions 24/7 with transparent fees.
        </motion.p>

        {/* Store Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto items-center justify-center"
        >
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-black/70 text-white shadow-lg relative overflow-hidden group w-72 sm:w-auto"
          >
            {/* Gradient hover overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            
            <FaGooglePlay size={40} className="relative z-10" />
            <div className="flex flex-col text-left relative z-10">
              <span className="text-xs uppercase">Get on</span>
              <span className="text-lg font-semibold">Google Play</span>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-black/70 text-white shadow-lg relative overflow-hidden group w-72 sm:w-auto"
          >
            {/* Gradient hover overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            
            <FaApple size={40} className="relative z-10" />
            <div className="flex flex-col text-left relative z-10">
              <span className="text-xs uppercase">Get on</span>
              <span className="text-lg font-semibold">App Store</span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
