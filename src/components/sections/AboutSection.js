import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import './AboutSection.css';

const AboutSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fullText = mockData.about.bio;
  
  const codeElements = ['const', 'function', 'return', 'import', 'export', 'class', 'extends', 'async', 'await', '=>', '{}', '[]', '()'];

  useEffect(() => {
    setIsVisible(true);
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="floating-code-elements">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="floating-element" style={{ 
              animationDelay: `${i * 0.8}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}>
              {codeElements[i % codeElements.length]}
            </div>
          ))}
        </div>
        
        <div className="line-numbers">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="code-content">
          {/* <div className="code-completion">
            <div className="completion-item">
              <span className="completion-icon">🔷</span>
              <span>developer</span>
            </div>
            <div className="completion-item">
              <span className="completion-icon">📦</span>
              <span>portfolio</span>
            </div>
            <div className="completion-item">
              <span className="completion-icon">⚡</span>
              <span>skills</span>
            </div>
          </div> */}
          
          <div className="code-line">
            <span className="keyword">const</span> 
            <span className="variable"> developer</span> 
            <span className="operator"> = </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">name</span>
            <span className="punctuation">: </span>
            <span className="string">"{mockData.about.name}"</span>
            <span className="punctuation">,</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">title</span>
            <span className="punctuation">: </span>
            <span className="string">"{mockData.about.title}"</span>
            <span className="punctuation">,</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">bio</span>
            <span className="punctuation">: </span>
            <span className="string">
              "{typedText}"
              <span className="cursor">|</span>
            </span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">stats</span>
            <span className="punctuation">: </span>
            <span className="punctuation">{'{'}</span>
          </div>
          
          {Object.entries(mockData.about.stats).map(([key, value], index) => (
            <div key={key} className="code-line indent-2" style={{ animationDelay: `${1 + index * 0.2}s` }}>
              <span className="property">{key}</span>
              <span className="punctuation">: </span>
              <span className="string">"{value}"</span>
              <span className="punctuation">{index < Object.entries(mockData.about.stats).length - 1 ? ',' : ''}</span>
            </div>
          ))}
          
          <div className="code-line indent-1">
            <span className="punctuation">{'}'}</span>
            <span className="punctuation">,</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="property">highlights</span>
            <span className="punctuation">: [</span>
          </div>
          
          {mockData.about.highlights.map((highlight, index) => (
            <div key={index} className="code-line indent-2" style={{ animationDelay: `${2 + index * 0.3}s` }}>
              <span className="string">"{highlight}"</span>
              <span className="punctuation">{index < mockData.about.highlights.length - 1 ? ',' : ''}</span>
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
            <span className="comment">// Ready to build amazing things together! 🚀</span>
          </div>
          
          <div className="code-line">
            <span className="keyword">export default</span>
            <span className="variable"> developer</span>
            <span className="punctuation">;</span>
          </div>
        </div>
      </div>
      
      <div className="avatar-section">
        <div className="avatar-container">
          <img 
            src={mockData.about.avatar} 
            alt={mockData.about.name}
            className="developer-avatar"
          />
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </div>
        </div>
        
        <div className="quick-stats">
          {Object.entries(mockData.about.stats).map(([key, value], index) => (
            <div key={key} className="stat-card" style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            </div>
          ))}
        </div>
        
        <div className="tech-icons">
          {mockData.about.techIcons.map((tech, index) => (
            <div 
              key={tech.name} 
              className="tech-icon"
              style={{ 
                animationDelay: `${2 + index * 0.1}s`,
                borderColor: tech.color + '40'
              }}
              title={tech.name}
            >
              <span style={{ color: tech.color }}>{tech.icon}</span>
            </div>
          ))}
        </div>
        
        <div className="code-snippet-preview">
          <div className="snippet-header">
            <span className="snippet-title">💻 Quick Preview</span>
          </div>
          <div className="snippet-code">
            <pre>
              {mockData.about.codeSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;