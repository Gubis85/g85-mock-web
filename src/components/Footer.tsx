import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Gubis85 Security Service</h3>
          <p>Your trusted security partner</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/csir">CSIR</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p><i>Boitumelo Mahlangu Coporate House</i></p>
          <p>086 137 7666</p>
          <p>info@Gubis85security.com</p>
          <p>254 Lochner Rd, Celtisdal, Centurion, 0157</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <div className="social-icon-wrapper">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="social-icon-btn"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="social-icon-wrapper">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="social-icon-btn"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="social-icon-wrapper">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="social-icon-btn"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="social-icon-wrapper">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="social-icon-btn"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Gubis85 Security Service. All rights reserved.</p>
      </div>
    </footer>
  );
}
