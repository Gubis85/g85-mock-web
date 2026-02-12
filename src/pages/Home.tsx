import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaShieldAlt, FaVideo, FaSlidersH, FaKey, FaBolt, FaCalendar, FaCrown, FaChartBar, FaLightbulb, FaPhone, FaCamera, FaTree, FaSync, FaWrench, FaFingerprint, FaMobile, FaGlobe, FaChevronLeft, FaChevronRight, FaLock, FaSearch, FaUsers } from 'react-icons/fa';
import '../styles/Home.css';
import slide1 from '../assets/Slide_Show/pic1.jpeg';
import slide2 from '../assets/Slide_Show/pic2.jpeg';
import slide3 from '../assets/Slide_Show/pic3.jpeg';
import slide4 from '../assets/Slide_Show/pic4.jpeg';
import slide5 from '../assets/Slide_Show/pic5.jpeg';
import slide6 from '../assets/Slide_Show/pic6.jpeg';

export default function Home() {
  // Core UI state for the carousel, background slideshow, and contact form.
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);
  const [currentAboutImageIndex, setCurrentAboutImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    province: '',
    serviceInterest: '',
    productInterest: '',
    message: '',
  });

  // Hero background images (first is the primary/pivot image).
  const backgroundImages = [
    '../assets/hero-bg.jpeg', // Pivot image - displayed longer
    '../assets/gubis85.png',
  ];

  // Service catalog used in the carousel and deep links.
  const services = [
    { name: 'Physical Guarding', id: 'physical-guarding', icon: FaShieldAlt },
    { name: 'Surveillance Management', id: 'surveillance', icon: FaVideo },
    { name: 'Control Room', id: 'control-room', icon: FaSlidersH },
    { name: 'Access Control System', id: 'access-control', icon: FaKey },
    { name: 'Reaction Armed Response', id: 'armed-response', icon: FaBolt },
    { name: 'Special Event Security', id: 'event-security', icon: FaCalendar },
    { name: 'VIP Protection', id: 'vip-protection', icon: FaCrown },
    { name: 'Security Risk Assessment', id: 'risk-assessment', icon: FaChartBar },
    { name: 'Electric Fence', id: 'electric-fence', icon: FaLightbulb },
    { name: 'Intercom System', id: 'intercom', icon: FaPhone },
    { name: 'Drone Monitoring', id: 'drone-monitoring', icon: FaCamera },
    { name: 'Automatic Vehicle Barriers', id: 'vehicle-barriers', icon: FaTree },
    { name: 'Turnstile Systems', id: 'turnstile', icon: FaSync },
    { name: 'Roadway Spikes', id: 'roadway-spikes', icon: FaWrench },
    { name: 'Biometric Systems', id: 'biometric', icon: FaFingerprint },
    { name: 'Forensics', id: 'forensics', icon: FaSearch },
    { name: 'Riot Control', id: 'riot-control', icon: FaUsers },
    { name: 'SafeCall', id: 'safecall', icon: FaMobile, isNew: true },
    { name: 'Offsite Monitoring', id: 'offsite-monitoring', icon: FaGlobe },
    { name: 'Cyber Security', id: 'cyber-security', icon: FaLock },
  ];

  // Slideshow images for the About preview section.
  const aboutImages = [slide1, slide2, slide3, slide4, slide5, slide6];

  // Quick stats shown in the fun-facts grid.
  const funFacts = [
    { label: 'Rapid response time', value: '3-5 min', icon: FaBolt },
    { label: 'Active monitoring', value: '24/7', icon: FaVideo },
    { label: 'Sites protected', value: '2,800+', icon: FaShieldAlt },
    { label: 'Certified guards', value: '1,200+', icon: FaCrown },
    { label: 'Risk assessments/year', value: '650+', icon: FaChartBar },
    { label: 'Client retention', value: '97%', icon: FaLightbulb },
  ];

  // Animation variants for staggered section entrance.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Shared animation for individual items.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Background grid animation for the hero.
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: { duration: 1.5 },
    },
  };

  // Move carousel to the next service item.
  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  // Move carousel to the previous service item.
  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 4500); // Change service every 4.5 seconds (10% faster)

    return () => clearInterval(autoPlayInterval);
  }, [services.length]);

  // Background image slideshow
  useEffect(() => {
    const bgSlideInterval = setInterval(() => {
      setCurrentBgImageIndex((prev) => {
        const nextIndex = (prev + 1) % backgroundImages.length;
        // If moving away from pivot image (index 0), show supporting images for shorter duration
        // If on pivot image, stay longer before switching
        return nextIndex;
      });
    }, (currentBgImageIndex === 0 ? 8000 : 4000)); // Pivot: 8s, Others: 4s

    return () => clearInterval(bgSlideInterval);
  }, [backgroundImages.length, currentBgImageIndex]);

  // About section slideshow
  useEffect(() => {
    const aboutSlideInterval = setInterval(() => {
      setCurrentAboutImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3500);

    return () => clearInterval(aboutSlideInterval);
  }, [aboutImages.length]);

  // Keep form state in sync with inputs.
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simple form submission handler (placeholder for backend integration).
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      businessName: '',
      province: '',
      serviceInterest: '',
      productInterest: '',
      message: '',
    });
  };

  return (
    <div className="home">
      {/* Animated Background Grid */}
      <motion.div 
        className="animated-grid"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="headline-wrapper">
              <h1 className="headline">
                Gubis85 Security Services
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="tagline-wrapper">
              <p className="tagline">
                Integrated Security. Intelligent Protection. Total Control.
              </p>
            </motion.div>

            {/* Sub-headline */}
            <motion.div variants={itemVariants} className="subheadline-wrapper">
              <p className="subheadline">
                Specialised, technology-driven security and protection solutions built for a dynamic and evolving safety landscape.
              </p>
            </motion.div>

            {/* Trust Line */}
            <motion.div variants={itemVariants} className="trust-line">
              <p>Trusted since 2013 · BBBEE Accredited · National Footprint</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="cta-buttons">
              <a href="#contact-form" className="cta-primary">
                Request Private Security
              </a>
              <Link to="/services" className="cta-secondary">
                Explore Our Capabilities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <motion.section
        className="company-description"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-grid">
          <div className="about-slideshow">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentAboutImageIndex}
                src={aboutImages[currentAboutImageIndex]}
                alt="Gubis85 operations and sites"
                className="about-slide-image"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
          <div className="description-container about-text-right">
            <h2>About Gubis85 Solutions</h2>
            <p>
              Gubis85 Solutions (Pty) Ltd provides a variety of security and personal protection services. These include Personal Protection Services to High Profile individuals, Executives, Dignitaries and Celebrities, Offices, Government departments, hospitals, Residential Estates, Shopping complexes, Industrial Sites and security training and consulting services across Mining, Health, Residential and Corporate sectors.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Fun Facts Section */}
      <motion.section
        className="fun-facts"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="fun-facts-container">
          <div className="fun-facts-header">
            <h2>Quick Trust Builders</h2>
            <p className="fun-facts-subtitle">
              Numbers that reflect vigilance, readiness, and reliability across every site we protect.
            </p>
          </div>

          <div className="fun-facts-grid">
            {funFacts.map((fact, idx) => (
              <motion.div
                key={fact.label}
                className="fun-fact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="fun-fact-icon">
                  {React.createElement(fact.icon, { size: 28 })}
                </div>
                <div className="fun-fact-value">{fact.value}</div>
                <div className="fun-fact-label">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Carousel */}
      <motion.section
        className="services-carousel-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Services</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevService}>
            <FaChevronLeft size={20} />
          </button>

          <div className="carousel-track">
            <div className="carousel-items-wrapper">
              {/* Previous Service */}
              <motion.div
                className="carousel-service carousel-prev"
                initial={{ opacity: 0, x: -180 }}
                animate={{ opacity: 0.5, x: 0 }}
                exit={{ opacity: 0, x: 180 }}
                transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 0.8 }}
              >
                <div className="service-card-small">
                  <div className="service-icon-small">
                    {React.createElement(services[(currentServiceIndex - 1 + services.length) % services.length].icon, { size: 50 })}
                  </div>
                  <h4>{services[(currentServiceIndex - 1 + services.length) % services.length].name}</h4>
                </div>
              </motion.div>

              {/* Current Service (Center) */}
              <motion.div
                key={currentServiceIndex}
                className="carousel-service carousel-current"
                initial={{ opacity: 0, x: 180, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -180, scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 110, damping: 26, mass: 0.9 }}
              >
                <div className="service-card-large">
                  <div className="service-icon">
                    {React.createElement(services[currentServiceIndex].icon, { size: 80 })}
                  </div>
                  <h3>{services[currentServiceIndex].name}</h3>
                  {services[currentServiceIndex].isNew && (
                    <span className="coming-soon-badge">Coming Soon</span>
                  )}
                  <p className="service-description">
                    {services[currentServiceIndex].name} services tailored to your security needs.
                  </p>
                  <Link to={`/services#${services[currentServiceIndex].id}`} className="learn-more-btn">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Next Service */}
              <motion.div
                className="carousel-service carousel-next"
                initial={{ opacity: 0, x: 180 }}
                animate={{ opacity: 0.5, x: 0 }}
                exit={{ opacity: 0, x: -180 }}
                transition={{ type: 'spring', stiffness: 120, damping: 24, mass: 0.8 }}
              >
                <div className="service-card-small">
                  <div className="service-icon-small">
                    {React.createElement(services[(currentServiceIndex + 1) % services.length].icon, { size: 50 })}
                  </div>
                  <h4>{services[(currentServiceIndex + 1) % services.length].name}</h4>
                </div>
              </motion.div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextService}>
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {services.map((_, idx) => (
            <motion.button
              key={idx}
              className={`indicator ${idx === currentServiceIndex ? 'active' : ''}`}
              onClick={() => setCurrentServiceIndex(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Gubis85?</h2>
        <div className="features-grid">
          {[
            {
              title: '24/7 Monitoring',
              description: 'Round-the-clock security monitoring and rapid response protocols',
            },
            {
              title: 'Expert Team',
              description: 'Highly trained and certified security professionals',
            },
            {
              title: 'Advanced Technology',
              description: 'Latest AI-driven security systems and equipment',
            },
            {
              title: 'Proven Track Record',
              description: 'Years of excellence in protection and security management',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Get In Touch Form */}
      <motion.section
        id="contact-form"
        className="get-in-touch-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="form-container">
          <h2>Get In Touch With Us</h2>
          <p className="form-subtitle">Tell us about your security needs</p>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  placeholder="Your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="+27 (0) XXX XXX XXXX"
                  required
                />
              </div>
            </div>

            {/* Business Name */}
            <div className="form-group full-width">
              <label htmlFor="businessName">Business Name *</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleFormChange}
                placeholder="Your business or organization name"
                required
              />
            </div>

            {/* Province & Service Interest */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="province">Province *</label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select Province</option>
                  <option value="gauteng">Gauteng</option>
                  <option value="western-cape">Western Cape</option>
                  <option value="kwazulu-natal">KwaZulu-Natal</option>
                  <option value="limpopo">Limpopo</option>
                  <option value="mpumalanga">Mpumalanga</option>
                  <option value="free-state">Free State</option>
                  <option value="northern-cape">Northern Cape</option>
                  <option value="eastern-cape">Eastern Cape</option>
                  <option value="north-west">North West</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="serviceInterest">Service Interest</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleFormChange}
                >
                  <option value="">Select Service Interest</option>
                  <option value="personal">Personal Protection</option>
                  <option value="corporate">Corporate Security</option>
                  <option value="residential">Residential Security</option>
                  <option value="event">Event Security</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="business-enquiry">Business Enquiry</option>
                </select>
              </div>
            </div>

            {/* Product of Interest */}
            <div className="form-group full-width">
              <label htmlFor="productInterest">Product of Interest</label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleFormChange}
              >
                <option value="">Select Product/Service</option>
                <option value="physical-guarding">Physical Guarding Security</option>
                <option value="surveillance">Surveillance Management</option>
                <option value="control-room">Control Room Services</option>
                <option value="access-control">Access Control System</option>
                <option value="armed-response">Reaction Armed Response</option>
                <option value="event-security">Special Event Security</option>
                <option value="vip-protection">VIP Protection</option>
                <option value="risk-assessment">Security Risk Assessment</option>
                <option value="electric-fence">Electric Fence Solutions</option>
                <option value="intercom">Intercom System</option>
                <option value="drone">Drone Monitoring</option>
                <option value="barriers">Automatic Vehicle Barriers</option>
                <option value="biometric">Biometric Systems</option>
                <option value="safecall">SafeCall (Coming Soon)</option>
                <option value="offsite-monitoring">Offsite Monitoring</option>
              </select>
            </div>

            {/* Message */}
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell us more about your security requirements..."
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Enquiry
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
