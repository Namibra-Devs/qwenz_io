import React from "react";

const FeatureBlocks = () => {
  return (
    <section className="w-full flex flex-col pb-8">
      {/* Top Block */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left Dark Side */}
        <div className="bg-gradient-to-br from-blue-900 via-black to-black flex items-center justify-center p-10">
          <img
            src="/images/img2.PNG"
            alt="Crypto Phone"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>

        {/* Right Light Side */}
        <div className="bg-gray-50 flex flex-col justify-center p-10">
          {/* Signs on top of details */}
          <div className="flex gap-4 mb-6">
            <span className="bg-white rounded-full px-6 py-4 drop-shadow-lg text-4xl font-extrabold text-gray-600">
              +
            </span>
            <span className="bg-white rounded-full px-6 py-4 drop-shadow-lg text-4xl font-extrabold text-gray-600">
              -
            </span>
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Buy & Sell Instantly
            </h1>
            <p className="text-gray-600 max-w-md">
              Trade your favorite cryptocurrencies with just one tap. Secure,
              seamless, and lightning fast.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Block */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left Light with Swaps */}
        <div className="bg-white flex flex-col justify-center p-10">
          {/* Signs on top of details */}
          <div className="flex gap-4 mb-6">
            <span className="bg-white rounded-full px-6 py-4 drop-shadow-lg text-3xl font-bold text-gray-700">
              $
            </span>
            <span className="bg-white rounded-full px-6 py-4 drop-shadow-lg text-3xl font-bold text-gray-700">
              ⇄
            </span>
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Instant Swaps
            </h1>
            <p className="text-gray-600 max-w-md">
              Convert between currencies instantly with real-time rates. Simple
              and transparent with no hidden fees.
            </p>
          </div>
        </div>

        {/* Right Green with Phone Mockup */}
        <div className="bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center p-10">
          <img
            src="/images/phones1.PNG"
            alt="Mockup Phone"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
