import { motion } from "framer-motion";

const About = () => (
  <section 
    id="about" 
    className="py-16 px-4 md:px-10 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100 relative"
      >
        About Me
        <span className="absolute hover:animate-pulse top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a passionate <span className="font-semibold text-blue-600">frontend developer</span> with experience building responsive and user-friendly interfaces using modern technologies. I specialize in <span className="font-semibold">React</span> for web development and <span className="font-semibold">React Native</span> for cross-platform mobile apps.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I enjoy turning complex problems into simple, beautiful, and intuitive designs. Whether it's developing clean UIs with <span className="font-semibold">Tailwind CSS</span> or building scalable app components in React Native, I focus on writing maintainable code and delivering high-quality user experiences.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm always eager to learn new technologies and collaborate on exciting projects that make an impact.
          </p>
        </motion.div>
        
        {/* Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300"
        >
          <h3 className="text-xl text-center font-semibold mb-4 text-gray-800 dark:text-gray-100">Technical Expertise</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'React Native', 'Next.js', 'Node.js', 'Express.js'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Databases</h4>
              <div className="flex flex-wrap gap-2">
                {['Supabase', 'Firebase', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Styling</h4>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS', 'Bootstrap'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Expo', 'Vercel', 'Netlify'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;