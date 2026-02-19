import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import "../../app/styles/HeroworkSection.css";

export type HeroProps = SliceComponentProps<any>;

export default function Hero({ slice }: HeroProps) {
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
              <span key={i}>
                {item.text}
                <br />
              </span>
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
            {slice.primary.stats?.map((stat: any, i: number) => (
              <div key={i}>
                <h2>{stat.number}k+</h2>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <PrismicNextImage field={slice.primary.hero_image} />
        </div>

      </div>
    </section>
  );
}