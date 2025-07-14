import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import ContentArea from './ContentArea';
import StatusBar from './StatusBar';
import ActivityBar from './ActivityBar';
import './VSCodePortfolio.css';

const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState('about.js');
  const [openTabs, setOpenTabs] = useState(['about.js']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleFileClick = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };

  const handleTabClose = (fileName) => {
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    
    if (activeTab === fileName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    } else if (newTabs.length === 0) {
      setActiveTab('');
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">
          <div className="vscode-icon"></div>
          <div className="loading-text">Loading Portfolio...</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vscode-container">
      <div className="title-bar">
        <div className="title-bar-content">
          <div className="window-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
          
          <div className="menu-bar">
            <div className="menu-item">File</div>
            <div className="menu-item">Edit</div>
            <div className="menu-item">Selection</div>
            <div className="menu-item">View</div>
            <div className="menu-item">Go</div>
            <div className="menu-item">Run</div>
            <div className="menu-item">Terminal</div>
            <div className="menu-item">Help</div>
          </div>
          
          <div className="title-section">
            <div className="title">Varun Kumar - Visual Studio Code</div>
          </div>
          
          <div className="window-actions">
            <div className="action-icon" title="Settings">⚙️</div>
            <div className="action-icon" title="Account">👤</div>
            <div className="action-icon" title="Layout">⊞</div>
          </div>
        </div>
      </div>
      
      <div className="main-area">
        <ActivityBar />
        <Sidebar onFileClick={handleFileClick} />
        <div className="editor-area">
          <TabBar 
            tabs={openTabs} 
            activeTab={activeTab} 
            onTabClick={setActiveTab}
            onTabClose={handleTabClose}
          />
          <ContentArea activeTab={activeTab} />
        </div>
      </div>
      
      <StatusBar activeTab={activeTab} />
    </div>
  );
};

export default VSCodePortfolio;