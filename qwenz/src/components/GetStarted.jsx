// src/sections/GetStartedSection.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { CheckCircle, Smartphone, Gift } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Download the App",
    description: "Install on iOS or Android and create your secure account.",
  },
  {
    icon: <Gift className="w-6 h-6 text-white" />,
    title: "Choose Your Card",
    description: "Pick from a wide variety of supported gift cards worldwide.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: "Trade & Redeem",
    description: "Complete trades safely and redeem instantly in the app.",
  },
];

export default function GetStartedSection() {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const [track, setTrack] = useState({
    startTop: 0, // top (px) of the track inside the container
    total: 0,    // total length from first icon center to last icon center (px)
    segmentCenters: [], // each icon center relative to container top (px)
  });

  const progressSpring = useSpring(0, { stiffness: 120, damping: 18 });

  // Measure positions (first->last icon centers) relative to the container
  const measure = () => {
    if (!containerRef.current || stepRefs.current.length === 0) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerTopAbs = containerRect.top + window.scrollY;

    const centersRel = stepRefs.current.map((el) => {
      const r = el.getBoundingClientRect();
      const centerAbs = r.top + r.height / 2 + window.scrollY;
      return centerAbs - containerTopAbs; // relative to container
    });

    const startTop = centersRel[0];
    const endTop = centersRel[centersRel.length - 1];
    setTrack({
      startTop,
      total: Math.max(endTop - startTop, 0),
      segmentCenters: centersRel,
    });
  };

  useLayoutEffect(() => {
    measure();
    // Re-measure after fonts/images load
    const rAF = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Drive progress by a viewport “anchor” line (e.g., 60% down the screen)
  useEffect(() => {
    let rafId;
    const onScroll = () => {
      if (!containerRef.current || track.total === 0) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const anchorAbs = window.scrollY + window.innerHeight * 0.6;
        const containerTopAbs =
          containerRef.current.getBoundingClientRect().top + window.scrollY;

        // Anchor relative to container
        const anchorRel = anchorAbs - containerTopAbs;

        // Progress height from first center; clamp to [0, total]
        const raw = anchorRel - track.startTop;
        const clamped = Math.max(0, Math.min(raw, track.total));
        progressSpring.set(clamped);
      });
    };

    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [track.startTop, track.total, progressSpring]);

  return (
    <section className="w-full bg-gradient-to-br from-[#0b1530] to-[#152341] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT: Title + Timeline */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Get Started</h2>

          <div ref={containerRef} className="relative">
            {/* Full vertical track (from first to last center) */}
            <div
              className="absolute left-[22px] sm:left-[26px] top-0 w-1 bg-white/10 rounded-full"
              style={{
                top: track.startTop,
                height: track.total,
              }}
            />
            {/* Growing progress line */}
            <motion.div
              className="absolute left-[22px] sm:left-[26px] w-1 rounded-full bg-gradient-to-b from-blue-500 to-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              style={{
                top: track.startTop,
                height: progressSpring, // animated px value
              }}
            />

            <ul className="space-y-10">
              {steps.map((s, i) => {
                const setRef = (el) => (stepRefs.current[i] = el);
                return (
                  <li key={s.title} className="relative">
                    {/* Icon + halo */}
                    <div className="flex items-start">
                      <div ref={setRef} className="relative shrink-0">
                        <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">
                          {s.icon}
                        </div>
                        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md" />
                      </div>

                      {/* Text */}
                      <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="ml-5 sm:ml-6"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {s.title}
                        </h3>
                        <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-md">
                          {s.description}
                        </p>
                      </motion.div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT: Large Image */}
        <div className="flex items-center justify-center">
          <motion.img
            src="/images/phone-mock.webp"
            alt="Get started preview"
            className="w-[88%] sm:w-[70%] lg:w-[80%] max-w-[520px] rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}
