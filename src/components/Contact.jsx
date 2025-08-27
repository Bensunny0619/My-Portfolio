import { motion } from "framer-motion";

const Contact = () => (
  <section 
    id="contact" 
    className="p-10 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
  >
    <motion.h2 
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100 relative"
    >
      Get in Touch
      <span className="absolute hover:animate-pulse top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
    </motion.h2>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="max-w-md mx-auto text-center space-y-4 text-gray-700 dark:text-gray-300"
    >
      <p className="text-lg">
        📧 <strong>Email:</strong>{" "}
        <a href="mailto:odudarege0619@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
          odudarege0619@gmail.com
        </a>
      </p>
      
      <p className="text-lg">
        📞 <strong>Phone:</strong>{" "}
        <a href="tel:+2347061032319" className="text-blue-600 dark:text-blue-400 hover:underline">
          +2347061032319
        </a>
      </p>

      <p className="text-lg">
        🔗 <strong>LinkedIn:</strong>{" "}
        <a 
          href="https://www.linkedin.com/in/gbenga-odudare-917287220" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          linkedin.com/in/GbengaOdudare
        </a>
      </p>

      <p className="text-lg">
        <strong>GitHub:</strong>{" "}
        <a 
          href="https://github.com/Bensunny0619" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          github.com/Bensunny0619
        </a>
      </p>
    </motion.div>
  </section>
);

export default Contact;
