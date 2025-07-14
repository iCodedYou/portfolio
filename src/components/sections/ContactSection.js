import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import './ContactSection.css';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Message sent! Thanks for reaching out.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <div className="code-editor">
        <div className="line-numbers">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="line-number">{i + 1}</div>
          ))}
        </div>
        
        <div className="code-content">
          <div className="code-line">
            <span className="tag">&lt;!DOCTYPE</span>
            <span className="attribute"> html</span>
            <span className="tag">&gt;</span>
          </div>
          
          <div className="code-line">
            <span className="tag">&lt;html</span>
            <span className="attribute"> lang</span>
            <span className="operator">=</span>
            <span className="string">"en"</span>
            <span className="tag">&gt;</span>
          </div>
          
          <div className="code-line">
            <span className="tag">&lt;head&gt;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="tag">&lt;title&gt;</span>
            <span className="text">Contact - Portfolio</span>
            <span className="tag">&lt;/title&gt;</span>
          </div>
          
          <div className="code-line">
            <span className="tag">&lt;/head&gt;</span>
          </div>
          
          <div className="code-line">
            <span className="tag">&lt;body&gt;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="comment">&lt;!-- 📧 Let's Connect! --&gt;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="tag">&lt;section</span>
            <span className="attribute"> class</span>
            <span className="operator">=</span>
            <span className="string">"contact-info"</span>
            <span className="tag">&gt;</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="tag">&lt;h1&gt;</span>
            <span className="text">Get In Touch</span>
            <span className="tag">&lt;/h1&gt;</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="tag">&lt;p&gt;</span>
            <span className="text">Email: </span>
            <span className="tag">&lt;a</span>
            <span className="attribute"> href</span>
            <span className="operator">=</span>
            <span className="string">"mailto:{mockData.contact.email}"</span>
            <span className="tag">&gt;</span>
            <span className="text">{mockData.contact.email}</span>
            <span className="tag">&lt;/a&gt;</span>
            <span className="tag">&lt;/p&gt;</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="tag">&lt;p&gt;</span>
            <span className="text">Phone: {mockData.contact.phone}</span>
            <span className="tag">&lt;/p&gt;</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="tag">&lt;p&gt;</span>
            <span className="text">Location: {mockData.contact.location}</span>
            <span className="tag">&lt;/p&gt;</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="tag">&lt;p&gt;</span>
            <span className="text">Status: {mockData.contact.availability}</span>
            <span className="tag">&lt;/p&gt;</span>
          </div>
          
          <div className="code-line indent-1">
            <span className="tag">&lt;/section&gt;</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line indent-1">
            <span className="tag">&lt;section</span>
            <span className="attribute"> class</span>
            <span className="operator">=</span>
            <span className="string">"social-links"</span>
            <span className="tag">&gt;</span>
          </div>
          
          <div className="code-line indent-2">
            <span className="tag">&lt;h2&gt;</span>
            <span className="text">Find me on:</span>
            <span className="tag">&lt;/h2&gt;</span>
          </div>
          
          {Object.entries(mockData.contact.social).map(([platform, url], index) => (
            <div key={platform} className="code-line indent-2" style={{ animationDelay: `${1 + index * 0.2}s` }}>
              <span className="tag">&lt;a</span>
              <span className="attribute"> href</span>
              <span className="operator">=</span>
              <span className="string">"{url}"</span>
              <span className="attribute"> target</span>
              <span className="operator">=</span>
              <span className="string">"_blank"</span>
              <span className="tag">&gt;</span>
              <span className="text">{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
              <span className="tag">&lt;/a&gt;</span>
            </div>
          ))}
          
          <div className="code-line indent-1">
            <span className="tag">&lt;/section&gt;</span>
          </div>
          
          <div className="code-line"></div>
          
          <div className="code-line indent-1">
            <span className="comment">&lt;!-- Response time: {mockData.contact.responseTime} --&gt;</span>
          </div>
          
          <div className="code-line">
            <span className="tag">&lt;/body&gt;</span>
          </div>
          
          <div className="code-line">
            <span className="tag">&lt;/html&gt;</span>
          </div>
        </div>
      </div>
      
      <div className="contact-panel">
        <div className="panel-header">
          <h3>📧 Contact Form</h3>
          <span className="response-time">Response: {mockData.contact.responseTime}</span>
        </div>
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Project inquiry, collaboration, etc."
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <span className="btn-icon">🚀</span>
              Send Message
            </button>
          </form>
          
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="card-icon">📍</div>
              <div className="card-content">
                <h4>Location</h4>
                <p>{mockData.contact.location}</p>
                <small>{mockData.contact.timezone}</small>
              </div>
            </div>
            
            <div className="info-card">
              <div className="card-icon">💼</div>
              <div className="card-content">
                <h4>Availability</h4>
                <p>{mockData.contact.availability}</p>
                <small>Preferred: {mockData.contact.preferredContact}</small>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Connect with me:</h4>
              <div className="social-grid">
                {Object.entries(mockData.contact.social).map(([platform, url], index) => (
                  <a 
                    key={platform}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ animationDelay: `${2 + index * 0.1}s` }}
                  >
                    <span className="social-icon">
                      {platform === 'github' && '📱'}
                      {platform === 'linkedin' && '💼'}
                      {platform === 'instagram' && '📸'}
                      {platform === 'portfolio' && '🌐'}
                    </span>
                    <span className="social-name">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;