const About = () => (
  <section id="about" className="py-16 px-6 md:px-10 bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 relative">
        About Me
        <span className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            I'm a passionate <span className="font-semibold text-blue-600">frontend developer</span> with experience building responsive and user-friendly interfaces using modern technologies. I specialize in <span className="font-semibold">React</span> for web development and <span className="font-semibold">React Native</span> for cross-platform mobile apps.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            I enjoy turning complex problems into simple, beautiful, and intuitive designs. Whether it's developing clean UIs with <span className="font-semibold">Tailwind CSS</span> or building scalable app components in React Native, I focus on writing maintainable code and delivering high-quality user experiences.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            I'm always eager to learn new technologies and collaborate on exciting projects that make an impact.
          </p>
        </div>
        
        {/* Skills Visualization (Optional) */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">My Toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'React Native', 'JavaScript', 'TypeScript', 'Html', 'Bootstrap', 'Tailwind CSS', 'Next.js', 'Node.js', 'Git'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
