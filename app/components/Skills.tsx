import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Badge from './Badge';
import GlassCard from './GlassCard';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  badgeVariant: 'primary' | 'secondary' | 'accent' | 'info' | 'warning';
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      badgeVariant: 'primary',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      badgeVariant: 'secondary',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      title: 'Database',
      badgeVariant: 'accent',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'SQLite', level: 70 },
      ]
    },
    {
      title: 'Mobile Development',
      badgeVariant: 'info',
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Flutter', level: 75 },
      ]
    },
    {
      title: 'DevOps & Tools',
      badgeVariant: 'warning',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
      ]
    }
  ];

  const tools = [
    'Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Linux', 'Figma', 'Postman'
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, index) => (
          <GlassCard key={index} className="h-fit">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant={category.badgeVariant}>
                {category.title}
              </Badge>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white/60 text-sm">{skill.level}%</span>
                  </div>
                  <ProgressBar
                    completed={skill.level}
                    bgColor="linear-gradient(135deg, #8b5cf6, #06b6d4)"
                    height="8px"
                    isLabelVisible={false}
                    borderRadius="4px"
                    baseBgColor="rgba(255, 255, 255, 0.1)"
                    animateOnRender={true}
                    transitionDuration="1.5s"
                  />
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Tools & Workflow */}
      <GlassCard className="text-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          <span className="gradient-text">Tools & Workflow</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="hover:bg-white/10 transition-all duration-300"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </GlassCard>

      {/* GitHub Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">GitHub Activity</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=remy2404&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117"
            alt="GitHub Stats"
            className="w-full rounded-lg"
          />
        </GlassCard>
        
        <GlassCard className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Most Used Languages</h3>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=remy2404&show_icons=true&locale=en&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117"
            alt="Top Languages"
            className="w-full rounded-lg"
          />
        </GlassCard>
      </div>
    </section>
  );
};

export default Skills;
