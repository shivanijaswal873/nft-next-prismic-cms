"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";

export default function LogoSlider({ logos }: any) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: { perView: 4, spacing: 50 },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 3 } },
      "(max-width: 768px)": { slides: { perView: 2 } },
    },
    created(slider) {
      let raf: any;
      function autoScroll() {
        slider.track.to(slider.track.details.position + 0.002);
        raf = requestAnimationFrame(autoScroll);
      }
      autoScroll();
      slider.on("destroyed", () => cancelAnimationFrame(raf));
    },
  });

  if (!logos?.length) return null;

  return (
    <section className="partners">
      <div ref={sliderRef} className="keen-slider">
        {logos?.map((item: any, i: number) =>
          isFilled?.image(item?.logosection) ? (
            <div key={i} className="keen-slider__slide">
              <PrismicNextImage
                field={item?.logosection}
                alt={item?.alt_text || "logo"}
                className={`partner-logo ${item?.size || ""}`}
              />
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
