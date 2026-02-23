import { Content, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CreatorworkSection from "@/app/components/CreatorWorkSection";

export type Creator = {
  name: string;
  image: string;
  background: string;
  text: string;
  followed: boolean;
};

export type TopCreatorSectionProps =
  SliceComponentProps<Content.TopCreatorSectionSlice>;

const TopCreatorSection = ({ slice }: TopCreatorSectionProps) => {
  const title = asText(slice.primary.title);
  const subtitle = asText(slice.primary.subtitle);

  const creators: Creator[] = (slice.primary.creators ?? []).map((item) => ({
    name: item?.author ?? "",  
    background: item?.background_image?.url ?? "",
    image: item.image?.url ?? "",
    text: item?.text ?? "",
    followed: item?.followed ?? false,
  }));

  return (
    <CreatorworkSection title={title} subtitle={subtitle} creators={creators} />
  );
};

export default TopCreatorSection;
