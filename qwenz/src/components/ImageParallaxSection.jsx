// src/components/ImageParallaxSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

const ImageParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Different parallax effects for each image
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image 1 */}
        <motion.img
          src={img1}
          alt="Parallax One"
          style={{ y: y1 }}
          className="w-96 md:w-[28rem] lg:w-[20rem] rounded-2xl shadow-2xl"
        />

        {/* Image 2 */}
        <motion.img
          src={img2}
          alt="Parallax Two"
          style={{ y: y2 }}
          className="w-96 md:w-[28rem] lg:w-[50rem] rounded-2xl shadow-2xl"
        />

        {/* Image 3 */}
        <motion.img
          src={img3}
          alt="Parallax Three"
          style={{ y: y3 }}
          className="w-96 md:w-[28rem] lg:w-[32rem] rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default ImageParallaxSection;
