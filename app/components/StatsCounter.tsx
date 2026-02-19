"use client";
import { useEffect, useState } from "react";

export default function StatsCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = value * 1000;

    const interval = setInterval(() => {
      start += target / 50;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return <h2>{Math.floor(count / 1000)}k+</h2>;
}
