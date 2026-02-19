"use client";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import "../styles/ImageworkSection.css";

export default function FeaturedClient({ title, items = [] }: any) {
  return (
    <section className="collection" id="feature">
      <div className="collection-container">
        <div className="collection-header">
          <h2>
            <PrismicRichText field={title} />
          </h2>
        </div>

        <div className="collection-grid">
          {items.map((item: any, index: number) => (
            <div key={index} className="card">
              <PrismicNextImage field={item.nft_image} className="card-img" />

              <div className="card-info">
                <div className="top-row">
                  <span className="artist-name">{item.author}</span>
                  <small className="bid-label">Current Bid</small>
                </div>

                <div className="bottom-row">
                  <h4 className="card-title">
                    <PrismicRichText field={item.nft_title} />
                  </h4>
                  <span className="bid-value">{item.bid}</span>
                </div>

                <button className="bid-btn">Place a bid</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
