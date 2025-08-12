import React, { useState } from 'react';
import { Badge } from 'react-daisyui';
import ProgressBar from '@ramonak/react-progress-bar';
import { Link } from 'react-router';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiTypescript, SiFlutter } from 'react-icons/si';
import { MdOutlineStar, MdOutlineRocketLaunch } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { usePDFDownload } from '../hooks/usePDFDownload';
import ResumePDF from './ResumePDF';


const Resume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPrintView, setShowPrintView] = useState(false);
  const { downloadPDF } = usePDFDownload();

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    setShowPrintView(true);

    // Wait for the PDF component to render
    setTimeout(async () => {
      const success = await downloadPDF('resume-pdf-content', 'Phon_Ramy_Resume.pdf');
      if (success) {
        console.log('PDF downloaded successfully');
      } else {
        console.error('Failed to download PDF');
      }
      setIsDownloading(false);
      setShowPrintView(false);
    }, 1000);
  };
  const skills = [
    {
      name: 'React / Next.js',
      category: 'Frontend',
      level: 95,
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: 'Node.js / Express',
      category: 'Backend',
      level: 90,
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: 'TypeScript / JavaScript',
      category: 'Language',
      level: 93,
      icon: <SiTypescript className="text-blue-400" />,
    },
    {
      name: 'Python / AI/ML',
      category: 'AI/ML',
      level: 88,
      icon: <FaPython className="text-yellow-400" />,
    },
    {
      name: 'React Native / Flutter',
      category: 'Mobile',
      level: 85,
      icon: <SiFlutter className="text-blue-300" />,
    },
    {
      name: 'Docker / AWS',
      category: 'DevOps',
      level: 80,
      icon: <FaAws className="text-orange-400" />,
    },
  ];

  const achievements = [
    {
      number: '10+',
      label: 'Projects Completed',
      icon: <MdOutlineRocketLaunch className="text-pink-400 text-2xl mx-auto" />,
    },
    {
      number: '50+',
      label: 'AI Models Integrated',
      icon: <GiArtificialIntelligence className="text-purple-400 text-2xl mx-auto" />,
    },
    {
      number: '3+',
      label: 'Years Experience',
      icon: <MdOutlineStar className="text-yellow-400 text-2xl mx-auto" />,
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: <HiOutlineBadgeCheck className="text-green-400 text-2xl mx-auto" />,
    },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Open Source',
      period: '2022 - Present',
      description: 'Designed and developed robust applications with focus on user experience. Collaborated on open-source projects, contributing to community-driven development.',
      achievements: ['15+ projects delivered', 'AI integration specialist', 'Community contributor'],
    },
  ];

  const projects = [
    {
      title: 'Telegram Chat Bot (Polymind)',
      tech: 'AI Integration',
      description: 'Powerful multi-modal Telegram bot built with Gemini, DeepSeek, OpenRouter, and over 50 cutting-edge AI models.',
      techStack: ['Python', 'Telegram API', 'AI/ML', 'OpenRouter'],
      github: 'https://github.com/Remy2404',
      demo: 'https://t.me/Gemini_AIAssistBot',
    },
    {
      title: 'Gemini AI chatbot',
      tech: 'AI Chatbot',
      description: 'Built comprehensive AI-powered chatbot with modern architecture and cutting-edge machine learning capabilities.',
      techStack: ['React', 'Node.js', 'Google AI', 'TypeScript'],
      github: 'https://github.com/Remy2404',
      demo: null,
    },
    {
      title: 'Coffee Corner',
      tech: 'Mobile Developments',
      description: 'Cross-platform mobile application for coffee shop management and customer engagement.',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/Remy2404',
      demo: null,
    },
  ];

  const education = [
    {
      degree: 'Bachelor of IT Engineering',
      school: 'Royal University of Phnom Penh',
      period: '2022-2026',
    },
    {
      degree: 'High School Diploma',
      school: 'Chea Sim Samaki High School',
      period: '2022',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[url('/gojo.png')] bg-cover bg-center">
      {/* Floating Particles */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/">
          <button className="glass-card p-3 text-white hover:scale-110 transition-all duration-300 group">
            <svg
              className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </Link>
      </div>

      {/* Download CV Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="glass-card px-4 py-3 text-white hover:scale-110 transition-all duration-300 group flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          )}
          <span className="hidden sm:inline">
            {isDownloading ? "Generating..." : "Download CV"}
          </span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-8 pt-24">
        {/* Increased top padding for fixed buttons */}
        {/* Header Card */}
        <div className="glass-card p-8 mb-6 relative overflow-hidden animate-fadeInUp">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden glass p-1 hover:scale-105 transition-transform duration-300">
                <img
                  src="/profile.png"
                  alt="Phon Ramy"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Header Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="gradient-text">PHON RAMY</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-300 mb-4 font-light">
                Aspiring Full Stack Developer
              </h2>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>rosexmee1122@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>096 206 4081</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <div className="glass px-3 py-1 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available
              </span>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">
                {achievement.number}
              </div>
              <div className="text-sm text-white/70">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills Section */}
            <div className="glass-card p-6 animate-fadeInLeft">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group hover:scale-[1.02] transition-transform duration-300"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white/90 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-300 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mb-1">
                      <Badge color="primary" size="xs" variant="outline">
                        {skill.category}
                      </Badge>
                    </div>
                    <ProgressBar
                      completed={skill.level}
                      bgColor="linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)"
                      baseBgColor="rgba(255,255,255,0.1)"
                      height="10px"
                      isLabelVisible={false}
                      borderRadius="6px"
                      className="group-hover:glow-animation"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass p-4 rounded-lg">
                    <h4 className="text-white font-semibold">{edu.degree}</h4>
                    <p className="text-blue-300">{edu.school}</p>
                    <p className="text-white/60 text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                    clipRule="evenodd"
                  />
                </svg>
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white">English</span>
                  <Badge color="primary" size="sm">
                    Fluent
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Khmer</span>
                  <Badge color="secondary" size="sm">
                    Native
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                About Me
              </h3>
              <p className="text-white/90 leading-relaxed">
                I am a passionate full stack developer and a 4th year IT engineering student dedicated to building
                elegant, high-performance applications for both web and mobile
                platforms. My purpose is to craft digital solutions that are not
                only robust and scalable, but also intuitive and delightful for
                users. With a proven track record of delivering 10+ successful
                projects, I thrive on solving complex problems and embracing new
                technologies.
                <br />
                <br />
                As an active contributor to{" "}
                <a
                  href="https://khmercoder.com/teams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  KhmerCoder
                </a>
                , Cambodia's largest developer community, I collaborate with
                talented peers to push the boundaries of innovation. My
                expertise spans AI-integrated solutions, advanced bot systems,
                and seamless user experiences. I am especially proud of my work
                on{" "}
                <a
                  href="https://t.me/Gemini_AIAssistBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  polymind
                </a>{" "}
                — a multi-modal AI Telegram bot that showcases my commitment to
                practical, impactful technology.
                <br />
                <br />I am always eager to learn, grow, and contribute to
                projects that make a difference.
              </p>
            </div>

            {/* Experience Section */}
            <div className="glass-card p-6 animate-fadeInRight">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h4>
                    <Badge color="accent" className="self-start md:self-center">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-blue-300 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-center gap-2 text-sm text-green-400"
                      >
                        <span>✓</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Projects Section */}
            <div
              className="glass-card p-6 animate-fadeInRight"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Key Projects
              </h3>
              <div className="grid gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="glass p-5 rounded-lg hover:scale-[1.02] transition-transform duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h4>
                      <Badge color="info" variant="outline" size="sm">
                        {project.tech}
                      </Badge>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          color="primary"
                          size="xs"
                          variant="outline"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-400 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-green-300 hover:text-green-400 transition-colors"
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
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Section */}
            <div
              className="glass-card p-6 animate-fadeInRight"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                Let's Connect
              </h3>

              {/* Quick Contact Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <a
                  href="mailto:rosexmee1122@gmail.com"
                  className="glass p-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Email Me</div>
                    <div className="text-white/60 text-sm">Quick response</div>
                  </div>
                </a>

                <a
                  href="tel:+855962064081"
                  className="glass p-4 rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Call Me</div>
                    <div className="text-white/60 text-sm">
                      Available 9-5 GMT+7
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Remy2404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 text-white hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2 group"
                >
                  <svg
                    className="w-6 h-6 group-hover:text-purple-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/phon-ramy-81025a2a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 text-white hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2 group"
                >
                  <svg
                    className="w-6 h-6 group-hover:text-blue-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://phon-ramy-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 text-white hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2 group"
                >
                  <svg
                    className="w-6 h-6 group-hover:text-green-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="glass-card p-6 mt-6 text-center">
          <p className="text-white/80">
            <span className="text-green-400 font-semibold">
              ✅ Seeking Entry-Level Opportunities
            </span>{" "}
            •
            <span className="text-blue-400 font-semibold">
              {" "}
              Open to Full-time Positions
            </span>{" "}
            •
            <span className="text-purple-400 font-semibold">
              {" "}
              Available for Internships
            </span>
          </p>
          <p className="text-white/60 text-sm mt-2">
            Fresh graduate ready to bring passion, technical skills, and eagerness to learn to a dynamic development team.
          </p>
        </div>
      </div>

      {/* Hidden PDF Component for Download */}
      {showPrintView && (
        <div
          id="resume-pdf-content"
          className="fixed -top-[10000px] left-0 w-[794px] min-h-[1123px]"
          style={{
            fontSize: "12px",
            lineHeight: "1.4",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* <ResumePDF /> */}
         <ResumePDF />
        </div>
      )}
    </div>
  );
};

export default Resume;