"use client";
import "../styles/NFTworkSection.css";
import data from "../utils.json";

export default function NFTworkSection() {
  return (
    <section className="NFT-section">
      <div className="NFT-box">
        <h2>
          {data.nftSection.title.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <button className="NFT-btn">{data.nftSection.buttonText}</button>
      </div>
    </section>
  );
}
