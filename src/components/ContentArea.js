import React from 'react';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import GameSection from './sections/GameSection';
import ReadmeSection from './sections/ReadmeSection';
import './ContentArea.css';

const ContentArea = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'about.js':
        return <AboutSection />;
      case 'projects.jsx':
        return <ProjectsSection />;
      case 'skills.ts':
        return <SkillsSection />;
      case 'contact.html':
        return <ContactSection />;
      case 'experience.md':
        return <ExperienceSection />;
      case 'game.py':
        return <GameSection />;
      case 'README.md':
        return <ReadmeSection />;
      default:
        return (
          <div className="empty-editor">
            <div className="empty-content">
              <div className="welcome-text">
                <h1>Welcome to My Portfolio!</h1>
                <p>Select a file from the explorer to get started</p>
                <div className="file-suggestions">
                  <div className="suggestion">📄 Start with about.js</div>
                  <div className="suggestion">⚛️ Check out projects.jsx</div>
                  <div className="suggestion">🎮 Play the game.py</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="content-area">
      {renderContent()}
    </div>
  );
};

export default ContentArea;