import { SliceComponentProps } from "@prismicio/react";
import AboutComponent from "@/app/components/AboutComponent";

export default function AboutSection({ slice }: SliceComponentProps<any>) {

  const data = {
    title: slice.primary.title,
    subtitle: slice.primary.subtitle,
    image: slice.primary.about_image,
    heading: slice.primary.heading,
    description: slice.primary.description,
    showButton: slice.primary.show_button,
    buttonText: slice.primary.button_text,
  };

  return <AboutComponent data={data} />;
}