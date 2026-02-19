import { SliceComponentProps } from "@prismicio/react";
import HeroClient from "@/app/components/HeroClient";

export type HeroProps = SliceComponentProps<any>;

export default function Hero({ slice }: HeroProps) {
  return <HeroClient slice={slice} />;
}