"use client";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import "../styles/ImageworkSection.css";

export default function FeaturedClient({ title, items = [] }: any) {
  if (!isFilled.richText(title) && !items?.length) return null;

  return (
    <section className="collection" id="feature">
      <div className="collection-container">
        <div className="collection-header">
          {isFilled.richText(title) && (
            <h2>
              <PrismicRichText field={title} />
            </h2>
          )}
        </div>

        <div className="collection-grid">
          {items.map(
            (item: any, index: number) =>
              (isFilled.image(item.nft_image) ||
                isFilled.keyText(item.author) ||
                isFilled.richText(item.nft_title) ||
                isFilled.keyText(item.bid)) && (
                <div key={index} className="card">
                  {isFilled.image(item.nft_image) && (
                    <PrismicNextImage
                      field={item.nft_image}
                      className="card-img"
                    />
                  )}

                  <div className="card-info">
                    <div className="top-row">
                      {isFilled.keyText(item.author) && (
                        <span className="artist-name">{item.author}</span>
                      )}
                      {isFilled.keyText(item.bid) && (
                        <small className="bid-label">Current Bid</small>
                      )}
                    </div>

                    <div className="bottom-row">
                      {isFilled.richText(item.nft_title) && (
                        <h4 className="card-title">
                          <PrismicRichText field={item.nft_title} />
                        </h4>
                      )}

                      {isFilled.keyText(item.bid) && (
                        <span className="bid-value">{item.bid}</span>
                      )}
                    </div>

                    {isFilled.keyText(item.bid) && (
                      <button className="bid-btn">Place a bid</button>
                    )}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
