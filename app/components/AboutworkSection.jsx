"use client";
import "../styles/AboutworkSection.css";
import data from "../utils.json";

const aboutImg = "/assets/aboutUs.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  const { aboutSection } = data;

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>{aboutSection.title}</h2>
          <p>
            {aboutSection.subtitle.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right" data-aos-once="true">
            <img src={aboutImg} alt="About NFT"  onLoad={() => AOS.refresh()} />
          </div>

          <div className="about-text" data-aos="fade-left" data-aos-once="true">
            <h3>{aboutSection.heading}</h3>
            <p>{aboutSection.description}</p>

            {aboutSection.showButton && (
              <button className="about-btn">
                {aboutSection.buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}