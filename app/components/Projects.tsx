import React from "react";
import GlassCard from "./GlassCard";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Gemini AI Completed",
      description:
        "A comprehensive AI-powered application built with modern JavaScript. Features include intelligent conversation capabilities, responsive design, and optimized performance.",
      image:
        "https://thfvnext.bing.com/th/id/OIP.4NbDnMAiaI6NxSz0Z1iJNAHaEK?w=303&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
      technologies: ["JavaScript", "React", "Express", "AI/LLM"],
      githubUrl: "https://github.com/Remy2404/Gemini-ai-completed-pp",
      stars: 10,
      featured: true,
    },
    {
      title: "Python Complete Course",
      description:
        "A full-stack learning resource for Python programming, covering fundamentals to advanced concepts with practical examples and projects.",
      image:
        "https://thfvnext.bing.com/th/id/OIP.RTQdRj1eX2m0VBsHT8cYSQHaE8?w=260&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
      technologies: ["Python", "Flask", "Data Science"],
      githubUrl: "https://github.com/Remy2404/python_complete_full_course",
      stars: 4,
      featured: true,
    },
    {
      title: "Java Project Collection",
      description:
        "Collection of Java applications demonstrating object-oriented programming principles, design patterns, and enterprise development practices.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop",
      technologies: ["Java"],
      githubUrl: "https://github.com/Remy2404/JAVA_PORJECT",
      stars: 3,
      featured: false,
    },
    {
      title: "AI Resume Analyzer",
      description:
        "An intelligent resume analysis tool that uses AI to provide feedback on resume content, structure, and optimization suggestions.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop",
      technologies: ["Python", "AI/LLM", "React"],
      githubUrl: "https://github.com/Remy2404/ai_resume_analyser",
      featured: false,
    },
    {
      title: "Polymind",
      description:
        "Polymind is a powerful multi-modal Telegram bot built with Gemini, DeepSeek, OpenRouter, and over 50 cutting-edge AI models. It offers seamless conversational intelligence, Mermaid diagram rendering, PDF/DOCX analysis, image generation, and collaborative tools—all in a single bot interface.",
      image:
        "https://cdn5.telesco.pe/file/kiltU8aAw4XqBSMCpEHdBKYO3RaAIqq27e4p41midH7CWP77krzeH_8HzndjhD0JPT7CUbmuCBkFTSRyOc13XrBi5LsW60ILG_vOnb_FYEDAZbpRlYO7w1pNoQNhv5yMjlfTP6l70ZRBBl2W_1_swpe8cqPTXeMLO_rmtnz17__xPNA_UG64wcvY40rM0HlXKzvBMBHPUX9gzB8vsq7HUaB3PSxX-ewSBv5MNY6CtxeYjo0gHmG9lBaV0Y9KFDZ_37a_oliHY9rHufQPSxWRLmrRdZDS4Vc7Fh8Y0xsohfNvFwhc73RzZVbs1TbpG62-mhnu4QFBdGYxYEGsqMy-Bw.jpg",
      technologies: [
        "python",
        "FastAPI",
        "MongoDB",
        "ffmpeg",
        "Telegram Bot API",
        "OpenRouter",
      ],
      githubUrl: "https://github.com/Remy2404/Polymind",
      featured: true,
      stars: 5,
    },
    {
      title: "Coffee Corner",
      description:
        "A full-stack e-commerce application for a coffee shop, featuring product catalog, shopping cart, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop",
      technologies: ["java", "android", "supabase", "python", "fastapi"],
      githubUrl: "https://github.com/Remy2404/coffeecorner",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          A showcase of my recent work and contributions to the developer
          community
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <GlassCard key={index} className="group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {project.stars && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white text-sm">{project.stars}</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-white/70 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <GlassCard key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-white/70 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs text-white/60">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors text-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-16">
        <GlassCard className="inline-block">
          <div className="flex items-center gap-4">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Explore More Projects
              </h4>
              <p className="text-white/70 mb-4">
                Check out my GitHub for more projects and contributions
              </p>
            </div>
            <a
              href="https://github.com/remy2404"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Visit GitHub
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Projects;
