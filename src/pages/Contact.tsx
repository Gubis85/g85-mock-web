import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  // Form state for the contact enquiry.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Regional office list for the location section.
  const officeLocations = [
    {
      id: 'ho',
      label: 'Head Office (Boitumelo Corporate House)',
      address: '25 President Brand St, Bloemfontein, Free State, 9301',
      dotClass: 'office-dot--ho',
    },
    {
      id: 'limpopo',
      label: 'Limpopo Office',
      address: '12 Thabo Mbeki St, Polokwane, Limpopo, 0700',
      dotClass: 'office-dot--limpopo',
    },
    {
      id: 'free-state',
      label: 'FS Operations Office',
      address: '63-67 Kellner Street, Westdene, Bloemfontein, 9301',
      dotClass: 'office-dot--free-state',
    },
    {
      id: 'north-west',
      label: 'North West Office',
      address: '44 Scutte Avenue, Brits, 9250',
      dotClass: 'office-dot--north-west',
    },
    {
      id: 'northern-cape',
      label: 'Northern Cape Office',
      address: 'Office No. 28-30, Market Square, Kimberly, 8351',
      dotClass: 'office-dot--northern-cape',
    },
    {
      id: 'eastern-cape',
      label: 'Eastern Cape Office',
      address: '8 Winkley Street, Berea, East London',
      dotClass: 'office-dot--eastern-cape',
    },
    {
      id: 'western-cape',
      label: 'Western Cape Office',
      address: 'Unit 6, Pope House, 4 Chenoweth Street, Durbanville',
      dotClass: 'office-dot--western-cape',
    },
    {
      id: 'mpumalanga',
      label: 'Mpumalanga Office',
      address: 'Nedbank centre, 6 OR Tambo Street, Office No2D, Middelburg, 1040',
      dotClass: 'office-dot--mpumalanga',
    },
    {
      id: 'kwa-zulu-natal',
      label: 'Kwa-Zulu Natal Office',
      address: 'Liberty Life Building, 21 Aurora Drive, Umhlanga, 4301',
      dotClass: 'office-dot--kwa-zulu-natal',
    },
  ];

  // Keep form state in sync with user input.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Basic submit handler (placeholder for backend integration).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Page hero */}
      <section className="page-hero radar-hero">
        <div className="page-hero__content radar-hero__content">
          <p className="page-hero__eyebrow">Contact</p>
          <h1>Contact Us</h1>
          <p className="page-hero__subtext">
            Reach our team for consultations, incident response planning, and tailored security solutions.
          </p>
        </div>
      </section>

      {/* Two-column layout: info + form */}
      <div className="contact-container">
        {/* Company contact details */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="info-item">
            <h3>Contact</h3>
            <p>086 137 7666</p>
            <p>info@Gubis85.co.za</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>Bokamoso Corporate House<br />
              254 Lochner Rd<br />
              Celtisdal, Centurion<br />
              0157, South Africa</p>
          </div>
          <div className="info-item">
            <h3>Practical location info (HO & regional)</h3>
            <ul className="office-list">
              {officeLocations.map((office) => (
                <li key={office.id} className="office-item">
                  <span className={`office-dot ${office.dotClass}`} aria-hidden="true" />
                  <div className="office-details">
                    <h4>{office.label}</h4>
                    <p>{office.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 8AM - 4PM<br />
              Saturday-Sunday: 8AM - 4PM</p>
          </div>
        </div>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Embedded map */}
      <section className="contact-map">
        <div className="contact-map__header">
          <h2>Our Location</h2>
          <p>Visit us at 254 Lochner Rd, Celtisdal, Centurion, 0157.</p>
        </div>
        <div className="contact-map__frame">
          <iframe
            title="Gubis85 Security Service location"
            src="https://www.google.com/maps?q=254%20Lochner%20Rd%2C%20Celtisdal%2C%20Centurion%2C%200157&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
