"use client";
import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="about-section">
      <div className="about">
        <div className="about-left">
          <h1>
            Our mission is to provide Your care
            <br /> the way you want it.
          </h1>
          <p>
            Care Just4U Limited is rated with the CQC as a “GOOD” domiciliary
            service care provider, which is set up by a team of individuals who
            share a common value and belief with a great passion on what good
            care should be. With over 18 years experience in care and nursing
            sector. Our drive is being able to provide quality and affordable
            care to individuals who wish to remain at home whilst receiving
            necessary support.
          </p>
          <p>
            We identified the gap in homecare especially around Harlow and its
            surrounding areas and therefore we are here not just to bridge the
            gap but to make receiving care at home a joyful experience and that
            is why we say it’s “Your care, the way you want it”. The care we aim
            to provide focuses on the individual and therefore you have your
            say. That is why every individual will be properly assessed to make
            sure that appropriate care that meets the need is provided.
          </p>
          <button type="button" className="default-button">
            Read More
          </button>
        </div>
        <div className="about-right">
          <div className="about-images">
            <img
              src="/doctor-1.jpg"
              alt="doctor-1"
              className="doctor-1"
            />
            <img
              src="/doctor-2.jpg"
              alt="doctor 2"
              className="doctor-2"
            />
          </div>
        </div>
      </div>
      <div className="about-us">
        <img src="/medics.jpg" alt="medicals" />
        <div className="abt-why-us">
          <h1>Why Choose Us</h1>
          <ol className="numbered-list">
            <li>
              <span></span>
              <div className="content">
                <span>Over 15 Years of Compassionate Care</span>
                <p>
                  With more than 15 years of experience, we have been a trusted
                  provider of personalized and reliable care, supporting
                  families and individuals in our community with dedication and
                  empathy.
                </p>
              </div>
            </li>
            <li>
              <span></span>
              <div className="content">
                <span>Highly Trained and Caring Team</span>
                <p>
                  Our team consists of compassionate, skilled caregivers who are
                  committed to delivering care that promotes independence,
                  dignity, and well-being for every client.
                </p>
              </div>
            </li>
            <li>
              <span></span>
              <div className="content">
                <span>Support Whenever You Need It</span>
                <p>
                  We provide flexible and dependable care services designed to
                  be there when you need us, offering peace of mind for you and
                  your loved ones.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;
