import React, { useState, useEffect } from 'react';
import './StatusBar.css';

const StatusBar = ({ activeTab }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [gitBranch] = useState('main');
  const [problems] = useState(0);
  const [warnings] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getFileLanguage = (fileName) => {
    if (!fileName) return '';
    const ext = fileName.split('.').pop();
    const languages = {
      'js': 'JavaScript',
      'jsx': 'React JSX',
      'ts': 'TypeScript',
      'html': 'HTML',
      'md': 'Markdown',
      'css': 'CSS'
    };
    return languages[ext] || 'Plain Text';
  };

  const getLineInfo = () => {
    if (!activeTab) return '';
    return 'Ln 1, Col 1';
  };

  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="status-item git-branch">
          <span className="icon">🌿</span>
          <span>{gitBranch}</span>
        </div>
        
        <div className="status-item problems">
          <span className="icon">❌</span>
          <span>{problems}</span>
        </div>
        
        <div className="status-item warnings">
          <span className="icon">⚠️</span>
          <span>{warnings}</span>
        </div>
      </div>
      
      <div className="status-center">
        <div className="status-item portfolio-status">
          <span className="status-dot"></span>
          <span>Portfolio Online</span>
        </div>
      </div>
      
      <div className="status-right">
        {activeTab && (
          <>
            <div className="status-item line-info">
              <span>{getLineInfo()}</span>
            </div>
            
            <div className="status-item language">
              <span>{getFileLanguage(activeTab)}</span>
            </div>
          </>
        )}
        
        <div className="status-item encoding">
          <span>UTF-8</span>
        </div>
        
        <div className="status-item time">
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
        
        <div className="status-item notifications">
          <span className="icon">🔔</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;