import React from "react";

type Experience = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
  icon: string; // emoji
};

type Education = {
  title: string;
  institution: string;
  date: string;
  description: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    date: "2023 - Present",
    location: "Cambodia",
    description: [
      "Developed responsive web applications using React.js and Node.js",
      "Built RESTful APIs and integrated third-party services",
      "Collaborated with international clients on various projects",
      "Implemented modern UI/UX designs with Tailwind CSS",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    icon: "💼",
  },
  {
    title: "Web Developer",
    company: "KhmerCoders",
    date: "2024 - Present",
    location: "Cambodia",
    description: [
      "Contributing to open-source projects and community initiatives",
      "Developing web applications for local businesses",
      "Mentoring junior developers in the community",
      "Building developer tools and resources",
    ],
    skills: ["TypeScript", "React", "Next.js", "PostgreSQL", "GitHub"],
    icon: "👥",
  },
  {
    title: "Computer Science Student",
    company: "Self-taught Developer",
    date: "2022 - 2023",
    location: "Cambodia",
    description: [
      "Intensive self-study of programming fundamentals",
      "Built various projects to practice different technologies",
      "Learned through online courses and documentation",
      "Developed problem-solving skills through coding challenges",
    ],
    skills: ["Python", "JavaScript", "Java", "HTML/CSS", "Git"],
    icon: "🎓",
  },
];

const education: Education[] = [
  {
    title: "Bachelor of Computer Science",
    institution: "Self-Directed Learning",
    date: "2022 - Present",
    description:
      "Comprehensive study of computer science fundamentals through online resources, documentation, and practical projects.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Web Development",
    ],
  },
];

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-[1fr_3rem_1fr] md:gap-8">
      {/* Vertical line (desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px bg-white/20 h-full" />

      {/* Content left/right */}
      <div className={`hidden md:block ${isLeft ? "order-1" : "order-3"}`}>
        {isLeft && <ExperienceCard exp={exp} />}
      </div>

      {/* Dot */}
      <div className="order-2 flex items-start justify-center md:justify-center">
        <div className="relative -ml-4 md:ml-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 border border-white/30 shadow-lg shadow-purple-500/20 flex items-center justify-center text-white text-xl">
            <span aria-hidden>{exp.icon}</span>
          </div>
        </div>
      </div>

      <div className={`hidden md:block ${isLeft ? "order-3" : "order-1"}`}>
        {!isLeft && <ExperienceCard exp={exp} />}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden mt-4">
        <ExperienceCard exp={exp} />
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div
      className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20"
      role="group"
    >
      <h3 className="text-white font-bold text-xl mb-1">{exp.title}</h3>
      <p className="text-purple-300 font-semibold mb-1">{exp.company}</p>
      <p className="text-white/60 text-sm mb-4">
        {exp.location} • {exp.date}
      </p>
      <ul className="list-disc list-inside space-y-1 text-white/80 mb-4 text-sm">
        {exp.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="gradient-text">Experience & Journey</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          My professional journey and the experiences that shaped my development
          career
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mb-16 space-y-12">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Professional Experience
        </h3>
        <div className="relative space-y-12 md:space-y-16">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Education
        </h3>
        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card px-4 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                  🎓
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {edu.title}
                  </h4>
                  <p className="text-purple-300 font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-white/60 mb-3">{edu.date}</p>
                  <p className="text-white/80 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white"
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
}
