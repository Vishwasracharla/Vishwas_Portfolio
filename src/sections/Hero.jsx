import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section>{/* Assuming this is the main section container */}
      {/* ... existing background or image code ... */}

      <div>{/* Assuming this div wraps your text content */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Your main hero heading text */}
          Your Main Heading
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Your hero subheading or description text */}
          Your Subheading or Description
        </motion.p>
      </div>

      {/* ... rest of the existing hero content ... */}
    </section>
  );
};

export default Hero; 