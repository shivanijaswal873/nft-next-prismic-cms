"use client";
import "../styles/ImageworkSection.css";

type Props = {
  image?: string;
  title?: string;
  currentBid?: string;
  name?: string;
};

export default function ArtworkCard({ image, title, currentBid, name }: Props) {
  if (!image && !title && !currentBid && !name) return null;

  return (
    <section className="card">
      {image && <img src={image} alt={title || "artwork"} />}

      <div className="card-info">
        <div className="top-row">
          {name && <span className="artist-name">{name}</span>}
          {currentBid && <small className="bid-label">Current Bid</small>}
        </div>

        <div className="bottom-row">
          {title && <h4 className="card-title">{title}</h4>}
          {currentBid && <span className="bid-value">{currentBid}</span>}
        </div>

        {(title || currentBid) && (
          <button className="bid-btn">Place a bid</button>
        )}
      </div>
    </section>
  );
}
