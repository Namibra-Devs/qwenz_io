import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const logo = "/images/qwenz-logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const location = useLocation();
  const [lastScroll, setLastScroll] = useState(0);

  // Typewriter
  const text = "Qwenz.io";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 100 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayed((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-4 left-0 w-full flex justify-center z-50"
        >
          <div className="w-[90%] md:w-[80%] flex justify-between items-center px-6 py-3 rounded-2xl 
            backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
            
            {/* Logo + Typewriter */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Qwenz Logo" className="w-12 h-12 rounded-full" />
              <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {displayed}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <motion.li key={link.path} whileHover={{ scale: 1.1 }}>
                  <Link 
                    to={link.path}
                    className={`relative px-2 py-1 transition-all ${
                      location.pathname === link.path ? "text-orange-400" : "text-white"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                      w-2 h-2 rounded-full transition-all ${
                        location.pathname === link.path ? "bg-orange-400 scale-100" : "bg-orange-400 scale-0"
                      }`}></span>
                  </Link>
                </motion.li>
              ))}

              {/* Download Button */}
              <motion.a 
                href="#"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                Download
              </motion.a>
            </ul>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && <MobileMenu setOpen={setOpen} />}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
