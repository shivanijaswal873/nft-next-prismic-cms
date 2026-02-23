"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import "../styles/AboutworkSection.css";

export default function AboutComponent({ data }: any) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          {isFilled?.richText(data?.title) && (
            <PrismicRichText field={data?.title} />
          )}
          {isFilled?.richText(data?.subtitle) && (
            <PrismicRichText field={data?.subtitle} />
          )}
        </div>

        <div className="about-content">
          {isFilled?.image(data?.image) && (
            <div className="about-image" data-aos="fade-right">
              <PrismicNextImage field={data?.image} alt="" />
            </div>
          )}

          <div className="about-text" data-aos="fade-left">
            {isFilled?.richText(data?.heading) && (
              <PrismicRichText field={data?.heading} />
            )}
            {isFilled?.keyText(data?.description) && <p>{data?.description}</p>}

            {data?.showButton && isFilled?.keyText(data?.buttonText) && (
              <button className="about-btn">{data?.buttonText}</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
