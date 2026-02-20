"use client";
import "../styles/CreatorworkSection.css";

export type Creator = {
  name: string;
  image: string;
  background: string;
  text: string;
  followed: boolean;
};

type Props = {
  title: string;
  subtitle: string;
  creators: Creator[];
};

export default function CreatorworkSection({
  title,
  subtitle,
  creators,
}: Props) {
  return (
    <section className="creator-section">
      <div className="creator-container">
        <div className="creator-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="top-grid" data-aos="fade-up">
          {creators.map((item, i) => (
            <div
              className={`top-card ${item.followed ? "active" : ""}`}
              key={i}
            >
              <img src={item.background} className="bg" />
              <img src={item.image} className="user" />

              <h3>{item.name}</h3>
              <p className="text">{item.text}</p>

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
