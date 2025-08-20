import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/qwenz-logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // detach after 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets" },
    { name: "News", path: "/news" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 flex justify-center transition-all duration-500 pointer-events-none">
      <div
        className={`flex items-center justify-between transition-all duration-500 
        w-full md:w-[90%] max-w-6xl px-6 py-3 rounded-2xl
        pointer-events-auto
        ${scrolled
          ? "mt-4 bg-white/10 backdrop-blur-lg shadow-lg"
          : "mt-0 bg-transparent border-0 shadow-none"
        }`}
      >
        {/* Logo + Typewriter */}
        <Link to="/" className="flex items-center space-x-2">
           <img src={logo} alt="Qwenz.io" className="w-10 h-10 object-contain rounded-full" />
          <span className="font-bold text-lg text-white">
            <Typewriter
              words={["Qwenz.io", "Crypto Made Simple", "Track. Trade. Grow."]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.9,
                rotate: [-5, 6, -5, 0],
                transition: { duration: 0.4 },
              }}
              className="relative group"
            >
              <Link
                to={item.path}
                className="text-white font-medium hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
              {/* Dot Indicator */}
              <span className="absolute left-1/2 -bottom-2 w-2 h-2 rounded-full bg-blue-400 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </motion.div>
          ))}

          {/* Download Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all overflow-hidden"
          >
            <span className="relative z-10">Download</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white/20"
            />
          </motion.a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Circular Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl text-white font-semibold hover:text-blue-400 transition"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Download Button inside mobile menu */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg"
            >
              Download
            </motion.a>

            {/* Close button inside overlay */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
