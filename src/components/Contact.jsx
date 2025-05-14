const Contact = () => (
  <section id="contact" className="p-10 px-4 bg-gray-50 rounded-lg">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 relative">
        Get in Touch
        <span className="absolute hover:animate-pulse top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h2>
    <div className="max-w-md mx-auto text-center space-y-4">
      <p className="text-lg">
        📧 <strong>Email:</strong>{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=odudarege0619@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          odudarege0619@gmail.com
        </a>
      </p>
      
      {/* Optional: Phone */}
      <p className="text-lg">
        📞 <strong>Phone:</strong>{" "}
        <a href="tel:+2347061032319" className="text-blue-600 hover:underline">
          +2347061032319
        </a>
      </p>

      {/* LinkedIn */}
      <p className="text-lg">
        🔗 <strong>LinkedIn:</strong>{" "}
        <a 
          href="https://www.linkedin.com/in/gbenga-odudare-917287220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          linkedin.com/in/GbengaOdudare
        </a>
      </p>

      {/* GitHub (for devs) */}
      <p className="text-lg">
        <svg className="w-5 h-5 inline mr-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>{" "}
        <strong>GitHub:</strong>{" "}
        <a 
          href="https://github.com/Bensunny0619" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          github.com/Bensunny0619
        </a>
      </p>

    </div>
  </section>
);
export default Contact;