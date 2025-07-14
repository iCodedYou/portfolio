import React, { useState } from 'react';
import './ActivityBar.css';

const ActivityBar = () => {
  const [activeIcon, setActiveIcon] = useState('explorer');

  const icons = [
    { id: 'explorer', icon: '📁', title: 'Explorer' },
    { id: 'search', icon: '🔍', title: 'Search' },
    { id: 'git', icon: '🌿', title: 'Source Control' },
    { id: 'debug', icon: '🐛', title: 'Run and Debug' },
    { id: 'extensions', icon: '🧩', title: 'Extensions' },
  ];

  return (
    <div className="activity-bar">
      {icons.map((item, index) => (
        <div
          key={item.id}
          className={`activity-icon ${activeIcon === item.id ? 'active' : ''}`}
          onClick={() => setActiveIcon(item.id)}
          title={item.title}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="icon">{item.icon}</span>
          {activeIcon === item.id && <div className="active-indicator"></div>}
        </div>
      ))}
      
      <div className="activity-separator"></div>
      
      <div className="activity-icon bottom">
        <span className="icon">⚙️</span>
      </div>
    </div>
  );
};

export default ActivityBar;