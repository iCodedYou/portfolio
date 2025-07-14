import React from 'react';
import './TabBar.css';

const TabBar = ({ tabs, activeTab, onTabClick, onTabClose }) => {
  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop();
    const icons = {
      'js': { icon: '📄', color: '#f1c40f' },
      'jsx': { icon: '⚛️', color: '#61dafb' },
      'ts': { icon: '🔷', color: '#3178c6' },
      'html': { icon: '🌐', color: '#e34c26' },
      'md': { icon: '📝', color: '#083fa1' },
      'css': { icon: '🎨', color: '#1572b6' },
      'json': { icon: '⚙️', color: '#ffd700' }
    };
    return icons[ext] || { icon: '📄', color: '#d4d4d4' };
  };

  return (
    <div className="tab-bar">
      {tabs.map((tab, index) => {
        const fileInfo = getFileIcon(tab);
        return (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabClick(tab)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span 
              className="tab-icon" 
              style={{ color: fileInfo.color }}
            >
              {fileInfo.icon}
            </span>
            <span className="tab-name">{tab}</span>
            <button
              className="tab-close"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab);
              }}
              title="Close tab"
            >
              ✕
            </button>
            {activeTab === tab && (
              <div className="tab-indicator"></div>
            )}
          </div>
        );
      })}
      
      {tabs.length === 0 && (
        <div className="empty-tab-area">
          <span>Select a file to start coding...</span>
        </div>
      )}
    </div>
  );
};

export default TabBar;