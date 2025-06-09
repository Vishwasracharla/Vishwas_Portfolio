"use client";

import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const education = [
    {
      title: 'Bachelor of Technology (BTech), Computer Science Engineering',
      institution: 'Balaji Institute of Technology and Science',
      period: '2021 – present',
      details: 'CGPA: 7.8',
    },
    {
      title: 'State Board of Intermediate Education - MPC',
      institution: 'Sri Chaitanya Junior College',
      period: '2019 – 2021',
      details: 'Percentage: 84.8%',
    },
    {
      title: 'State Board of Secondary Education - SSC',
      institution: 'Tejaswi High School',
      period: '2019',
      details: 'Percentage: 100%',
    },
  ]

  const workExperience = [
    {
      title: 'Python Full Stack Developer',
      company: 'EduSkills Academy & AICTE',
    },
  ]

  const publications = [
    {
      title: 'Image Caption Generator',
      journal: 'IJFANS International Journal of Food and Nutritional Sciences, Volume 13, Issues 04, 2024 ISSN: Print 2319-1775, Online 2320-7876',
      link: 'https://www.ijfans.org/uploads/paper/0f47744620cb8b949e2d3256602e11e4.pdf',
    },
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="section-title mb-12">Experience</h2>
      
      <div className="flex flex-col space-y-12">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-headingText">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div key={index} className="bg-[#444444] p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {exp.title}
                </h4>
                <p className="section-text mb-2">{exp.company}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-headingText">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-[#444444] p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {edu.title}
                </h4>
                <p className="section-text mb-2">{edu.institution}</p>
                <p className="section-text mb-2">{edu.period}</p>
                <p className="section-text">{edu.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-headingText">Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-[#444444] p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-secondary mb-2">
                  {pub.title}
                </h4>
                <p className="section-text mb-2">Journal/Conference: {pub.journal}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EAEAEA] hover:text-secondary transition-colors section-text flex items-center space-x-2"
                  >
                    <span>View Publication</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 