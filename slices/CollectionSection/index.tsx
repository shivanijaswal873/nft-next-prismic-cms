import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import CollectionSectionUI from "@/app/components/ColleactionworkSection";
import FeaturedClient from "@/app/components/FeaturedClient";

export type CollectionSectionProps =
  SliceComponentProps<Content.CollectionSectionSlice>;

export default function CollectionSection({ slice }: CollectionSectionProps) {
  const items =
    slice.primary.items?.map((item) => ({
      image: item?.nft_image?.url ?? "",
      title: item?.nft_title ?? "",
      name: item?.author ?? "",
      currentBid: item?.bid ?? "",
      category: item?.button_text ?? "All",
    })) ?? [];

  switch (slice?.variation) {
    case "featured":
      return (
        <FeaturedClient
          title={slice?.primary?.title}
          subtitle={slice?.primary?.subtitle}
          items={slice?.primary?.items}
        />
      );

    default:
      return (
        <CollectionSectionUI
          title={slice?.primary?.title}
          subtitle={slice?.primary?.subtitle}
          items={items}
          showTabs={slice?.primary?.show_tabs ?? false}
        />
      );
  }
}
