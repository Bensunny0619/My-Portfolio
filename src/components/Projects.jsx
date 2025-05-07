// Import all project images
import howFar1 from '../assets/projects/howfar get-started.jpg';
import howFar2 from '../assets/projects/howfar main.jpg';
import bloomImg from '../assets/projects/bloom-Img.png';
import pdfToolImg from '../assets/projects/pdfannote.png';
import xchangeImg from '../assets/projects/xchange.jpg';
import multipageImg from '../assets/projects/web.png';
import rmpw1 from '../assets/projects/da1.png';
import rmpw2 from '../assets/projects/da2.png';
import rmpw3 from '../assets/projects/da3.png';
import rmpw4 from '../assets/projects/da4.png';
import rmpw5 from '../assets/projects/da5.png';
import rmpw6 from '../assets/projects/da6.png';
import rmpw7 from '../assets/projects/da7.png';
import bloomImg2 from '../assets/projects/bloom-home.jpg';
import bloomImg3 from '../assets/projects/bloom workspace.jpg';
import bloomImg4 from '../assets/projects/bloom get-started.jpg';
import pd1 from '../assets/projects/pd1.png';
import pd2 from '../assets/projects/pd2.png';  
import pd3 from '../assets/projects/pd3.png';  
import pd4 from '../assets/projects/pd4.png';  
import xchangeImg2 from '../assets/projects/xchange login.jpg';


// Updated ProjectCard component that supports multiple images
// Import all project images (keep your existing imports)
// ...

const ProjectCard = ({ title, description, features, tech, link, images }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-100">
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">KEY FEATURES</h4>
            <ul className="space-y-1">
              {features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tech && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {tech.split(', ').map((t, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

      {images && (
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div 
                key={i}
                className="relative group overflow-hidden rounded-lg aspect-video"
              >
                <img
                  src={img}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-16 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 relative">My Projects
        <span className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl my-8 mx-auto">
          Here are some of my recent works. Each project was built with different technologies to solve unique challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="How Far"
          description="A React Native app that tracks user movement using device sensors with real-time analytics."
          features={[
            "Real-time distance tracking",
            "Pedometer integration",
            "Speed calculation",
            "Location history"
          ]}
          tech="React Native, Expo, JavaScript"
          link="https://github.com/Bensunny0619"
          images={[howFar1, howFar2]}
        />

        <ProjectCard
          title="Bloom App"
          description="Productivity mobile app with unified navigation and workspace management."
          features={[
            "Cross-platform (Android/iOS)",
            "Webview integration",
            "Customizable dashboard",
            "Offline capabilities"
          ]}
          tech="React Native, JavaScript, Firebase"
          link="https://github.com/Bensunny0619"
          images={[bloomImg4, bloomImg3, bloomImg2]}
        />

        <ProjectCard
          title="PDF Annotation Tool"
          description="Advanced web-based PDF editor with annotation and digital signature capabilities."
          features={[
            "PDF rendering engine",
            "Multiple annotation tools",
            "Digital signatures",
            "Export with markups"
          ]}
          tech="React, Next.js, Tailwind CSS, PDF.js"
          link="https://github.com/Bensunny0619"
          images={[pdfToolImg, pd1, pd2, pd3, pd4]}
        />

        <ProjectCard
          title="Xchange - Crypto Trading"
          description="Mobile cryptocurrency trading platform with real-time market data."
          features={[
            "Secure authentication",
            "Wallet management",
            "Real-time market data",
            "Transaction history"
          ]}
          tech="React Native, Expo, Firebase, CoinGecko API"
          link="https://github.com/Bensunny0619"
          images={[xchangeImg, xchangeImg2]}
        />

        <ProjectCard
          title="Responsive Website"
          description="High-performance multi-page website with responsive design."
          features={[
            "Mobile-first approach",
            "SEO optimized",
            "Dark/light mode",
            "Contact form"
          ]}
          tech="HTML, Tailwind CSS, JavaScript, Netlify"
          link="https://flourishing-kheer-45a9a6.netlify.app/"
          images={[rmpw1, rmpw2, rmpw5, rmpw6, rmpw7]}
        />
      </div>
    </div>
  </section>
);

export default Projects;