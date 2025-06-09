"use client";

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Image Caption Generator',
      description:
        'Designed an image recognition model using machine learning to describe actions in pictures. Published in IJFANS International Journal, Volume 13, Issue 04, 2024.',
      technologies: ['Machine Learning', 'Python', 'Computer Vision'],
    },
    {
      title: 'Shopinity – Modern E-Commerce Web App',
      description:
        'Full-stack MERN platform with product listings, category-based browsing, cart management, and order placement.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://shopinity-ecommerce-website-v3a8-btf1z6loc.vercel.app/',
    },
    {
      title: 'Personalized Gift Recommendation Platform',
      description:
        'MERN stack web app that uses ChatGPT to suggest personalized gifts based on user preferences through an interactive questionnaire, including product catalog and ordering features.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'ChatGPT API'],
      link: 'https://personalized-gift-recommendation-zithara-ai.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="section-title mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-secondary">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="section-text mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-[#444444] rounded-full text-sm text-[#EAEAEA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects 