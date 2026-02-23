"use client";
import "../styles/CreatorworkSection.css";

export type Creator = {
  name?: string;
  image?: string;
  background?: string;
  text?: string;
  followed?: boolean;
};

type Props = {
  title?: string;
  subtitle?: string;
  creators?: Creator[];
};

export default function CreatorworkSection({
  title,
  subtitle,
  creators,
}: Props) {
  if (!title && !subtitle && !creators?.length) return null;

  return (
    <section className="creator-section">
      <div className="creator-container">
        <div className="creator-header">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>

        <div className="top-grid" data-aos="fade-up">
          {creators?.map(
            (item, i) =>
              (item?.name || item?.image || item?.background || item?.text) && (
                <div
                  className={`top-card ${item?.followed ? "active" : ""}`}
                  key={i}
                >
                  {item?.background && (
                    <img src={item?.background} className="bg" />
                  )}
                  {item?.image && <img src={item?.image} className="user" />}

                  {item?.name && <h3>{item?.name}</h3>}
                  {item?.text && <p className="text">{item?.text}</p>}

                  {(item?.name || item?.followed !== undefined) && (
                    <button className="btn">
                      {item?.followed ? "+ Followed" : "+ Follow"}
                    </button>
                  )}
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
