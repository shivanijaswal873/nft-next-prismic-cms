"use client";
import "../styles/FAQSection.css";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import { isFilled, RichTextField, KeyTextField } from "@prismicio/client";

type FAQItem = {
  question: KeyTextField;
  answer: RichTextField;
};

type Props = {
  title: RichTextField;
  subtitle: RichTextField;
  faqs: FAQItem[] | null | undefined;
};

export default function FAQSection({ title, subtitle, faqs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const validFaqs = faqs.filter(
    (faq) => isFilled.keyText(faq.question) || isFilled.richText(faq.answer),
  );

  if (validFaqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-bg" id="faq">
      <div className="faq-box">
        {isFilled?.richText(title) && <PrismicRichText field={title} />}

        {isFilled?.richText(subtitle) && <PrismicRichText field={subtitle} />}

        <div className="faq-grid">
          {validFaqs?.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-row" onClick={() => toggleFAQ(index)}>
                {isFilled?.keyText(faq?.question) && (
                  <span className="faq-question">{faq?.question}</span>
                )}

                {isFilled?.richText(faq?.answer) && (
                  <span className="faq-icon">
                    {activeIndex === index ? "–" : "+"}
                  </span>
                )}
              </div>

              {isFilled?.richText(faq?.answer) && (
                <div
                  className={`faq-answer ${activeIndex === index ? "open" : ""}`}
                >
                  <PrismicRichText field={faq?.answer} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
