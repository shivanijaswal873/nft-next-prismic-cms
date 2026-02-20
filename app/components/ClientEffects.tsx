"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";

export default function ClientEffects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
