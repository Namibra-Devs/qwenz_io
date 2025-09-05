// src/sections/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-300"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-400"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "WhatsApp",
      url: "#",
      color: "hover:text-green-400"
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      detail: "info@namibra.io",
      action: "mailto:info@namibra.io"
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      detail: "+233 257 887 464",
      action: "tel:+233257887464"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Visit Us",
      detail: "Accra, Ghana",
      action: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-[#0b1530] to-[#152341] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-blue-100/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions or need assistance? Our team is here to help you with all your gift card needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-blue-100/70 mb-8">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="flex items-start p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">{method.title}</h4>
                    <p className="text-blue-100/70">{method.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`relative group bg-white/5 backdrop-blur-md p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100/80 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-blue-200/40 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-blue-200/40 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-blue-200/40 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-colors duration-300"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;