import { SliceComponentProps } from "@prismicio/react";
import LogoSlider from "@/app/components/LogoSlider";
import "../../app/styles/LogoworkSection.css";

export type LogoSectionProps = SliceComponentProps<any>;

export default function LogoSection({ slice }: LogoSectionProps) {
  return <LogoSlider logos={slice.primary.logos} />;
}