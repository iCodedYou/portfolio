import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`experience-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 60 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="code-content">
          <div className="code-line">
            <span className="markdown-header"># Professional Experience</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="markdown-text">Building digital solutions and leading teams across various industries.</span>
          </div>
          
          <div className="code-line"></div>
          
          {mockData.experience.map((exp, index) => (
            <div key={exp.id}>
              <div className="code-line" style={{ animationDelay: `${index * 0.5}s` }}>
                <span className="markdown-header">## {exp.company}</span>
              </div>
              
              <div className="code-line">
                <span className="markdown-bold">**Position:**</span>
                <span className="markdown-text"> {exp.position}</span>
              </div>
              
              <div className="code-line">
                <span className="markdown-bold">**Period:**</span>
                <span className="markdown-text"> {exp.period}</span>
              </div>
              
              <div className="code-line">
                <span className="markdown-bold">**Location:**</span>
                <span className="markdown-text"> {exp.location}</span>
              </div>
              
              <div className="code-line"></div>
              
              <div className="code-line">
                <span className="markdown-text">{exp.description}</span>
              </div>
              
              <div className="code-line"></div>
              
              <div className="code-line">
                <span className="markdown-bold">**Key Achievements:**</span>
              </div>
              
              {exp.achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="code-line" style={{ animationDelay: `${index * 0.5 + achIndex * 0.1}s` }}>
                  <span className="markdown-list">- {achievement}</span>
                </div>
              ))}
              
              <div className="code-line"></div>
              
              <div className="code-line">
                <span className="markdown-bold">**Technologies:**</span>
                <span className="markdown-code"> `{exp.technologies.join('`, `')}`</span>
              </div>
              
              <div className="code-line"></div>
              
              <div className="code-line">
                <span className="markdown-divider">---</span>
              </div>
              
              <div className="code-line"></div>
            </div>
          ))}
          
          <div className="code-line">
            <span className="markdown-text">*Ready to bring this experience to your next project! 🚀*</span>
          </div>
        </div>
      </div>
      
      <div className="experience-panel">
        <div className="panel-header">
          <h3>Career Timeline</h3>
          <span className="experience-count">{mockData.experience.length} positions</span>
        </div>
        
        <div className="timeline">
          {mockData.experience.map((exp, index) => (
            <div 
              key={exp.id}
              className={`timeline-item ${selectedExperience === exp.id ? 'selected' : ''}`}
              onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>{exp.position}</h4>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">{exp.location}</span>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-tech">
                  {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                  {exp.technologies.length > 3 && (
                    <span className="tech-more">+{exp.technologies.length - 3}</span>
                  )}
                </div>
                
                {selectedExperience === exp.id && (
                  <div className="experience-details">
                    <h5>🏆 Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                    
                    <h5>🛠️ Technologies Used:</h5>
                    <div className="full-tech-stack">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;