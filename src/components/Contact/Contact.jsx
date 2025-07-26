import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactCard}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <p className={styles.contactDesc}>
          Interested in connecting? Let's discuss opportunities, collaborations, or share insights about the DevOps journey.
        </p>
        
        <div className={styles.contactMethods}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>📧 Email:</span>
            <a href="mailto:jaime.gabriels@example.com" className={styles.contactLink}>jaime.gabriels@example.com</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>💼 LinkedIn:</span>
            <a href="https://linkedin.com/in/jaime-gabriels" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>linkedin.com/in/jaime-gabriels</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>💻 GitHub:</span>
            <a href="https://github.com/GABRIELS562" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>github.com/GABRIELS562</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>📍 Location:</span>
            <span className={styles.contactText}>Cape Town, South Africa</span>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
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
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.contactSubmitBtn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;