"use client";
import "../styles/NFTworkSection.css";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField, KeyTextField, isFilled } from "@prismicio/client";

type Props = {
  title: RichTextField;
  button_text: KeyTextField;
};

export default function NFTworkSection({ title, button_text }: Props) {
  if (!isFilled.richText(title) && !isFilled.keyText(button_text)) return null;

  return (
    <section className="NFT-section">
      <div className="NFT-box">
        {isFilled.richText(title) && (
          <h2>
            <PrismicRichText field={title} />
          </h2>
        )}

        {isFilled.keyText(button_text) && (
          <button className="NFT-btn">{button_text}</button>
        )}
      </div>
    </section>
  );
}
