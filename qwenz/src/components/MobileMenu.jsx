import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

// Parent container animation (stagger children)
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between items
      delayChildren: 0.2, // initial delay
    },
  },
};

// Child items animation
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
};

export default function MobileMenu({ setOpen }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 100% 0%)" }}
      animate={{ clipPath: "circle(150% at 100% 0%)" }}
      exit={{ clipPath: "circle(0% at 100% 0%)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col"
    >
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <X className="w-7 h-7 text-white" />
      </button>

      {/* Menu Content */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-semibold text-white"
      >
        {navLinks.map((link) => (
          <motion.li key={link.path} variants={itemVariants} whileTap={{ scale: 0.9 }}>
            <Link to={link.path} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          </motion.li>
        ))}

        {/* Download Button */}
        <motion.a
          href="#"
          variants={itemVariants}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#314ce4] to-[#3a59d1] text-white font-medium shadow-lg"
        >
          Download
        </motion.a>
      </motion.ul>
    </motion.div>
  );
}
