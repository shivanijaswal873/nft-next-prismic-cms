"use client";

export default function ArtworkCard({ image, title, currentBid, name }) {
  const resolvedSrc = image.startsWith("/") ? image : `/assets/${image}`;

  return (
    <section className="card">
      <img src={resolvedSrc} alt={title} />
      <div className="card-info">
        <div className="top-row">
          <span className="artist-name">{name}</span>
          <small className="bid-label">Current Bid</small>
        </div>

        <div className="bottom-row">
          <h4 className="card-title">{title}</h4>
          <span className="bid-value">{currentBid}</span>
        </div>

        <button className="bid-btn">Place a bid</button>
      </div>
    </section>
  );
}
