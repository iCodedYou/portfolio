import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const projectIcons = ['🚀', '💻', '⚡', '🎯', '🔧', '📱', '🌐', '⭐'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return '#28a745';
      case 'Development': return '#ffc107';
      case 'Completed': return '#007acc';
      default: return '#6c757d';
    }
  };

  return (
    <div className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="floating-project-icons">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="project-icon-float" style={{ 
              animationDelay: `${i * 1.2}s`,
              left: `${Math.random() * 90}%`,
              animationDuration: `${5 + Math.random() * 3}s`,
              color: i % 2 === 0 ? 'rgba(86, 211, 100, 0.3)' : 'rgba(248, 81, 73, 0.3)'
            }}>
              {projectIcons[i % projectIcons.length]}
            </div>
          ))}
        </div>
        
        <div className="line-numbers">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="code-content">
          <div className="code-line">
            <span className="keyword">import</span>
            <span className="variable"> React </span>
            <span className="keyword">from</span>
            <span className="string"> 'react'</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">import</span>
            <span className="variable"> { useState, useEffect } </span>
            <span className="keyword">from</span>
            <span className="string"> 'react'</span>
            <span className="punctuation">;</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// 🚀 My Featured Projects - Building the Future</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">const</span>
            <span className="variable"> projects</span>
            <span className="operator"> = </span>
            <span className="punctuation">[</span>
          </div>
          
          {mockData.projects.map((project, index) => (
            <div key={project.id}>
              <div className="code-line indent-1" style={{ animationDelay: `${index * 0.3}s` }}>
                <span className="punctuation">{'{'}</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="property">id</span>
                <span className="punctuation">: </span>
                <span className="number">{project.id}</span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="property">title</span>
                <span className="punctuation">: </span>
                <span className="string">"{project.title}"</span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="property">description</span>
                <span className="punctuation">: </span>
                <span className="string">"{project.description}"</span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="property">status</span>
                <span className="punctuation">: </span>
                <span className="string" style={{ color: getStatusColor(project.status) }}>
                  "{project.status}"
                </span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="property">metrics</span>
                <span className="punctuation">: {'{'}</span>
              </div>
              
              <div className="code-line indent-3">
                <span className="property">users</span>
                <span className="punctuation">: </span>
                <span className="string">"{project.metrics.users}"</span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-3">
                <span className="property">uptime</span>
                <span className="punctuation">: </span>
                <span className="string">"{project.metrics.uptime}"</span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-3">
                <span className="property">performance</span>
                <span className="punctuation">: </span>
                <span className="number">{project.metrics.performance}</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="punctuation">{'}'}</span>
                <span className="punctuation">,</span>
              </div>
              
              <div className="code-line indent-2">
                <span className="property">technologies</span>
                <span className="punctuation">: [</span>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>
                    <span className="string">"{tech}"</span>
                    {techIndex < project.technologies.length - 1 && <span className="punctuation">, </span>}
                  </span>
                ))}
                <span className="punctuation">]</span>
              </div>
              
              <div className="code-line indent-1">
                <span className="punctuation">{'}'}</span>
                {index < mockData.projects.length - 1 && <span className="punctuation">,</span>}
              </div>
              
              {index < mockData.projects.length - 1 && <div className="code-line"></div>}
            </div>
          ))}
          
          <div className="code-line">
            <span className="punctuation">];</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line">
            <span className="comment">// Ready to discuss your next project! 💼</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">export default</span>
            <span className="variable"> projects</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>
      
      <div className="projects-panel">
        <div className="panel-header">
          <h3>🚀 Project Gallery</h3>
          <span className="project-count">{mockData.projects.length} projects</span>
        </div>
        
        <div className="project-grid">
          {mockData.projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${selectedProject === project.id ? 'selected' : ''}`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      📱 Code
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      🚀 Live
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <span className="status-badge" style={{ backgroundColor: getStatusColor(project.status) }}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-metrics">
                  <div className="metric-item">
                    <span className="metric-value">{project.metrics.users}</span>
                    <span className="metric-label">Users</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-value">{project.metrics.uptime}</span>
                    <span className="metric-label">Uptime</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-value">{project.metrics.performance}</span>
                    <span className="metric-label">Score</span>
                  </div>
                </div>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {selectedProject === project.id && (
                  <div className="project-details">
                    <h5>✨ Key Features:</h5>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
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

export default ProjectsSection;