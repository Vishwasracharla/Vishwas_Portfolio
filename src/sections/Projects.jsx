import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
  ];

  return (
    <section id="projects" className="py-20">
      <ScrollAnimation>
        <h2 className="section-title">Projects</h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} delay={index * 0.2} direction="up">
            <div className="card group">
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
              <p className="text-textSecondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-tertiary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects; 