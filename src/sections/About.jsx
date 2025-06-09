import { motion } from 'framer-motion';
// Removed import from src/assets
// import vishwasProfilePic from '../assets/vishwas_circle_frame.png';

const About = () => {
  return (
    <section className="py-20">
      <div className="flex items-center space-x-6 bg-sectionBackground p-6 rounded-lg">
        <img
          src="/vishwas_circle_frame.png"
          alt="Vishwas Racharla"
          className="w-40 h-40 rounded-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2 text-headingText">About</h2>
          <p className="text-bodyText">
            I am a tech enthusiast, foodie, loves to draw portraits
            and a sports enthusiast. Professionally I am a front-end developer
            and learning backend technologies. I'm confident, and working
            on improving my development techniques and also a little bit on designing.
            I'm a self-learner motivated by daily challenges and always looking forward to innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 