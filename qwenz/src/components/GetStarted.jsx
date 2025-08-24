import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  { title: "Create Account", desc: "Sign up quickly and securely." },
  { title: "Verify Identity", desc: "Ensure safe transactions with KYC." },
  { title: "Start Trading", desc: "Buy, sell, and redeem instantly." },
];

export default function GetStartedSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth spring for progress
  const eased = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Step-based progress with easing
  const stepProgress = useTransform(eased, (p) => {
    const stepSize = 1 / (steps.length - 1);
    const stepIndex = Math.floor(p / stepSize);
    const start = stepIndex * stepSize;
    const end = (stepIndex + 1) * stepSize;
    const localT = (p - start) / (end - start);
    const easedT = localT * localT * (3 - 2 * localT); // smoothstep easing
    return stepIndex * stepSize + easedT * stepSize;
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6 lg:px-20"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-16 text-left">Get Started</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Timeline */}
        <div className="relative flex flex-col space-y-12">
          {/* Background Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-700 rounded-full" />

          {/* Animated Line */}
          <motion.div
            style={{ scaleY: stepProgress }}
            className="absolute left-6 top-0 w-1 origin-top bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"
          />

          {steps.map((step, i) => {
            const stepSize = 1 / (steps.length - 1);
            const isActive = useTransform(stepProgress, (p) => p >= i * stepSize);

            return (
              <div key={i} className="relative flex items-start gap-6">
                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  style={{
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive ? "bg-blue-500 ring-4 ring-blue-400/40" : "bg-blue-600"
                    }`}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Texts with animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="max-w-xs"
                >
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Right - Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/phone-mock.webp"
            alt="Phone Mockup"
            className="w-72 md:w-[420px] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
