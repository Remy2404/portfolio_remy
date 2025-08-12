import React from 'react';

const ResumePDF: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '32px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px',
          borderBottom: '2px solid #d1d5db',
          paddingBottom: '24px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '8px'
          }}>PHON RAMY</h1>
          <h2 style={{
            fontSize: '20px',
            color: '#4b5563',
            marginBottom: '16px'
          }}>Aspiring Full Stack Developer</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '14px',
            color: '#374151'
          }}>
            <span>📧 rosexmee1122@gmail.com</span>
            <span>📱 096 206 4081</span>
            <span>📍 Phnom Penh, Cambodia</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '8px',
            fontSize: '14px',
            color: '#2563eb'
          }}>
            <span>🔗 github.com/Remy2404</span>
            <span>💼 linkedin.com/in/phon-ramy-81025a2a9</span>
            <span>🌐 phon-ramy-five.vercel.app</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '4px'
          }}>
            ABOUT ME
          </h3>
          <p style={{
            color: '#374151',
            lineHeight: '1.6'
          }}>
            Passionate IT Engineering student and aspiring full stack developer dedicated to crafting elegant, modern solutions. 
            Experienced in building 15+ personal projects across web, mobile, and AI domains. 
            Eager to contribute technical skills and a fresh perspective to innovative teams while continuing to grow professionally.
          </p>
        </div>

        {/* Technical Skills */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '4px'
          }}>
            TECHNICAL SKILLS
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            <div>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px'
              }}>Frontend Development</h4>
              <ul style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.5',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li>• React / Next.js (Proficient)</li>
                <li>• TypeScript / JavaScript (Proficient)</li>
                <li>• HTML/CSS & Responsive Design</li>
              </ul>
            </div>
            <div>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px'
              }}>Backend Development</h4>
              <ul style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.5',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li>• Node.js / Express (Proficient)</li>
                <li>• Python / AI Integration (Intermediate)</li>
                <li>• Database Management (MongoDB, SQL)</li>
              </ul>
            </div>
            <div>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px'
              }}>Mobile Development</h4>
              <ul style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.5',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li>• React Native (Learning)</li>
                <li>• Flutter (Basic)</li>
                <li>• Cross-platform Development</li>
              </ul>
            </div>
            <div>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px'
              }}>DevOps & Tools</h4>
              <ul style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.5',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li>• Docker / Cloud Platforms (Learning)</li>
                <li>• Git / GitHub (Proficient)</li>
                <li>• Deployment & Version Control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '4px'
          }}>
            PROFESSIONAL EXPERIENCE
          </h3>

          {/* Internship Experience */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '4px'
            }}>Internship</h4>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              <em>No formal internship experience yet. Eager to gain hands-on industry experience.</em>
            </p>
          </div>

          {/* Freelance / Contract Experience */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '4px'
            }}>Freelance / Contract</h4>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              marginBottom: '4px'
            }}>
              <em>Available for freelance and contract opportunities.</em>
            </p>
          </div>

          {/* Personal Projects */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '4px'
            }}>Personal Projects</h4>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '8px'
            }}>
              <span style={{
                fontWeight: '600',
                color: '#1f2937'
              }}>Self-Directed Developer</span>
              <span style={{
                fontSize: '14px',
                color: '#4b5563'
              }}>2022 - Present</span>
            </div>
            <p style={{
              color: '#4b5563',
              fontSize: '14px',
              marginBottom: '8px'
            }}>Personal Projects & Open Source Contributions</p>
            <p style={{
              color: '#374151',
              fontSize: '14px',
              marginBottom: '8px'
            }}>
              Independently designed and developed full-stack applications while pursuing academic studies. 
              Focused on modern web technologies, AI integration, and user-centered design principles.
            </p>
            <ul style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.5',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li>✓ Built 15+ personal projects showcasing various technologies</li>
              <li>✓ Integrated 50+ AI models across different applications</li>
              <li>✓ Self-taught modern frameworks and development best practices</li>
            </ul>
          </div>

          {/* Open Source Contributions */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '4px'
            }}>Open Source</h4>
            <ul style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.5',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li>✓ Contributed to open-source community and GitHub projects</li>
              <li>✓ Active on <span style={{ color: '#2563eb' }}>github.com/Remy2404</span></li>
            </ul>
          </div>
        </div>

        {/* Key Projects */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '4px'
          }}>
            KEY PROJECTS
          </h3>
          {/* Personal Projects */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '4px'
            }}>Personal Projects</h4>
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                fontWeight: '600',
                color: '#1f2937'
              }}>Telegram Chat Bot (Polymind)</span>
              <p style={{
                fontSize: '14px',
                color: '#4b5563',
                marginBottom: '4px'
              }}>AI Integration</p>
              <p style={{
                color: '#374151',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                Advanced multi-modal Telegram bot integrating 50+ AI models including Gemini, DeepSeek, and OpenRouter. 
                Features intelligent conversation, document analysis, and collaborative tools in a unified interface.
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4b5563'
              }}>Tech Stack: Python, Telegram API, AI/ML, OpenRouter</p>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                fontWeight: '600',
                color: '#1f2937'
              }}>Gemini AI Application</span>
              <p style={{
                fontSize: '14px',
                color: '#4b5563',
                marginBottom: '4px'
              }}>AI Solution Development</p>
              <p style={{
                color: '#374151',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                Interactive AI-powered web application featuring conversational intelligence, modern React architecture, 
                and responsive design. Demonstrates integration of Google AI with contemporary frontend development.
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4b5563'
              }}>Tech Stack: React, Node.js, Google AI, TypeScript</p>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{
                fontWeight: '600',
                color: '#1f2937'
              }}>Coffee Corner</span>
              <p style={{
                fontSize: '14px',
                color: '#4b5563',
                marginBottom: '4px'
              }}>Mobile Application</p>
              <p style={{
                color: '#374151',
                fontSize: '14px',
                marginBottom: '8px'
              }}>
                Full-stack mobile application for coffee shop management featuring user authentication, 
                product catalog, and customer engagement. Built with modern mobile development practices.
              </p>
              <p style={{
                fontSize: '12px',
                color: '#4b5563'
              }}>Tech Stack: React Native, Node.js, MongoDB, TypeScript</p>
            </div>
          </div>
          {/* Open Source Projects */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '4px'
            }}>Open Source</h4>
            <p style={{
              color: '#374151',
              fontSize: '14px',
              marginBottom: '8px'
            }}>
              Contributor to various open-source projects on GitHub. See more at <span style={{ color: '#2563eb' }}>github.com/Remy2404</span>
            </p>
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '12px',
            borderBottom: '1px solid #d1d5db',
            paddingBottom: '4px'
          }}>
            EDUCATION
          </h3>
          <div style={{ marginBottom: '12px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}>
              <div>
                <h4 style={{
                  fontWeight: '600',
                  color: '#1f2937'
                }}>Bachelor of IT Engineering (Expected 2026)</h4>
                <p style={{
                  color: '#4b5563',
                  fontSize: '14px'
                }}>Royal University of Phnom Penh • Currently in Year 4</p>
              </div>
              <span style={{
                fontSize: '14px',
                color: '#4b5563'
              }}>2022-2026</span>
            </div>
          </div>
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}>
              <div>
                <h4 style={{
                  fontWeight: '600',
                  color: '#1f2937'
                }}>High School Diploma</h4>
                <p style={{
                  color: '#4b5563',
                  fontSize: '14px'
                }}>Chea Sim Samaki High School</p>
              </div>
              <span style={{
                fontSize: '14px',
                color: '#4b5563'
              }}>2022</span>
            </div>
          </div>
        </div>

        {/* Languages & Additional Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '12px',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '4px'
            }}>
              LANGUAGES
            </h3>
            <ul style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.5',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li>• English (Fluent)</li>
              <li>• Khmer (Native)</li>
            </ul>
          </div>
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '12px',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: '4px'
            }}>
              HIGHLIGHTS
            </h3>
            <ul style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.5',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li>• 15+ Personal Projects Portfolio</li>
              <li>• 50+ AI Models Integration Experience</li>
              <li>• Strong Self-Learning Abilities</li>
              <li>• Modern Tech Stack Proficiency</li>
              <li>• Open Source Contributor</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '32px',
          paddingTop: '16px',
          borderTop: '1px solid #d1d5db',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#4b5563'
          }}>
            <strong>Seeking Entry-Level Opportunities</strong> • Open to Full-time Positions • Available for Internships • Ready to Learn & Contribute
          </p>
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '8px'
          }}>
            Fresh graduate ready to bring passion, technical skills, and eagerness to learn to a dynamic development team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePDF;
