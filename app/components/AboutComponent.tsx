"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import "../styles/AboutworkSection.css";

export default function AboutComponent({ data }: any) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <PrismicRichText field={data.title} />
          <PrismicRichText field={data.subtitle} />
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <PrismicNextImage field={data.image} alt="" />
          </div>

          <div className="about-text" data-aos="fade-left">
            <PrismicRichText field={data.heading} />
            <p>{data.description}</p>

            {data.showButton && (
              <button className="about-btn">{data.buttonText}</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
