import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/Navigation.css';
import logo from '../assets/gubis85.png';

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const socialHandles = {
    facebook: '@Gubis85Security',
    twitter: '@Gubis85',
    linkedin: 'Gubis85-Security',
    instagram: '@Gubis85Security'
  };

  const handleCopyHandle = (platform: string, handle: string) => {
    navigator.clipboard.writeText(handle);
    setCopied(platform);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // TODO: Implement actual search functionality
      console.log('Searching for:', searchQuery);
      // Could redirect to a search results page or filter content
    }
  };
  return (
    <>
      {/* Social Media Top Bar */}
      <div className="social-top-bar">
        <div className="social-container">
          <div className="social-icons">
            <div className="social-icon-wrapper" title={socialHandles.facebook}>
              <button 
                onClick={() => handleCopyHandle('facebook', socialHandles.facebook)}
                className={`social-icon-btn ${copied === 'facebook' ? 'copied' : ''}`}
                aria-label="Facebook - Click to copy handle"
              >
                <FaFacebook />
                {copied === 'facebook' && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>
            <div className="social-icon-wrapper" title={socialHandles.twitter}>
              <button 
                onClick={() => handleCopyHandle('twitter', socialHandles.twitter)}
                className={`social-icon-btn ${copied === 'twitter' ? 'copied' : ''}`}
                aria-label="Twitter - Click to copy handle"
              >
                <FaTwitter />
                {copied === 'twitter' && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>
            <div className="social-icon-wrapper" title={socialHandles.linkedin}>
              <button 
                onClick={() => handleCopyHandle('linkedin', socialHandles.linkedin)}
                className={`social-icon-btn ${copied === 'linkedin' ? 'copied' : ''}`}
                aria-label="LinkedIn - Click to copy handle"
              >
                <FaLinkedin />
                {copied === 'linkedin' && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>
            <div className="social-icon-wrapper" title={socialHandles.instagram}>
              <button 
                onClick={() => handleCopyHandle('instagram', socialHandles.instagram)}
                className={`social-icon-btn ${copied === 'instagram' ? 'copied' : ''}`}
                aria-label="Instagram - Click to copy handle"
              >
                <FaInstagram />
                {copied === 'instagram' && <span className="copy-tooltip">Copied!</span>}
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone size={14} />
              <span>086 137 7666</span>
            </div>
            <div className="contact-item">
              <FaEnvelope size={14} />
              <span>info@Gubis85.co.za</span>
            </div>
          </div>

          {/* Search Bar */}
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text"
              placeholder="Search website..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn" aria-label="Search">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Gubis85 Security Services" className="nav-logo-img" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/csir" className="nav-link">
                CSR
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
