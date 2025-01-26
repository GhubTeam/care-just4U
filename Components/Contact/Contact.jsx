"use client";
import { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const formUrl = "https://forms.google.com/your-form-url";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormClick = () => {
    if (typeof window !== "undefined") {
      window.open(formUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (!isClient) {
    return (
      <section className="contact-section contact-loading">
        <div className="loading-placeholder">Loading...</div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="info-item">
              <h3>Contact Info</h3>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:01279 311 439" className="contact-link">
                  01279 311 439
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@carejust4u.co.uk"
                  className="contact-link"
                >
                  admin@carejust4u.co.uk
                </a>
              </p>
              <p>
                <strong>Address:</strong>GF22, Harlow Enterprise Hub, Kao
                Hockham Building, Edinburgh Way, Harlow, Essex CM20 2NQ
              </p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us A Message</h3>
            <p>
              We&apos;d love to hear from you! Click below to fill out our
              contact form.
            </p>
            <button
              onClick={handleFormClick}
              className="form-button default-button"
              aria-label="Open contact form"
              type="button"
            >
              Contact Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
