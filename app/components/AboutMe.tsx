import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="relative py-20 px-4 md:px-8 about-subtle-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start text-center md:text-left">
          <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="about-gradient">
              About Me
            </span>
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-blue-600 to-cyan-500"></div>
        </div>

        {/* Content card  */}
        <div className="glass-card px-6 py-7 md:p-12 rounded-2xl">
          {/* Profile badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-cyan-900/30 border border-blue-500/30 mb-8 ml-2 sm:ml-0">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-blue-300 font-medium">Software Engineer</span>
          </div>

          {/* Content */}
          <div className="space-y-7 md:space-y-6 text-slate-300 text-base md:text-lg leading-[1.75] md:leading-relaxed px-2 sm:px-0">
             <p>
              I am a software engineer with a{' '}
              <span className="text-blue-300 font-medium">Master's degree in Applied Computer Science from Dalhousie University</span>
              , currently building and maintaining production systems used in real business environments.
            </p>

            <p>
              My work spans{' '}
              <span className="text-blue-300 font-medium">frontend, backend, data, and cloud infrastructure</span>
              . I build user facing applications with modern JavaScript, design and implement APIs, model data for real world usage, and take features from early requirement discussions through to deployment and ongoing support. I am comfortable{' '}
              <span className="text-blue-300 font-medium">owning entire workflows</span>
              {' '}rather than working in isolated layers of the stack.
            </p>

            {/* Engineering Philosophy Box */}
            <div className="relative p-5 md:p-6 rounded-xl about-highlight border about-border-color my-10 md:my-8">
              <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full text-sm font-medium text-white">
                Engineering Philosophy
              </div>
              <p className="text-slate-200 leading-[1.7]">
                I care about solid engineering fundamentals. I design systems with{' '}
                <span className="text-blue-300 font-medium">long term maintainability</span>
                {' '}in mind, apply{' '}
                <span className="text-blue-300 font-medium">SOLID principles</span>
                {' '}where they make sense, and rely on{' '}
                <span className="text-blue-300 font-medium">testing</span>
                {' '}to keep production systems stable. I prefer{' '}
                <span className="text-blue-300 font-medium">simple, readable solutions</span>
                {' '}that scale over time instead of overly complex designs.
              </p>
            </div>

            <p>
              I enjoy environments where engineers are{' '}
              <span className="text-blue-300 font-medium">trusted to take ownership</span>
              , solve meaningful problems, and deliver software that people rely on every day. I am{' '}
              <span className="text-blue-300 font-medium">continuously refining my skills</span>
              {' '}and focused on building systems that last.
            </p>

            {/* Tech keywords */}
            <div className="pt-8 mt-8 border-t about-border-color">
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {[
                  'Full-Stack Development',
                  'Cloud Infrastructure',
                  'System Design',
                  'API Architecture',
                  'Data Modeling',
                  'Production Systems',
                  'SOLID Principles',
                  'Testing',
                  'Maintainability',
                  'End-to-End Ownership'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-slate-800/50 border about-border-color hover:border-blue-500/50 hover:bg-blue-900/30 transition-all duration-300 cursor-default text-blue-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-blue-500/40 rounded-tr-2xl"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-blue-400/40 rounded-bl-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;