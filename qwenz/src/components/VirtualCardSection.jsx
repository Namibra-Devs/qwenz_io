import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const details = [
  { logo: "/images/dollar.gif", title: "Unlimited funding with USDT or USDC" },
  { logo: "/images/globe.gif", title: "Global acceptance anywhere" },
  { logo: "/images/secure.gif", title: "Make secure and fast payments" },
  {
    logo: "/images/cash.gif",
    title: "Pay international bills like Spotify, AWS, Zoho and more",
  },
];

const VirtualCardSection = () => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (0.5 - x) * 40;
    const rotateX = (y - 0.5) * 20;

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center pb-8"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Header Section */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-start gap-10"
        data-aos="fade-up"
      >
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-md tracking-tight">
            Qwenz.io <br /> Crypto Virtual Cards
          </h2>
        </div>
        <div className="flex-1 flex justify-end">
          <p className="text-lg lg:text-xl text-gray-200 max-w-sm text-left font-light">
            Manage your crypto assets with elegance and precision.
          </p>
        </div>
      </div>

     {/* Card and Details */}
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 mt-12">
  {/* 3D Card */}
  <motion.div
    ref={cardRef}
    className="w-full lg:w-1/2 perspective-1000 cursor-pointer"
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    animate={{ rotateX: rotation.rotateX, rotateY: rotation.rotateY }}
    transition={{ type: "spring", stiffness: 200, damping: 25 }}
    data-aos="zoom-in-up"
  >
    <motion.img
      src="/images/virtual-card.PNG"
      alt="Virtual Card"
      className="w-full max-w-full rounded-2xl shadow-2xl backdrop-blur-sm 
      border border-white/10 transition-all duration-300 
      hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
      style={{
        filter: `brightness(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.5))`,
        transform: `translateZ(50px)`,
      }}
    />
  </motion.div>

  {/* Details with AOS */}
  <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-0">
    {details.map((item, i) => (
      <div
        key={i}
        data-aos="fade-up"
        data-aos-delay={i * 200}
        className="flex flex-col items-left bg-white/5 backdrop-blur-lg p-5 rounded-xl 
        border border-white/10 shadow-lg text-left transition-all duration-300 
        hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      >
        <div
          className="bg-gradient-to-br from-white/30 to-white/10 w-14 h-14 rounded-full 
        flex items-center justify-center mb-4 shadow-inner"
        >
          <img
            src={item.logo}
            alt={item.title}
            className="w-8 h-8 rounded-full"
          />
        </div>
        <p className="text-white font-semibold text-lg">{item.title}</p>
      </div>
    ))}
  </div>
</div>


      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default VirtualCardSection;
