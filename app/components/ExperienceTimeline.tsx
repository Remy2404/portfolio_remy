import pkg from "react-vertical-timeline-component";
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaUsers, FaUserGraduate } from "react-icons/fa";

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
  // FIX: Reordered the experiences array to be in descending chronological order.
  const experiences: ExperienceItem[] = [
    {
      title: "Web Developer",
      company: "KhmerCoders",
      date: "2024 - Present",
      location: "Cambodia , Phnom Penh",
      description: [
        "Contributing to open-source projects and community initiatives",
        "Developing web applications for local businesses",
        " junior developers in the community",
        "Building developer tools and resources",
      ],
      skills: ["TypeScript", "React", "Next.js", "D1"],
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      title: "Self-Directed Developer (Student)",
      company: "Personal Projects & Open Source",
      date: "2022 - Present",
      location: "Cambodia, Phnom Penh",
      description: [
        "Independently designed and developed full-stack applications while pursuing academic studies.",
        "Focused on modern web technologies, AI integration, and user-centered design principles.",
        "Built 15+ personal projects and contributed to open-source community.",
        "Continuously learning and applying new frameworks and best practices.",
      ],
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "AI/ML",
      ],
      icon: <FaLaptopCode className="w-6 h-6" />,
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
      icon: <FaUserGraduate className="w-6 h-6" />,
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
          My journey and the experiences that shaped my development career
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Experience
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
                  <FaUserGraduate className="w-6 h-6 text-white" />
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