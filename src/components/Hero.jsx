import { motion } from "framer-motion";

const Hero = () => (
  <section className="text-center py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
    <motion.h1 
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-bold text-gray-900 dark:text-gray-100"
    >
      Hi, I'm Gbenga Emmanuel Odudare
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-4 font-semibold text-lg text-gray-700 dark:text-gray-300"
    >
      Frontend Developer | React & Mobile (React Native) Enthusiast
    </motion.p>

    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      href="#projects" 
      className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
    >
      View My Work
    </motion.a>
  </section>
);

export default Hero;
