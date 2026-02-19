"use client";
import "../styles/CreatorworkSection.css";
import data from "../utils.json";

const imageMap = {
  "creator1.jpg": "/assets/creator1.jpg",
  "creator2.jpg": "/assets/creator2.jpg",
  "creator3.jpg": "/assets/creator3.jpg",
  "creator4.jpg": "/assets/creator4.jpg",
  "creator5.jpg": "/assets/creator5.jpg",
  "creator6.jpg": "/assets/creator6.jpg",
};

export default function CreatorworkSection() {
  return (
    <section className="creator-section">
      <div className="creator-container">
        <div className="creator-header">
          <h2>{data.creatorTitle}</h2>
          <p>
            {data.creatorSubtitle.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="top-grid" data-aos="fade-up">
          {data.creators.map((item, i) => (
            <div
              className={`top-card ${item.followed ? "active" : ""}`}
              key={i}
            >
              <img src={imageMap[item.bg]} className="bg" />
              <img src={imageMap[item.user]} className="user" />

              <h3>{item.name}</h3>

              <p className="text">
                {data.creatorCardText.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <button className="btn">
                {item.followed ? "+ Followed" : "+ Follow"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
