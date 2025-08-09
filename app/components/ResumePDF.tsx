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
          }}>Full Stack Developer</h2>
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
            PROFESSIONAL SUMMARY
          </h3>
          <p style={{
            color: '#374151',
            lineHeight: '1.6'
          }}>
            Passionate full stack developer with expertise in creating robust, scalable applications across web and mobile platforms. 
            Proven track record of 15+ projects demonstrating strong problem-solving abilities and continuous learning mindset. 
            Specialized in developing AI-integrated solutions, sophisticated bot systems, and user-friendly applications that solve complex technical challenges.
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
                <li>• React / Next.js (Advanced)</li>
                <li>• TypeScript / JavaScript (Expert)</li>
                <li>• Responsive Design & UI/UX</li>
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
                <li>• Node.js / Express (Advanced)</li>
                <li>• Python / AI/ML (Proficient)</li>
                <li>• Database Design & Management</li>
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
                <li>• React Native (Proficient)</li>
                <li>• Flutter (Intermediate)</li>
                <li>• Cross-platform Solutions</li>
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
                <li>• Docker / AWS (Intermediate)</li>
                <li>• Git / GitHub</li>
                <li>• CI/CD & Deployment</li>
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
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '8px'
            }}>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937'
              }}>Full Stack Developer</h4>
              <span style={{
                fontSize: '14px',
                color: '#4b5563'
              }}>2022 - Present</span>
            </div>
            <p style={{
              color: '#4b5563',
              fontSize: '14px',
              marginBottom: '8px'
            }}>Open Source</p>
            <p style={{
              color: '#374151',
              fontSize: '14px',
              marginBottom: '8px'
            }}>
              Designed and developed robust applications with focus on user experience. 
              Collaborated on open-source projects, contributing to community-driven development.
            </p>
            <ul style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.5',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li>✓ 35+ projects delivered successfully</li>
              <li>✓ AI integration specialist with 50+ models implemented</li>
              <li>✓ Active community contributor and collaborator</li>
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
          
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#1f2937'
            }}>Telegram Chat Bot (Polymind)</h4>
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
              Powerful multi-modal Telegram bot built with Gemini, DeepSeek, OpenRouter, and over 50 cutting-edge AI models.
            </p>
            <p style={{
              fontSize: '12px',
              color: '#4b5563'
            }}>Tech Stack: Python, Telegram API, AI/ML, OpenRouter</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#1f2937'
            }}>Gemini AI Application</h4>
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
              Built comprehensive AI-powered application with modern architecture and cutting-edge machine learning capabilities.
            </p>
            <p style={{
              fontSize: '12px',
              color: '#4b5563'
            }}>Tech Stack: React, Node.js, Google AI, TypeScript</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h4 style={{
              fontWeight: '600',
              color: '#1f2937'
            }}>Coffee Corner</h4>
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
              Cross-platform mobile application for coffee shop management and customer engagement.
            </p>
            <p style={{
              fontSize: '12px',
              color: '#4b5563'
            }}>Tech Stack: React Native, Node.js, MongoDB, TypeScript</p>
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
                }}>Bachelor of IT Engineering</h4>
                <p style={{
                  color: '#4b5563',
                  fontSize: '14px'
                }}>Royal University of Phnom Penh</p>
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
              ACHIEVEMENTS
            </h3>
            <ul style={{
              fontSize: '14px',
              color: '#374151',
              lineHeight: '1.5',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li>• 15+ Projects Completed</li>
              <li>• 50+ AI Models Integrated</li>
              <li>• 3+ Years Experience</li>
              <li>• 100% Client Satisfaction</li>
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
            <strong>Available for job opportunities</strong> • Seeking Full-time Opportunities • Available for Contract Work
          </p>
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '8px'
          }}>
            Professional resume showcasing technical expertise, project experience, and commitment to continuous growth in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePDF;
