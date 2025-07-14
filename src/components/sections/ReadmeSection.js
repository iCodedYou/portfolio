import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import './ReadmeSection.css';

const ReadmeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const readmeContent = `# 👋 Welcome to My Portfolio

## About Me
${mockData.about.name} - ${mockData.about.title}

${mockData.about.bio}

## 📊 Quick Stats
- 💼 Experience: ${mockData.about.stats.experience}
- 🚀 Projects: ${mockData.about.stats.projects}
- 🛠️ Technologies: ${mockData.about.stats.technologies}
- 😊 Happy Clients: ${mockData.about.stats.clients}

## 🚀 Featured Projects
${mockData.projects.map(project => `
### ${project.title}
${project.description}
- **Status:** ${project.status}
- **Tech Stack:** ${project.technologies.join(', ')}
- **Live Demo:** [View Project](${project.liveUrl})
- **Source Code:** [GitHub](${project.githubUrl})
`).join('')}

## 💻 Technical Skills

### Frontend Development
${mockData.skills.frontend.map(skill => `- ${skill.icon} **${skill.name}** (${skill.level}%)`).join('\n')}

### Backend Development
${mockData.skills.backend.map(skill => `- ${skill.icon} **${skill.name}** (${skill.level}%)`).join('\n')}

### Tools & Technologies
${mockData.skills.tools.map(skill => `- ${skill.icon} **${skill.name}** (${skill.level}%)`).join('\n')}

## 📞 Get In Touch
- 📧 Email: ${mockData.contact.email}
- 📱 Phone: ${mockData.contact.phone}
- 📍 Location: ${mockData.contact.location}
- 💼 Status: ${mockData.contact.availability}

### Find me on:
${Object.entries(mockData.contact.social).map(([platform, url]) => 
  `- [${platform.charAt(0).toUpperCase() + platform.slice(1)}](${url})`).join('\n')}

## 🎯 What I'm Looking For
I'm passionate about building innovative solutions and working with teams that value quality, creativity, and continuous learning. Whether you have a project in mind, want to collaborate, or just want to chat about technology, I'd love to hear from you!

---

*⚡ This portfolio was built with React and designed to feel like VS Code!*
*🔄 Response time: ${mockData.contact.responseTime}*

> "Code is like humor. When you have to explain it, it's bad." - Cory House`;

  useEffect(() => {
    setIsVisible(true);
    
    if (currentIndex < readmeContent.length) {
      const timeout = setTimeout(() => {
        setTypedText(readmeContent.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, readmeContent]);

  return (
    <div className={`readme-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="readme-content">
          <div className="readme-text">
            {typedText.split('\n').map((line, index) => {
              const isHeader = line.startsWith('#');
              const isBold = line.includes('**');
              const isLink = line.includes('[') && line.includes(']');
              const isList = line.startsWith('- ');
              const isQuote = line.startsWith('> ');
              const isDivider = line === '---';
              
              let className = 'readme-line';
              if (isHeader) className += ' header';
              if (isBold) className += ' bold';
              if (isLink) className += ' link';
              if (isList) className += ' list';
              if (isQuote) className += ' quote';
              if (isDivider) className += ' divider';
              
              return (
                <div 
                  key={index} 
                  className={className}
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  {line}
                </div>
              );
            })}
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
      
      <div className="readme-panel">
        <div className="panel-header">
          <h3>📖 Portfolio Overview</h3>
          <span className="word-count">{readmeContent.split(' ').length} words</span>
        </div>
        
        <div className="table-of-contents">
          <h4>📋 Table of Contents</h4>
          <div className="toc-list">
            <a href="#about" className="toc-item">👋 About Me</a>
            <a href="#stats" className="toc-item">📊 Quick Stats</a>
            <a href="#projects" className="toc-item">🚀 Featured Projects</a>
            <a href="#skills" className="toc-item">💻 Technical Skills</a>
            <a href="#contact" className="toc-item">📞 Get In Touch</a>
          </div>
        </div>
        
        <div className="readme-stats">
          <div className="stat-item">
            <span className="stat-icon">📄</span>
            <div className="stat-info">
              <span className="stat-value">{readmeContent.split('\n').length}</span>
              <span className="stat-label">Lines</span>
            </div>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">🔤</span>
            <div className="stat-info">
              <span className="stat-value">{readmeContent.length}</span>
              <span className="stat-label">Characters</span>
            </div>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">📝</span>
            <div className="stat-info">
              <span className="stat-value">{readmeContent.split(' ').length}</span>
              <span className="stat-label">Words</span>
            </div>
          </div>
          
          <div className="stat-item">
            <span className="stat-icon">📖</span>
            <div className="stat-info">
              <span className="stat-value">{Math.ceil(readmeContent.split(' ').length / 200)}</span>
              <span className="stat-label">Min Read</span>
            </div>
          </div>
        </div>
        
        <div className="repo-info">
          <h4>📂 Repository Info</h4>
          <div className="repo-details">
            <div className="repo-item">
              <span className="repo-label">Language:</span>
              <span className="repo-value">Markdown</span>
            </div>
            <div className="repo-item">
              <span className="repo-label">Created:</span>
              <span className="repo-value">Today</span>
            </div>
            <div className="repo-item">
              <span className="repo-label">Updated:</span>
              <span className="repo-value">Just now</span>
            </div>
            <div className="repo-item">
              <span className="repo-label">License:</span>
              <span className="repo-value">MIT</span>
            </div>
          </div>
        </div>
        
        <div className="quick-actions">
          <h4>⚡ Quick Actions</h4>
          <div className="action-buttons">
            <button className="action-btn">
              <span>📋</span>
              Copy README
            </button>
            <button className="action-btn">
              <span>📤</span>
              Share Portfolio
            </button>
            <button className="action-btn">
              <span>💾</span>
              Download CV
            </button>
            <button className="action-btn">
              <span>⭐</span>
              Star Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmeSection;