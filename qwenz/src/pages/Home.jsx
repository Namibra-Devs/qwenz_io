import Threads from "../components/common/Threads";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      {/* Threads Fullscreen Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads amplitude={4} distance={0} enableMouseInteraction={true} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-7xl text-center font-bold mb-4 text-white drop-shadow-lg">
          Crypto trading made simple
        </h1>
        <p className="text-sm md:text-md text-gray-300 max-w-2xl mx-auto">
          The easiest way to buy, sell, send or receive crypto assets like
          Bitcoin, Ethereum, USDT, Tron and more with ease. Fast and secure
          transactions 24/7 with transparent fees.
        </p>

        {/* Store Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Google Play */}
          <motion.a
            href="#"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group flex items-center px-6 py-3 rounded-xl border border-white/30 
              bg-white/10 backdrop-blur-md text-white overflow-hidden"
          >
            {/* Hover Animation Overlay */}
            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

            {/* Multicolor Google Play SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              viewBox="0 0 512 512"
              className="mr-3 relative z-10"
            >
              <path
                fill="#34a853"
                d="M325.3 234.3L104.1 13.1c-3.4-3.4-7.6-5.1-11.9-5.1-2.7 0-5.5.6-8.1 2-7.1 3.6-11.6 11-11.6 19.1v454c0 8.1 4.5 15.5 11.6 19.1 2.6 1.3 5.4 2 8.1 2 4.3 0 8.5-1.7 11.9-5.1l221.2-221.2c3.2-3.2 5.1-7.6 5.1-11.9s-1.9-8.6-5.1-11.9z"
              />
              <path
                fill="#fbbc05"
                d="M361.7 270.7L303 229l-37.7 37.7 37.7 37.7 58.7-41.7z"
              />
              <path
                fill="#4285f4"
                d="M104.1 13.1l221.2 221.2-74.3 74.3L104.1 498.9V13.1z"
              />
              <path
                fill="#ea4335"
                d="M361.7 270.7L104.1 498.9c3.4 3.4 7.6 5.1 11.9 5.1 2.7 0 5.5-.6 8.1-2l237.6-168.7z"
              />
            </svg>

            <div className="text-left relative z-10">
              <p className="text-xs leading-tight">GET IT ON</p>
              <p className="text-lg font-bold">Google Play</p>
            </div>
          </motion.a>

          {/* Apple Store */}
          <motion.a
            href="#"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="relative group flex items-center px-6 py-3 rounded-xl border border-white/30 
              bg-white/10 backdrop-blur-md text-white overflow-hidden"
          >
            {/* Hover Animation Overlay */}
            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

            <FaApple className="text-4xl mr-3 relative z-10 text-white" />
            <div className="text-left relative z-10">
              <p className="text-xs leading-tight">Download on the</p>
              <p className="text-lg font-bold">App Store</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
