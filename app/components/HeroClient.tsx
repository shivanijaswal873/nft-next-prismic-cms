"use client";

import StatsCounter from "./StatsCounter";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import "../styles/HeroworkSection.css";

export default function HeroClient({ slice }: any) {
  const { primary } = slice;

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          {isFilled?.richText(primary?.title) && (
            <h1 className="text1">
              {primary?.title.map((item: any, i: number) => (
                <span key={i}>{item?.text}</span>
              ))}
            </h1>
          )}

          {isFilled?.richText(primary?.subtitle) && (
            <p>
              {primary?.subtitle?.map((item: any, i: number) => (
                <span key={i}>{item?.text}</span>
              ))}
            </p>
          )}

          {primary?.buttons?.length > 0 && (
            <div className="hero-buttons">
              {primary?.buttons?.map((btn: any, i: number) =>
                isFilled?.link(btn?.button_link) &&
                isFilled?.keyText(btn?.button_text) ? (
                  <PrismicNextLink
                    key={i}
                    field={btn?.button_link}
                    className={
                      btn.button_type === "primary"
                        ? "btn-primary"
                        : "btn-secondary"
                    }
                  >
                    {btn?.button_text}
                  </PrismicNextLink>
                ) : null,
              )}
            </div>
          )}

          {primary?.stats?.length > 0 && (
            <div className="hero-stats">
              {primary?.stats?.map((stat: any, i: number) =>
                stat?.number || isFilled?.keyText(stat?.label) ? (
                  <div key={i}>
                    {stat?.number && (
                      <StatsCounter value={Number(stat?.number)} />
                    )}
                    {isFilled.keyText(stat?.label) && <span>{stat?.label}</span>}
                  </div>
                ) : null,
              )}
            </div>
          )}
        </div>

        {isFilled?.image(primary?.hero_image) && (
          <div className="hero-right">
            <PrismicNextImage field={primary?.hero_image} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
