import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import Skills from "~/components/Skills";
import ExperienceTimeline from "~/components/ExperienceTimeline";
import Projects from "~/components/Projects";
import ContactForm from "~/components/ContactForm";
import ClientOnly from "~/components/ClientOnly";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Phon Ramy - Full Stack Developer Portfolio" },
    {
      name: "description",
      content:
        "Professional portfolio of Phon Ramy, a passionate full stack developer from Cambodia crafting elegant solutions with modern technologies.",
    },
    {
      name: "keywords",
      content:
        "Phon Ramy, Full Stack Developer, React, Node.js, JavaScript, TypeScript, Portfolio, Cambodia, Web Development",
    },
    {
      property: "og:title",
      content: "Phon Ramy - Full Stack Developer Portfolio",
    },
    {
      property: "og:description",
      content:
        "Professional portfolio showcasing projects and skills in modern web development",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://avatars.githubusercontent.com/u/136186665?v=4",
    },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen" data-theme="glassmorphism">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card px-6 py-3 flex items-center justify-between">
            <div className="text-white font-bold text-xl gradient-text">
              Phon Ramy
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#skills"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Skills Section */}
      {/* 2. Wrap the Skills component */}
      <div id="skills">
        <ClientOnly>
          <Skills />
        </ClientOnly>
      </div>

      {/* Experience Section */}
      <div id="experience">
        <ClientOnly>
          <ExperienceTimeline />
        </ClientOnly>
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="py-10 px-2 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card text-center px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-auto">
                <h3 className="text-xl font-bold text-white mb-2 gradient-text">
                  Phon Ramy
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  Full Stack Developer crafting elegant solutions
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 w-full md:w-auto">
                <a
                  href="https://github.com/remy2404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/phon-ramy-81025a2a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:rosexmee1122@gmail.com"
                  className="text-white hover:text-purple-300 transition-colors"
                  aria-label="Email"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-white/60 text-xs md:text-sm">
              <p>
                &copy; 2024 Phon Ramy. Built with{" "}
                <span role="img" aria-label="love">
                  ❤️
                </span>{" "}
                by Ramy.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
