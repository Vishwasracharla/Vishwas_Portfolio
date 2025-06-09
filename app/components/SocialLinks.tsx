"use client";

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/vishwas-racharla-446aa0231',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/Vishwasracharla',
      label: 'GitHub',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/vishwas_racharla/',
      label: 'Instagram',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 pr-4 z-50"
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-headingText transition-colors duration-300"
          aria-label={link.label}
        >
          <div className="text-2xl">{link.icon}</div>
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks; 