"use client";
import { useState } from "react";
import ImageworkCard from "../components/ImageworkCard.jsx";
import "../styles/ImageworkSection.css";

export default function ImageworkSection({ title, imagesData = [], showTabs,id }) {
 const [activeTab, setActiveTab] = useState("All");

  const tabs = showTabs
    ? ["All", ...new Set(imagesData.map((i) => i.category))]
    : [];

  const filteredItems =
    activeTab === "All"
      ? imagesData
      : imagesData.filter((i) => i.category === activeTab);

  return (
    <section className="collection"  
    id={id} 
    >
      <div className="collection-container">
        <div className="collection-header">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit.
          </p>
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

        <div className="collection-grid" data-aos="fade-up">
          {filteredItems.map((item, index) => (
            <ImageworkCard
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
