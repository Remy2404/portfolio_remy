import React from "react";

const sectionStyle = {
  marginBottom: "32px",
  paddingBottom: "16px",
  borderBottom: "1px solid #e5e7eb",
};
const headingStyle = {
  fontSize: "32px",
  fontWeight: 700,
  color: "#1f2937",
  marginBottom: "4px",
};
const subheadingStyle = {
  fontSize: "18px",
  fontWeight: 600,
  color: "#2563eb",
  marginBottom: "8px",
};
const labelStyle = { fontWeight: 600, color: "#1f2937" };
const listStyle = {
  margin: 0,
  padding: 0,
  listStyle: "none",
  color: "#374151",
  fontSize: "15px",
  lineHeight: 1.7,
};
const bullet = { marginRight: 6 };

const ResumePDF: React.FC = () => (
  <div
    style={{
      maxWidth: 900,
      margin: "0 auto",
      background: "#fff",
      color: "#222",
      fontFamily: "Arial, sans-serif",
      padding: 32,
      fontSize: 15,
      lineHeight: 1.7,
    }}
  >
    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div style={headingStyle}>PHON RAMY</div>
      <div style={{ fontSize: 18, color: "#4b5563", marginBottom: 8 }}>
        Full Stack Developer & AI Enthusiast
      </div>
      <div style={{ color: "#374151", fontSize: 14, marginBottom: 2 }}>
        📧 rosexmee1122@gmail.com | 📱 +855 96 206 4081 | 📍 Phnom Penh,
        Cambodia
      </div>
      <div style={{ color: "#2563eb", fontSize: 14 }}>
        🌐{" "}
        <a
          href="https://phon-ramy-five.vercel.app"
          style={{ color: "#2563eb" }}
        >
          Portfolio
        </a>{" "}
        | 💻{" "}
        <a href="https://github.com/Remy2404" style={{ color: "#2563eb" }}>
          GitHub
        </a>{" "}
        | 🔗{" "}
        <a
          href="https://www.linkedin.com/in/phon-ramy-81025a2a9/"
          style={{ color: "#2563eb" }}
        >
          LinkedIn
        </a>
      </div>
    </div>

    {/* Profile */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>💡 PROFILE</div>
      <div>
        Resourceful 4th-year IT Engineering student with 3+ years of hands-on
        experience in full-stack development and AI integration. Demonstrated
        success in delivering 10+ projects and integrating 50+ AI models into
        production systems. Active contributor to KhmerCoder, Cambodia’s largest
        developer community. Skilled in building scalable web apps, intelligent
        chatbots, and cross-platform mobile solutions.
      </div>
      <div style={{ marginTop: 8 }}>
        <span style={{ fontWeight: 600 }}>Objective:</span> Seeking
        graduate-level software development roles to leverage my technical
        expertise and passion for innovation in impactful projects.
      </div>
    </div>

    {/* Education */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>🎓 EDUCATION</div>
      <div style={labelStyle}>Bachelor of IT Engineering</div> (Expected 2026)
      <div>Royal University of Phnom Penh — Year 4</div>
      <div style={{ fontSize: 13, color: "#6b7280" }}>
        Relevant Coursework: Data Structures, Algorithms, Database Systems,
        Software Engineering, Machine Learning
      </div>
    </div>

    {/* Technical Skills */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>🛠️ TECHNICAL SKILLS</div>
      <ul style={listStyle}>
        <li>
          <span style={bullet}>•</span>
          <b>Languages:</b> TypeScript/JavaScript (93%), Python (88%), Dart
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>Frontend:</b> React.js, Next.js (95%), HTML5, CSS3, Tailwind CSS
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>Backend:</b> Node.js, Express.js (90%), RESTful APIs, GraphQL
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>Databases:</b> MongoDB, PostgreSQL, Firebase
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>Mobile:</b> React Native (85%), Flutter (85%), PWA
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>AI/ML:</b> OpenAI, Google Gemini, DeepSeek (50+ models), Chatbot
          APIs (Telegram, Discord.js)
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>DevOps/Cloud:</b> AWS (80%), Vercel, Netlify, Docker, GitHub
          Actions (CI/CD), Git
        </li>
      </ul>
    </div>

    {/* Project Experience */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>💼 PROJECT EXPERIENCE</div>
      <div style={{ marginBottom: 10 }}>
        <div style={labelStyle}>Polymind – Multi-Modal AI Telegram Bot</div>{" "}
        (2023–Present)
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Lead Developer | Python, Telegram API, AI/ML
        </div>
        <ul style={listStyle}>
          <li>
            <span style={bullet}>•</span>Integrated 50+ advanced AI models
            (Gemini, DeepSeek, OpenRouter) for intelligent conversations
          </li>
          <li>
            <span style={bullet}>•</span>Serves 1,000+ active users with 99.9%
            uptime and sub-second response times
          </li>
          <li>
            <span style={bullet}>•</span>Built multi-model routing, context
            management, and real-time processing
          </li>
          <li>
            <span style={bullet}>•</span>
            <a
              href="https://t.me/Gemini_AIAssistBot"
              style={{ color: "#2563eb" }}
            >
              Live Demo
            </a>
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: 10 }}>
        <div style={labelStyle}>Gemini AI Web Chatbot</div> (2023)
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Full-Stack Developer | React, Node.js, Google AI, TypeScript
        </div>
        <ul style={listStyle}>
          <li>
            <span style={bullet}>•</span>Developed a modern, responsive web
            chatbot with real-time messaging and context-aware conversations
          </li>
          <li>
            <span style={bullet}>•</span>Implemented backend with Google AI
            integration and robust session management
          </li>
        </ul>
      </div>
      <div>
        <div style={labelStyle}>Coffee Corner Mobile App</div> (2022)
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          Android Developer | React Native, MongoDB, TypeScript
        </div>
        <ul style={listStyle}>
          <li>
            <span style={bullet}>•</span>Built an Android app for coffee shop
            management and customer engagement
          </li>
          <li>
            <span style={bullet}>•</span>Features: order management, loyalty
            system, push notifications, offline-first architecture
          </li>
        </ul>
      </div>
    </div>

    {/* Achievements */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>🏆 ACHIEVEMENTS</div>
      <ul style={listStyle}>
        <li>
          <span style={bullet}>•</span>Delivered 10+ successful web and mobile
          projects
        </li>
        <li>
          <span style={bullet}>•</span>Integrated 50+ AI models into production
          applications
        </li>
        <li>
          <span style={bullet}>•</span>100% project success rate—projects met or
          exceeded client expectations
        </li>
        <li>
          <span style={bullet}>•</span>Active contributor and mentor in the{" "}
          <a href="https://khmercoder.com/teams" style={{ color: "#2563eb" }}>
            KhmerCoder community
          </a>
        </li>
      </ul>
    </div>

    {/* Experience */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>💻 EXPERIENCE</div>
      <div style={labelStyle}>Full Stack Developer</div> | Freelance & Open
      Source | 2022–Present
      <ul style={listStyle}>
        <li>
          <span style={bullet}>•</span>Developed and maintained multiple
          web/mobile apps using modern stacks
        </li>
        <li>
          <span style={bullet}>•</span>Collaborated with international teams on
          open-source/community projects
        </li>
        <li>
          <span style={bullet}>•</span>Implemented AI-powered features to
          enhance user engagement
        </li>
        <li>
          <span style={bullet}>•</span>Mentored junior developers through
          KhmerCoder programs
        </li>
      </ul>
    </div>

    {/* Additional Qualifications */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>🌍 ADDITIONAL QUALIFICATIONS</div>
      <ul style={listStyle}>
        <li>
          <span style={bullet}>•</span>
          <b>Languages:</b> English (Fluent), Khmer (Native)
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>Community:</b> KhmerCoder team member, open source contributor,
          tech mentor
        </li>
        <li>
          <span style={bullet}>•</span>
          <b>Certifications:</b> Ongoing self-directed learning in AI/ML and
          cloud computing
        </li>
      </ul>
    </div>

    {/* Career Objectives */}
    <div style={sectionStyle}>
      <div style={subheadingStyle}>🎯 CAREER OBJECTIVES</div>
      <div>Seeking graduate developer roles in innovative companies to:</div>
      <ul style={listStyle}>
        <li>
          <span style={bullet}>•</span>Build impactful products with full-stack
          skills
        </li>
        <li>
          <span style={bullet}>•</span>Contribute to AI-driven and emerging tech
          projects
        </li>
        <li>
          <span style={bullet}>•</span>Collaborate with experienced teams to
          solve complex challenges
        </li>
        <li>
          <span style={bullet}>•</span>Continue professional growth and make
          meaningful contributions
        </li>
      </ul>
      <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
        Availability: Immediate upon graduation (2026) | Open to internships and
        part-time roles
      </div>
    </div>

    {/* Contact */}
    <div style={{ ...sectionStyle, borderBottom: "none" }}>
      <div style={subheadingStyle}>📞 LET'S CONNECT</div>
      <div>
        I’m eager to discuss how my technical skills, project experience, and
        passion for innovation can contribute to your team’s success.
      </div>
      <div style={{ marginTop: 6 }}>📧 rosexmee1122@gmail.com</div>
      <div>📱 +855 96 206 4081 (Available 9–5 GMT+7)</div>
    </div>

    {/* Footer */}
    <div
      style={{
        textAlign: "center",
        fontSize: 13,
        color: "#6b7280",
        marginTop: 24,
      }}
    >
      Ready to bring fresh perspectives, proven technical abilities, and a
      passion for learning to your development team.
    </div>
  </div>
);
export default ResumePDF;
