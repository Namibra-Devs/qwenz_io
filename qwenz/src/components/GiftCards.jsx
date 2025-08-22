import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const giftCards = [
  "/images/gift1.png",
  "/images/gift2.png",
  "/images/gift3.PNG",
  "/images/gift4.png",
  "/images/gift5.webp",
  "/images/gift6.PNG",
  "/images/gift7.PNG",
  "/images/gift8.png",
  "/images/gift9.jpg",
  "/images/gift10.png",
];

// toggle here: "stepper" | "deck"
const MODE = "stepper";

export default function GiftCardsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (MODE === "stepper") {
        // Move one card at a time
        setIndex((prev) => (prev + 1) % giftCards.length);
      } else {
        // Move 4 at a time (deck slide)
        setIndex((prev) => (prev + 4) % giftCards.length);
      }
    }, 2500); // slide every 2.5s
    return () => clearInterval(interval);
  }, []);

  let visibleCards = [];

  if (MODE === "stepper") {
    // Show 4, but shift one-by-one
    for (let i = 0; i < 4; i++) {
      visibleCards.push(giftCards[(index + i) % giftCards.length]);
    }
  } else {
    // Deck mode → 4 at once
    for (let i = 0; i < 4; i++) {
      visibleCards.push(giftCards[(index + i) % giftCards.length]);
    }
  }

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Gift Cards</h2>
        <p className="text-lg text-gray-300">
          Shop, trade, and redeem from a wide variety of digital gift cards instantly.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // triggers new animation
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex gap-6"
          >
            {visibleCards.map((card, i) => (
              <motion.img
                key={i}
                src={card}
                alt={`Gift Card ${i}`}
                className="w-56 h-36 object-cover rounded-xl shadow-lg flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-20">
        {/* Left */}
        <div className="bg-[#111827] rounded-lg flex justify-center p-8">
          <img
            src="/images/phone-mock.webp"
            alt="Phone Mockup"
            className="w-72 md:w-96 object-contain"
          />
        </div>

        {/* Right */}
        <div className="text-left max-w-lg">
          <h3 className="text-3xl font-bold mb-6">Instant Access Anywhere</h3>

          <div className="flex items-start gap-4 mb-4">
            <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
            <p className="text-gray-300">
              Trade gift cards seamlessly with trusted buyers and sellers.
            </p>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
            <p className="text-gray-300">
              Redeem your cards instantly with secure transactions.
            </p>
          </div>

          <p className="text-gray-400 mb-6">
            Enjoy fast, safe, and hassle-free gift card services right from your
            mobile.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#314ce4] to-[#3a59d1] text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
}
