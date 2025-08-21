import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from "@assets/images/img1.png";
import img2 from "@assets/images/img2.png";
import img3 from "@assets/images/img3.png";
import img4 from "@assets/images/img4.png";

const ImageParallaxSection = () => {
  
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.img
          src={img1}
          alt="Parallax One"
          style={{ y: y1 }}
          className="w-72 sm:w-80 md:w-[28rem] lg:w-[20rem] rounded-2xl shadow-2xl"
        />
        <motion.img
          src={img2}
          alt="Parallax Two"
          style={{ y: y2 }}
          className="w-72 sm:w-96 md:w-[28rem] lg:w-[50rem] rounded-2xl shadow-2xl"
        />
        <motion.img
          src={img3}
          alt="Parallax Three"
          style={{ y: y3 }}
          className="w-72 sm:w-80 md:w-[28rem] lg:w-[32rem] rounded-2xl shadow-2xl"
        />
      </div>

      <motion.img
        src={img4}
        alt="Parallax Four"
        style={{ y: y4 }}
        className="mt-12 w-full max-w-full h-auto rounded-none lg:rounded-2xl shadow-2xl object-cover"
      />
    </section>
  );
};

export default ImageParallaxSection;
