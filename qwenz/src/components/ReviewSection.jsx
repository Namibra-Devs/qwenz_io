// src/sections/ReviewSection.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Adeyanju Victor",
    role: "Frequent Trader",
    content: "This app revolutionized how I trade gift cards. The process is seamless and I get the best rates every time!",
    rating: 5,
    topRow: true
  },
  {
    id: 2,
    name: "Paul Amega",
    role: "Tech Enthusiast",
    content: "The security features give me peace of mind. I've traded over $2,000 worth of cards without any issues.",
    rating: 5,
    topRow: true
  },
  {
    id: 3,
    name: "Abdul Hafiz",
    role: "Student",
    content: "As a student, this has been a game-changer for managing my gift cards. The interface is so intuitive!",
    rating: 4,
    topRow: true
  },
  {
    id: 4,
    name: "Adams Jawaad",
    role: "Small Business Owner",
    content: "I use this to manage gift cards for my employees. The bulk options save me so much time each month.",
    rating: 5,
    topRow: false
  },
  {
    id: 5,
    name: "Anthony Gordon",
    role: "Traveler",
    content: "Perfect for converting unwanted gift cards into travel funds. The redemption process takes seconds!",
    rating: 5,
    topRow: false
  },
  {
    id: 6,
    name: "Abubakari Ibrahim",
    role: "App Reviewer",
    content: "Hands down the best gift card platform out there. The customer support is exceptional too.",
    rating: 4,
    topRow: false
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg mx-auto w-full"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start mb-4">
        <div className="bg-blue-500/20 p-2 rounded-lg">
          <Quote className="w-5 h-5 text-blue-400" />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white">{review.name}</h4>
          <p className="text-sm text-blue-100/80">{review.role}</p>
        </div>
      </div>
      <p className="text-gray-200 mb-4 text-sm leading-relaxed">{review.content}</p>
      <StarRating rating={review.rating} />
    </motion.div>
  );
};

export default function ReviewSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const topX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "-20%"]);
  const bottomX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "20%"]);

  const topReviews = reviews.filter(review => review.topRow);
  const bottomReviews = reviews.filter(review => !review.topRow);

  return (
    <section ref={containerRef} className="w-full bg-gradient-to-br from-[#0b1530] to-[#152341] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-blue-100/70 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of satisfied users who have transformed their gift card experience
          </motion.p>
        </div>

        {/* Mobile: Single column layout */}
        <div className="md:hidden space-y-6 mb-8">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Desktop: Top row - moves left */}
        <motion.div 
          className="hidden md:flex gap-6 mb-6"
          style={{ x: topX }}
        >
          {topReviews.map((review) => (
            <div key={review.id} className="flex-shrink-0" style={{ width: "340px" }}>
              <ReviewCard review={review} />
            </div>
          ))}
        </motion.div>

        {/* Desktop: Bottom row - moves right */}
        <motion.div 
          className="hidden md:flex gap-6"
          style={{ x: bottomX }}
        >
          {bottomReviews.map((review) => (
            <div key={review.id} className="flex-shrink-0" style={{ width: "340px" }}>
              <ReviewCard review={review} />
            </div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-blue-100/70">Active Users</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">$10M+</div>
            <div className="text-blue-100/70">Cards Traded</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-blue-100/70">App Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}