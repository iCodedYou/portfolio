import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFileClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState(['portfolio']);

  const fileStructure = {
    portfolio: {
      type: 'folder',
      children: {
        'about.js': { type: 'file', icon: '📄', color: '#f1c40f' },
        'projects.jsx': { type: 'file', icon: '⚛️', color: '#61dafb' },
        'skills.ts': { type: 'file', icon: '🔷', color: '#3178c6' },
        'contact.html': { type: 'file', icon: '🌐', color: '#e34c26' },
        'experience.md': { type: 'file', icon: '📝', color: '#083fa1' },
        'game.py': { type: 'file', icon: '🎮', color: '#56d364' },
        'README.md': { type: 'file', icon: '📖', color: '#083fa1' }
      }
    }
  };

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const renderFileTree = (structure, path = '') => {
    return Object.entries(structure).map(([name, item], index) => {
      const fullPath = path ? `${path}/${name}` : name;
      const isExpanded = expandedFolders.includes(name);
      
      if (item.type === 'folder') {
        return (
          <div key={name} className="folder-container">
            <div 
              className={`folder ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleFolder(name)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="folder-icon">
                {isExpanded ? '📂' : '📁'}
              </span>
              <span className="folder-name">{name}</span>
            </div>
            {isExpanded && (
              <div className="folder-children">
                {renderFileTree(item.children, fullPath)}
              </div>
            )}
          </div>
        );
      } else {
        return (
          <div 
            key={name}
            className="file"
            onClick={() => onFileClick(name)}
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <span className="file-icon" style={{ color: item.color }}>
              {item.icon}
            </span>
            <span className="file-name">{name}</span>
          </div>
        );
      }
    });
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="explorer-title">
          <span className="title-text">EXPLORER</span>
          <div className="header-actions">
            <button 
              className="collapse-btn"
              onClick={() => setIsCollapsed(!isCollapsed)}
              title={isCollapsed ? 'Expand' : 'Collapse'}
            >
              {isCollapsed ? '▶️' : '◀️'}
            </button>
          </div>
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="file-explorer">
          <div className="project-folder">
            <div className="project-header">
              <span className="project-icon">📂</span>
              <span className="project-name">MY PORTFOLIO</span>
            </div>
            <div className="file-tree">
              {renderFileTree(fileStructure)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;