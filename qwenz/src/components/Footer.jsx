// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a1128] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-blue-100/60 text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} Qwenz.io
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-blue-100/60 hover:text-white transition-colors duration-300 text-xs md:text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100/60 hover:text-white transition-colors duration-300 text-xs md:text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-blue-100/60 hover:text-white transition-colors duration-300 text-xs md:text-sm">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;