"use client";

import { useState } from "react";
import ArtworkCard from "./ArtWork";
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react";
import "../styles/ImageworkSection.css";

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

  const tabs = showTabs
    ? ["All", ...Array.from(new Set(items.map((i) => i.category)))]
    : [];

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((i) => i.category === activeTab);

  return (
    <section className="collection">
      <div className="collection-container">
        <div className="collection-header">
          <h2><PrismicRichText field={title} /></h2>
          <p><PrismicRichText field={subtitle} /></p>
        </div>

        {showTabs && (
          <div className="collection-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`colleaction-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        <div className="collection-grid">
          {filteredItems.map((item, index) => (
            <ArtworkCard
              key={index}
              image={item.image}
              title={item.title}
              currentBid={item.currentBid}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}