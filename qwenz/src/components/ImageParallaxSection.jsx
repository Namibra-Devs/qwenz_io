import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageParallaxSection = () => {
  const ref = useRef(null);

  // Track section scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax translations
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Depth scaling (subtle zoom in/out effect)
  const s1 = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const s2 = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const s3 = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const s4 = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Public folder images
  const img1 = "/images/img1.PNG";
  const img2 = "/images/img2.PNG";
  const img3 = "/images/img3.PNG";
  const img4 = "/images/img4.PNG";

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[150vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.img
          src={img1}
          alt="Parallax One"
          style={{ y: y1, scale: s1 }}
          className="w-72 sm:w-80 md:w-[28rem] lg:w-[20rem] rounded-2xl shadow-2xl"
        />
        <motion.img
          src={img2}
          alt="Parallax Two"
          style={{ y: y2, scale: s2 }}
          className="w-72 sm:w-96 md:w-[40rem] lg:w-[50rem] rounded-2xl shadow-2xl"
        />
        <motion.img
          src={img3}
          alt="Parallax Three"
          style={{ y: y3, scale: s3 }}
          className="w-72 sm:w-80 md:w-[40rem] lg:w-[32rem] rounded-2xl shadow-2xl"
        />
      </div>

      <motion.img
        src={img4}
        alt="Parallax Four"
        style={{ y: y4, scale: s4 }}
        className="mt-12 w-full max-w-full h-auto rounded-none lg:rounded-2xl shadow-2xl object-cover"
      />
    </section>
  );
};

export default ImageParallaxSection;
