import React from "react";
import "./Features.css";
import { FaUserPlus, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      icon: <FaUserPlus size={40} />,
      title: "Easy Account Opening",
      description: "Open your bank account in minutes with our streamlined process. No paperwork, no hassle - just a few simple steps to get started.",
      color: "#0047ab"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure Banking",
      description: "Your security is our top priority. We use advanced encryption and multi-factor authentication to keep your data safe.",
      color: "#0047ab"
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support. Our team is always ready to assist you.",
      color: "#0047ab"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="features">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Features
      </motion.h2>
      <motion.div 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="feature-icon"
              whileHover={{ scale: 1.1 }}
              style={{ color: feature.color }}
            >
              {feature.icon}
            </motion.div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Features;
