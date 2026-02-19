"use client";
import "../styles/LogoworkSection.css";
import data from "../utils.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const logoMap = {
  "Binance-logo.png": "/assets/Binance-logo.png",
  "Blockchain-logo.png": "/assets/Blockchain-logo.png",
  "Ethereum-logo.png": "/assets/Ethereum-logo.png",
};

export default function Logo() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 50,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2 },
      },
    },
    created(slider) {
      let raf;
      function autoScroll() {
        slider.track.to(slider.track.details.position + 0.002);
        raf = requestAnimationFrame(autoScroll);
      }
      autoScroll();

      slider.on("destroyed", () => cancelAnimationFrame(raf));
    },
  });

  return (
    <section className="partners">
      <div ref={sliderRef} className="keen-slider">
        {data.logos.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <img
              src={logoMap[`../assets/${item.image}`] || item.image}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
