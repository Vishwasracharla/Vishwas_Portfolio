"use client";

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'vishwasracharla@gmail.com',
      link: 'mailto:vishwasracharla@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 6302810814',
      link: 'tel:+916302810814',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Hyderabad, India',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Vishwasracharla',
      link: 'https://github.com/Vishwasracharla',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'vishwas-racharla-446aa0231',
      link: 'https://linkedin.com/in/vishwas-racharla-446aa0231',
    },
  ]

  return (
    <>
      <section className="py-10 flex flex-col items-center">
        <h2 className="section-title mb-4">Resume</h2>
        <a
          href="https://drive.google.com/file/d/1tbxrpfxXfQi1PmnXj8hGXSxsaylesCzs/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 mb-8"
        >
          View Resume
        </a>
      </section>
      <section id="contact" className="py-20">
        <h2 className="section-title mb-12">Contact</h2>
        <div className="flex flex-col space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-text mb-8">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="text-secondary">{info.icon}</div>
                  <div>
                    <p className="text-sm text-textSecondary">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#EAEAEA] hover:text-secondary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#EAEAEA]">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact