import React, { useState, useEffect, useRef } from 'react';
import { mockData } from '../../data/mockData';
import './SkillsSection.css';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const skillRefs = useRef({});

  useEffect(() => {
    setIsVisible(true);
    
    // Animate skill levels on mount
    const timer = setTimeout(() => {
      const newAnimatedLevels = {};
      
      [...mockData.skills.frontend, ...mockData.skills.backend, ...mockData.skills.tools].forEach(skill => {
        newAnimatedLevels[skill.name] = skill.level;
      });
      
      setAnimatedLevels(newAnimatedLevels);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const SkillBar = ({ skill, index, category }) => {
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentLevel(prev => {
            if (prev >= skill.level) {
              clearInterval(interval);
              return skill.level;
            }
            return prev + 2;
          });
        }, 20);

        return () => clearInterval(interval);
      }, index * 100);

      return () => clearTimeout(timer);
    }, [skill.level, index]);

    const getStars = (level) => {
      const stars = Math.round(level / 20); // Convert to 5-star rating
      return Array.from({ length: 5 }, (_, i) => (
        <div key={i} className={`star ${i < stars ? 'filled' : ''}`}></div>
      ));
    };

    return (
      <div 
        className="skill-item"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="skill-header">
          <div className="skill-left">
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-years">{skill.years} years experience</span>
            </div>
          </div>
          <div className="skill-level-container">
            <span className="skill-level">{currentLevel}%</span>
            <div className="skill-rating">
              {getStars(currentLevel)}
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div 
            className="skill-progress"
            style={{ 
              width: `${currentLevel}%`,
              color: skill.color,
              boxShadow: `0 0 10px ${skill.color}40`
            }}
          ></div>
        </div>
      </div>
    );
  };

  const getTotalSkills = () => {
    return mockData.skills.frontend.length + mockData.skills.backend.length + mockData.skills.tools.length;
  };

  const getAverageLevel = () => {
    const allSkills = [...mockData.skills.frontend, ...mockData.skills.backend, ...mockData.skills.tools];
    const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / allSkills.length);
  };

  const getTotalExperience = () => {
    const allSkills = [...mockData.skills.frontend, ...mockData.skills.backend, ...mockData.skills.tools];
    const maxYears = Math.max(...allSkills.map(skill => skill.years));
    return maxYears;
  };

  return (
    <div className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="code-content">
          <div className="code-line">
            <span className="keyword">interface</span>
            <span className="variable"> Developer </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">name</span>
            <span className="punctuation">: </span>
            <span className="type">string</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">skills</span>
            <span className="punctuation">: </span>
            <span className="type">SkillSet</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">experience</span>
            <span className="punctuation">: </span>
            <span className="type">number</span>
            <span className="punctuation">;</span>
            <span className="comment"> // years</span>
          </div>
          
          <div className="code-line">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">interface</span>
            <span className="variable"> SkillSet </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">frontend</span>
            <span className="punctuation">: </span>
            <span className="type">Skill</span>
            <span className="punctuation">[];</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">backend</span>
            <span className="punctuation">: </span>
            <span className="type">Skill</span>
            <span className="punctuation">[];</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">tools</span>
            <span className="punctuation">: </span>
            <span className="type">Skill</span>
            <span className="punctuation">[];</span>
          </div>
          
          <div className="code-line">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="keyword">type</span>
            <span className="variable"> Skill </span>
            <span className="operator">= </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">name</span>
            <span className="punctuation">: </span>
            <span className="type">string</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">level</span>
            <span className="punctuation">: </span>
            <span className="type">number</span>
            <span className="punctuation">;</span>
            <span className="comment"> // 0-100</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">years</span>
            <span className="punctuation">: </span>
            <span className="type">number</span>
            <span className="punctuation">;</span>
            <span className="comment"> // experience</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">icon</span>
            <span className="punctuation">: </span>
            <span className="type">string</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">color</span>
            <span className="punctuation">: </span>
            <span className="type">string</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// 🧠 My Technical Skills & Expertise</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">const</span>
            <span className="variable"> mySkills</span>
            <span className="punctuation">: </span>
            <span className="type">SkillSet</span>
            <span className="operator"> = </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">frontend</span>
            <span className="punctuation">: [</span>
          </div>
          
          {mockData.skills.frontend.map((skill, index) => (
            <div key={skill.name} className="code-line indent-2" style={{ animationDelay: `${1 + index * 0.1}s` }}>
              <span className="punctuation">{'{ '}</span>
              <span className="property">name</span>
              <span className="punctuation">: </span>
              <span className="string">"{skill.name}"</span>
              <span className="punctuation">, </span>
              <span className="property">level</span>
              <span className="punctuation">: </span>
              <span className="number">{skill.level}</span>
              <span className="punctuation">, </span>
              <span className="property">years</span>
              <span className="punctuation">: </span>
              <span className="number">{skill.years}</span>
              <span className="punctuation"> }</span>
              {index < mockData.skills.frontend.length - 1 && <span className="punctuation">,</span>}
            </div>
          ))}
          
          <div className="code-line indent-1">
            <span className="punctuation">],</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">backend</span>
            <span className="punctuation">: [</span>
          </div>
          
          {mockData.skills.backend.map((skill, index) => (
            <div key={skill.name} className="code-line indent-2" style={{ animationDelay: `${2 + index * 0.1}s` }}>
              <span className="punctuation">{'{ '}</span>
              <span className="property">name</span>
              <span className="punctuation">: </span>
              <span className="string">"{skill.name}"</span>
              <span className="punctuation">, </span>
              <span className="property">level</span>
              <span className="punctuation">: </span>
              <span className="number">{skill.level}</span>
              <span className="punctuation">, </span>
              <span className="property">years</span>
              <span className="punctuation">: </span>
              <span className="number">{skill.years}</span>
              <span className="punctuation"> }</span>
              {index < mockData.skills.backend.length - 1 && <span className="punctuation">,</span>}
            </div>
          ))}
          
          <div className="code-line indent-1">
            <span className="punctuation">],</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">tools</span>
            <span className="punctuation">: [</span>
          </div>
          
          {mockData.skills.tools.map((skill, index) => (
            <div key={skill.name} className="code-line indent-2" style={{ animationDelay: `${3 + index * 0.1}s` }}>
              <span className="punctuation">{'{ '}</span>
              <span className="property">name</span>
              <span className="punctuation">: </span>
              <span className="string">"{skill.name}"</span>
              <span className="punctuation">, </span>
              <span className="property">level</span>
              <span className="punctuation">: </span>
              <span className="number">{skill.level}</span>
              <span className="punctuation">, </span>
              <span className="property">years</span>
              <span className="punctuation">: </span>
              <span className="number">{skill.years}</span>
              <span className="punctuation"> }</span>
              {index < mockData.skills.tools.length - 1 && <span className="punctuation">,</span>}
            </div>
          ))}
          
          <div className="code-line indent-1">
            <span className="punctuation">]</span>
          </div>
          
          <div className="code-line">
            <span className="punctuation">{'}'}</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// Constantly learning and evolving! 📚✨</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">export default</span>
            <span className="variable"> mySkills</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>
      
      <div className="skills-panel">
        <div className="panel-header">
          <h3>💻 Technical Skills</h3>
          <span className="skills-count">
            {getTotalSkills()} skills
          </span>
        </div>
        
        <div className="skills-categories">
          <div className="skills-summary">
            <h4 className="summary-title">📊 Skills Overview</h4>
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="summary-value">{getTotalSkills()}</span>
                <span className="summary-label">Total Skills</span>
              </div>
              <div className="summary-stat">
                <span className="summary-value">{getAverageLevel()}%</span>
                <span className="summary-label">Avg Level</span>
              </div>
              <div className="summary-stat">
                <span className="summary-value">{getTotalExperience()}+</span>
                <span className="summary-label">Years Exp</span>
              </div>
              <div className="summary-stat">
                <span className="summary-value">3</span>
                <span className="summary-label">Categories</span>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>🎨 Frontend Development</h4>
            <div className="skills-grid">
              {mockData.skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} category="frontend" />
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h4>⚙️ Backend Development</h4>
            <div className="skills-grid">
              {mockData.skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} category="backend" />
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h4>🛠️ Tools & Technologies</h4>
            <div className="skills-grid">
              {mockData.skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} category="tools" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;