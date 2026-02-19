"use client";
import "../styles/HeroworkSection.css";
import data from "../utils.json";

const groupImage = "/assets/image1.png";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { heroSection } = data;

  const [counts, setCounts] = useState(heroSection.stats.map(() => 0));

  useEffect(() => {
    const targets = heroSection.stats.map((s) => parseInt(s.value) * 1000);

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const step = targets[i] / 50;
          const next = count + step;
          return next >= targets[i] ? targets[i] : next;
        }),
      );
    }, 20);

    setTimeout(() => clearInterval(interval), 3000);

    return () => clearInterval(interval);
  }, [heroSection.stats]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left" data-aos="fade-right">
          <h1 className="text1">
            {heroSection.title.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p>
            {heroSection.subtitle.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <div className="hero-buttons">
            {heroSection.buttons.map((btn, i) => (
              <button
                key={i}
                className={
                  btn.type === "primary" ? "btn-primary" : "btn-secondary"
                }
              >
                {btn.text}
              </button>
            ))}
          </div>

          <div className="hero-stats">
            {heroSection.stats.map((stat, i) => (
              <div key={i}>
                <h2>{Math.floor(counts[i] / 1000)}k+</h2>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <img src={groupImage} alt="NFT Collection" />
        </div>
      </div>
    </section>
  );
}