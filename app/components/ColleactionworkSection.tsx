"use client";

import { useState } from "react";
import ArtworkCard from "./ArtWork";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import "../styles/ImageworkSection.css";
import { isFilled } from "@prismicio/client";

type Item = {
  image: string;
  title: string;
  name: string;
  currentBid: string;
  category: string;
};

type Props = {
  title: PrismicRichTextProps["field"];
  subtitle: PrismicRichTextProps["field"];
  items: Item[];
  showTabs: boolean;
};

export default function CollectionSectionUI({
  title,
  subtitle,
  items,
  showTabs,
}: Props) {
  const [activeTab, setActiveTab] = useState("All");
  const normalize = (v: string) => v?.toLowerCase().trim();

  const tabs = showTabs
    ? ["All", ...Array.from(new Set(items.map((i) => normalize(i?.category))))]
    : [];

  const filteredItems = showTabs
    ? activeTab === "All"
      ? items
      : items?.filter((i) => normalize(i?.category) === normalize(activeTab))
    : items;
  return (
    <section className="collection" id="collection">
      <div className="collection-container">
        <div className="collection-header">
          {isFilled?.richText(title) && <PrismicRichText field={title} />}
          {isFilled?.richText(subtitle) && <PrismicRichText field={subtitle} />}
        </div>

        {showTabs && (
          <div className="collection-tabs">
            {tabs?.map((tab) => (
              <button
                key={tab}
                className={`colleaction-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab?.charAt(0)?.toUpperCase() + tab?.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="collection-grid">
          {filteredItems.map((item, index) => (
            <ArtworkCard
              key={index}
              image={item?.image}
              title={item?.title}
              currentBid={item?.currentBid}
              name={item?.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
