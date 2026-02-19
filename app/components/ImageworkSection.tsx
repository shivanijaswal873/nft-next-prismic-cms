"use client";

import { useState } from "react";
import { PrismicText, type PrismicRichTextProps } from "@prismicio/react";
import type { RichTextField } from "@prismicio/client";
import ImageWorkCard from "./ImageworkCard";
import "../styles/ImageworkSection.css";

type Item = {
  image: any;
  title: string;
  name: string;
  currentBid: string;
  category: string;
};

type Props = {
  id?: string;
  title: RichTextField;
  subtitle?: RichTextField;
  imagesData: Item[];
  showTabs?: boolean;
};

export default function ImageworkSection({
  title,
  subtitle,
  imagesData = [],
  showTabs,
  id,
}: Props) {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = showTabs
    ? ["All", ...new Set(imagesData.map((i) => i.category))]
    : [];

  const filteredItems =
    activeTab === "All"
      ? imagesData
      : imagesData.filter((i) => i.category === activeTab);

  return (
    <section className="collection" id={id}>
      <div className="collection-container">
        <div className="collection-header">
          <h2>
            <PrismicText field={title} />
          </h2>

          {subtitle && (
            <p>
              <PrismicText field={subtitle} />
            </p>
          )}
        </div>

        {showTabs && (
          <div className="collection-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`colleaction-button ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        <div className="collection-grid">
          {filteredItems.map((item, index) => (
            <ImageWorkCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
