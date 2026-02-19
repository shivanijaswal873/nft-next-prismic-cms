"use client";

import StatsCounter from "./StatsCounter";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import "../styles/HeroworkSection.css";

export default function HeroClient({ slice }: any) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="text1">
            {slice.primary.title?.map((item: any, i: number) => (
              <span key={i}>
                {item.text}
                <br />
              </span>
            ))}
          </h1>

          <p>
            {slice.primary.subtitle?.map((item: any, i: number) => (
              <span key={i}>{item.text}</span>
            ))}
          </p>

          <div className="hero-buttons">
            {slice.primary.buttons?.map((btn: any, i: number) => (
              <PrismicNextLink
                key={i}
                field={btn.button_link}
                className={
                  btn.button_type === "primary"
                    ? "btn-primary"
                    : "btn-secondary"
                }
              >
                {btn.button_text}
              </PrismicNextLink>
            ))}
          </div>

          <div className="hero-stats">
            {slice?.primary?.stats?.map((stat: any, i: number) => (
              <div key={i}>
                <StatsCounter value={Number(stat.number)} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <PrismicNextImage field={slice.primary.hero_image} alt="" />
        </div>
      </div>
    </section>
  );
}
