"use client";

import { useState } from "react";
import "./Services.css";
import servicesData from "./servicesData";

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

 

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-image">
          <img src="/old-care-10.jpg" alt="Doctors in meeting" />
        </div>

        <div className="services-content">
          <h2>See Our Outstanding Services</h2>
          <p className="services-description">
            Experience compassionate care tailored to your needs. From
            personalized home services to expert medical consultations, we’re
            dedicated to supporting your health and well-being every step of the
            way.
          </p>

          <div className="services-grid">
            <div className="services-list">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className={`service-item ${
                    selectedService.id === service.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="service-icon"
                  />
                  <h3>{service.name}</h3>
                </div>
              ))}
            </div>

            <div className="service-details">
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;