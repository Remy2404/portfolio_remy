import React from "react";
import pkg from "react-vertical-timeline-component";
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import "react-vertical-timeline-component/style.min.css";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
  icon: React.ReactNode;
}

const ExperienceTimeline: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      date: "2023 - Present",
      location: "Cambodia , Phnom Penh",
      description: [
        "Developed responsive web applications using React.js and Node.js",
        "Built RESTful APIs and integrated third-party services",
        "Collaborated with international clients on various projects",
        "Implemented modern UI/UX designs with Tailwind CSS",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
    },
    {
      title: "Web Developer",
      company: "KhmerCoders",
      date: "2024 - Present",
      location: "Cambodia , Phnom Penh",
      description: [
        "Contributing to open-source projects and community initiatives",
        "Developing web applications for local businesses",
        "Mentoring junior developers in the community",
        "Building developer tools and resources",
      ],
      skills: ["TypeScript", "React", "Next.js", "PostgreSQL", "GitHub"],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
    {
      title: "IT Engineer",
      company: "Self-taught Developer",
      date: "2022 - 2023",
      location: "Cambodia , Phnom Penh",
      description: [
        "Intensive self-study of programming fundamentals",
        "Built various projects to practice different technologies",
        "Learned through online courses and documentation",
        "Developed problem-solving skills through coding challenges",
      ],
      skills: [
        "Python",
        "JavaScript",
        "Java",
        "HTML/CSS",
        "Git",
        "Docker",
        "React",
        "Node.js",
      ],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
    },
  ];

  const education = [
    {
      title: "Bachelor of Information Technology Engineering",
      institution: "Self-Directed Learning",
      date: "2022 - Present",
      description:
        "Comprehensive study of ITE fundamentals through online resources, documentation, and practical projects.",
      skills: [
        "Data Structures",
        "Algorithms",
        "Software Engineering",
        "Web Development",
        "Database Management",
        "Cloud Computing",
        "Networking",
        "Mobile Development",
      ],
    },
  ];

  return (
    <section className="py-12 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          <span className="gradient-text">Experience & Journey</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          My professional journey and the experiences that shaped my development
          career
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Professional Experience
        </h3>
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.2)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                borderRadius: "16px",
                color: "#fff",
                padding: "1.5rem 1rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.2)",
              }}
              date={exp.date}
              dateClassName="text-white/80 text-sm sm:text-base"
              iconStyle={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
              icon={exp.icon}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {exp.title}
              </h3>
              <h4 className="text-base sm:text-lg text-purple-300 font-semibold">
                {exp.company}
              </h4>
              <p className="text-white/60 mb-2 sm:mb-4 text-sm sm:text-base">
                {exp.location}
              </p>

              <ul className="list-disc list-inside space-y-1 text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Education
        </h3>
        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card mb-4 sm:mb-6 p-4 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {edu.title}
                  </h4>
                  <p className="text-purple-300 font-semibold text-sm sm:text-base">
                    {edu.institution}
                  </p>
                  <p className="text-white/60 mb-2 sm:mb-3 text-xs sm:text-sm">
                    {edu.date}
                  </p>
                  <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
